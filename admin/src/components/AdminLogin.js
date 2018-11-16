// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

import {
  requestAdminLogin,
  receiveAdminLogin,
  loginAdminError
} from '../actions/AdminLogin';

const AUTHENTICATE_ADMIN = gql`
  mutation authenticateAdmin($email: String!, $password: String!) {
    authenticateAdmin(email: $email, password: $password) {
      Admin {
        name
      }
      ok
      token
    }
  }
`;

type Props = {
  logInAdmin: Function,
  isFetching: boolean,
  message: string,
  dispatch: Function
};

type State = {
  errorMessage: string,
  email: string,
  password: string
};

class Login extends Component<Props, State> {
  handleSubmit: Function;
  handleEmailChange: Function;
  handlePasswordChange: Function;

  constructor() {
    super();
    this.state = { errorMessage: '', email: '', password: '' };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange({ target }: SyntheticInputEvent<>) {
    this.setState({ email: target.value });
  }

  handlePasswordChange({ target }: SyntheticInputEvent<>) {
    this.setState({ password: target.value });
  }

  handleSubmit(e: Event) {
    e.preventDefault();
    const { email, password } = this.state;

    if (!email || !password) {
      this.setState({
        errorMessage: 'One or more required fields are missing!'
      });

      return;
    }

    this.setState({ errorMessage: '' });

    this.authenticateAdmin();
  }

  authenticateAdmin = async () => {
    const { logInAdmin, dispatch } = this.props;
    const { email, password } = this.state;

    try {
      dispatch(requestAdminLogin());
      const response = await logInAdmin({
        variables: { email, password }
      });
      localStorage.setItem(
        'admin_token',
        response.data.authenticateAdmin.token
      );
      localStorage.setItem(
        'admin_user',
        response.data.authenticateAdmin.Admin.name
      );
      dispatch(receiveAdminLogin(response.data.authenticateAdmin));
    } catch (error) {
      console.log(error);
      this.setState({ errorMessage: error.message });
      localStorage.removeItem('admin_token');
      localStorage.removeItem('admin_user');
      dispatch(loginAdminError());
    }
  };

  render() {
    return (
      <div className="container">
        <h1 className="display-4 text-center pb-4">Leave Management System</h1>
        <div className="col-md-5 mx-auto">
          <div className="card card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  id="email"
                  onChange={this.handleEmailChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  id="password"
                  onChange={this.handlePasswordChange}
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary col">
                  Log in
                </button>
              </div>
            </form>
            <div className="text-danger text-center">
              {this.props.isFetching ? (
                <div className="loader" />
              ) : (
                this.props.message
              )}
            </div>
            <div className="text-danger text-center">
              <div>{this.state.errorMessage}</div>
            </div>
          </div>
          <div className="card card-body mt-3">
            <Link to="/resetpassword" className="btn">
              Forgot your password?
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default graphql(AUTHENTICATE_ADMIN, {
  name: 'logInAdmin'
})(Login);
