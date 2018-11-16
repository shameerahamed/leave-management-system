// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import '../spinners.css';

const USER_DETAIL = gql`
  query($id: ID!) {
    user(id: $id) {
      name
      surname
      annual
      sick
      bereavement
      familyCare
      christmas
      maternity 
      paternity
      gender
    }
  }
`;

type Props = {
  id: any
};

export default (props: Props) => (
  <Query query={USER_DETAIL} variables={{ id: props.id }} pollInterval={60000}>
    {({ loading, error, data }) => {
      if (loading) {
        return (
          <div
            className="container text-center"
            style={{ paddingTop: '100px' }}
          >
            <div className="col-md-8 ml-auto mr-auto">
              <div className="loader1" />
            </div>
          </div>
        );
      }

      if (error) {
        console.log(error.message);
        return (
          <div
            className="container text-center"
            style={{ paddingTop: '100px' }}
          >
            <div className="col-md-8 ml-auto mr-auto">
              <p>Something went wrong!</p>
            </div>
          </div>
        );
      }

      return (
        <div style={{ paddingBottom: '30px' }}>
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <p style={{ fontSize: '30px' }}>
                  {data.user.name} {data.user.surname}
                </p>
                <p>
                  <Link to="/changepassword" className="btn btn-primary">
                    Change password
                  </Link>
                </p>
              </div>
              <div className="col-md-4">
                <ul className="list-group">
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Annual
                    <span className="badge badge-primary badge-pill">
                      {data.user.annual}
                    </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Sick
                    <span className="badge badge-primary badge-pill">
                      {data.user.sick}
                    </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Bereavement
                    <span className="badge badge-primary badge-pill">
                      {data.user.bereavement}
                    </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Family care
                    <span className="badge badge-primary badge-pill">
                      {data.user.familyCare}
                    </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    Christmas
                    <span className="badge badge-primary badge-pill">
                      {data.user.christmas}
                    </span>
                  </li>
                  {data.user.gender.toLowerCase() === 'female' &&
                    data.user.maternity > 0 && (
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        Maternity
                        <span className="badge badge-primary badge-pill">
                          {data.user.maternity}
                        </span>
                      </li>
                    )}
                  {data.user.gender.toLowerCase() === 'male' &&
                    data.user.paternity > 0 && (
                      <li className="list-group-item d-flex justify-content-between align-items-center">
                        Paternity
                        <span className="badge badge-primary badge-pill">
                          {data.user.paternity}
                        </span>
                      </li>
                    )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    }}
  </Query>
);
