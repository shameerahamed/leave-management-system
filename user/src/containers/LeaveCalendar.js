//@ flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../spinners.css';

import { fetchLeaveIfNeeded } from '../actions/LeaveCalendar';
import Leaves from '../components/LeaveCalendar';

class LeaveCalendar extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchLeaveIfNeeded());
  }

  render() {
    const { records, isFetching } = this.props;
    return (
      <div className="LeaveCalendar">
        {isFetching
          ? <div className="text-center">
              <div className="loader1" />
            </div>
          : <Leaves records={records} />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { leaveRecords } = state;
  const { isFetching, items: records } = leaveRecords;

  return { records, isFetching };
};

export default connect(mapStateToProps)(LeaveCalendar);