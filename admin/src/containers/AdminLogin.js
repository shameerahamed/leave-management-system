// @flow
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Login from '../components/AdminLogin';

type Props = {
  isFetching: boolean,
  message: string,
  isAuthenticated: boolean,
  dispatch: Function
};

function AdminLogin(props: Props) {
  return (
    <Fragment>
      {!props.isAuthenticated ? (
        <Login
          isFetching={props.isFetching}
          message={props.message}
          dispatch={props.dispatch}
        />
      ) : (
        <Redirect to="/" />
      )}
    </Fragment>
  );
}

function mapStateToProps(state) {
  const { adminAuth } = state;
  const { isFetching, message, isAuthenticated } = adminAuth;

  return { isFetching, message, isAuthenticated };
}

export default connect(mapStateToProps)(AdminLogin);
