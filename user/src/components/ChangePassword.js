// @flow
import React, { Component } from 'react';

import '../spinners.css';

export default class UserChange extends Component {
  props: {
    onChangeClick: Function,
    message: string,
    isFetching: boolean,
    auth_info: Object
  };

  state: {
    errorMessage: string,
    currentPassword: string,
    newPassword: string,
    newPasswordConfirm: string
  };

  constructor() {
    super();
    this.state = {
      errorMessage: '',
      currentPassword: '',
      newPassword: '',
      newPasswordConfirm: ''
    };
  }

  handleCurrentPasswordChange({ target }: SyntheticInputEvent) {
    this.setState({ currentPassword: target.value });
  }

  handleNewPasswordChange({ target }: SyntheticInputEvent) {
    this.setState({ newPassword: target.value });
  }

  handleNewPasswordConfirmChange({ target }: SyntheticInputEvent) {
    this.setState({ newPasswordConfirm: target.value });
  }

  handleSubmit(e: Event) {
    e.preventDefault();
    this.setState({ errorMessage: '' });
    const { auth_info } = this.props;
    let auth_token = auth_info.auth_token;
    if (!auth_token) {
      auth_token = localStorage.getItem('auth_token');
    }

    const currentPassword = this.state.currentPassword
      ? this.state.currentPassword.trim()
      : null;
    const newPassword = this.state.newPassword
      ? this.state.newPassword.trim()
      : null;
    const newPasswordConfirm = this.state.newPasswordConfirm
      ? this.state.newPasswordConfirm.trim()
      : null;

    if (!currentPassword || !newPassword || !newPasswordConfirm) {
      this.setState({
        errorMessage: 'One or more required fields are missing!'
      });
      return;
    }

    if (newPassword !== newPasswordConfirm) {
      this.setState({ errorMessage: 'Your new passwords do not match!' });
      return;
    }

    this.setState({ errorMessage: '' });

    const creds = {
      currentPassword: currentPassword,
      newPassword: newPassword,
      auth_token: auth_token
    };
    this.props.onChangeClick(creds);
  }

  render() {
    return (
      <div className="card card-block" style={{ marginTop: '100px' }}>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <label htmlFor="currentPassword">Current password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Current password"
              id="currentPassword"
              onChange={this.handleCurrentPasswordChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="newPassword">New password</label>
            <input
              type="password"
              className="form-control"
              placeholder="New password"
              id="newPassword"
              onChange={this.handleNewPasswordChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="newPasswordConfirm">Confirm new password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Confirm new password"
              id="newPasswordConfirm"
              onChange={this.handleNewPasswordConfirmChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary col">
              Update password
            </button>
          </div>
        </form>
        <div className="text-danger text-center">
          {this.props.isFetching
            ? <div className="loader1" />
            : this.props.message}
        </div>
        <div className="text-danger text-center">
          <div>{this.state.errorMessage}</div>
        </div>
      </div>
    );
  }
}