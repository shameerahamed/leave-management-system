//@ flow
import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import Leaves from '../components/LeaveCalendar';

const LeaveRecord = gql`
  {
    findLeaveRecord(leaveStatus: "approved", isArchived: "false") {
      id
      leaveName
      startDate
      endDate
      leaveDays
      user {
        name
        surname
      }
    }
  }
`;

export default () => (
  <Query query={LeaveRecord} pollInterval={60000}>
    {({ loading, error, data }) => {
      if (loading) {
        return (
          <div className="text-center">
            <div className="loader1" />
          </div>
        );
      }

      if (error) {
        console.log(error.message);
        return (
          <div className="col mx-auto">
            <div className="text-center">
              <p className="display-4">Something went wrong!</p>
            </div>
          </div>
        );
      }

      return (
        <div className="container">
          <Leaves data={data} />
        </div>
      );
    }}
  </Query>
);
