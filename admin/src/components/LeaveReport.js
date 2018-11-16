// @flow
import React, { Component, Fragment } from 'react';

import { CSVLink } from 'react-csv';

const moment = require('moment');

const ApprovedLeaveReportList = props => {
  const approvedRecord = props.approved_record.map(a => a).sort((a, b) => {
    return a.user.name.localeCompare(b.user.name);
  });

  const approvedRecordItems = approvedRecord.map(record => (
    <tr key={record.id}>
      <td>
        {record.user.name} {record.user.surname}
      </td>
      <td>{record.leaveName}</td>
      <td>{record.leaveType}</td>
      <td>{record.startDate}</td>
      <td>{record.endDate}</td>
      <td>{record.leaveDays}</td>
      <td>{record.leaveStatus}</td>
      <td>{record.leaveReason}</td>
      <td>{record.datePosted}</td>
      <td>{record.dateReviewed}</td>
    </tr>
  ));

  const records = approvedRecord.map(a => {
    var rObj = {};
    rObj['name'] = a.user.name;
    rObj['Surname'] = a.user.surname;
    rObj['Employee #'] = a.user.employeeNumber;
    rObj['Leave'] = a.leaveName;
    rObj['Type'] = a.leaveType;
    rObj['Start date'] = a.startDate;
    rObj['End date'] = a.endDate;
    rObj['Leave days'] = a.leaveDays;
    rObj['Status'] = a.leaveStatus;
    rObj['Reason'] = a.leaveReason;
    rObj['Date posted'] = a.datePosted;
    rObj['Date reviewed'] = a.dateReviewed;
    return rObj;
  });

  return approvedRecordItems.length > 0 ? (
    <Fragment>
      <CSVLink
        data={records}
        filename={'Approved-leave.csv'}
        className="btn btn-primary btn-sm mb-2"
      >
        Download
      </CSVLink>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Leave</th>
              <th>Type</th>
              <th>Start date</th>
              <th>End date</th>
              <th>Leave days</th>
              <th>Status</th>
              <th>Reason</th>
              <th>Date posted</th>
              <th>Date reviewed</th>
            </tr>
          </thead>
          <tbody>{approvedRecordItems}</tbody>
        </table>
      </div>
    </Fragment>
  ) : (
    <div
      className="card card-body border-0"
      style={{ paddingTop: '100px', paddingBottom: '260px' }}
    >
      <h1 className="display-4 text-center">
        <em>There is no record to display.</em>
      </h1>
    </div>
  );
};

const PendingLeaveReportList = props => {
  const pendingRecord = props.pending_record.map(a => a).sort((a, b) => {
    return a.user.name.localeCompare(b.user.name);
  });

  const pendingRecordItems = pendingRecord.map(record => (
    <tr key={record.id}>
      <td>
        {record.user.name} {record.user.surname}
      </td>
      <td>{record.leaveName}</td>
      <td>{record.leaveType}</td>
      <td>{record.startDate}</td>
      <td>{record.endDate}</td>
      <td>{record.leaveDays}</td>
      <td>{record.leaveStatus}</td>
      <td>{record.leaveReason}</td>
      <td>{record.datePosted}</td>
    </tr>
  ));

  const records = pendingRecord.map(a => {
    var rObj = {};
    rObj['name'] = a.user.name;
    rObj['Surname'] = a.user.surname;
    rObj['Leave'] = a.leaveName;
    rObj['Type'] = a.leaveType;
    rObj['Start date'] = a.startDate;
    rObj['End date'] = a.endDate;
    rObj['Leave days'] = a.leaveDays;
    rObj['Status'] = a.leaveStatus;
    rObj['Reason'] = a.leaveReason;
    rObj['Date posted'] = a.datePosted;
    return rObj;
  });

  return pendingRecordItems.length > 0 ? (
    <Fragment>
      <CSVLink
        data={records}
        filename={'Pending-leave.csv'}
        className="btn btn-primary btn-sm mb-2"
      >
        Download
      </CSVLink>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Leave</th>
              <th>Type</th>
              <th>Start date</th>
              <th>End date</th>
              <th>Leave days</th>
              <th>Status</th>
              <th>Reason</th>
              <th>Date posted</th>
            </tr>
          </thead>
          <tbody>{pendingRecordItems}</tbody>
        </table>
      </div>
    </Fragment>
  ) : (
    <div
      className="card card-body border-0"
      style={{ paddingTop: '100px', paddingBottom: '260px' }}
    >
      <h1 className="display-4 text-center">
        <em>There is no record to display.</em>
      </h1>
    </div>
  );
};

const CancelledLeaveReportList = props => {
  const cancelledRecord = props.cancelled_record.map(a => a).sort((a, b) => {
    return a.user.name.localeCompare(b.user.name);
  });

  const cancelledRecordItems = cancelledRecord.map(record => (
    <tr key={record.id}>
      <td>
        {record.user.name} {record.user.surname}
      </td>
      <td>{record.leaveName}</td>
      <td>{record.leaveType}</td>
      <td>{record.startDate}</td>
      <td>{record.endDate}</td>
      <td>{record.leaveDays}</td>
      <td>{record.leaveStatus}</td>
      <td>{record.cancelledReason}</td>
      <td>{record.datePosted}</td>
      <td>{record.dateReviewed}</td>
    </tr>
  ));

  const records = cancelledRecord.map(a => {
    var rObj = {};
    rObj['name'] = a.user.name;
    rObj['Surname'] = a.user.surname;
    rObj['Leave'] = a.leaveName;
    rObj['Type'] = a.leaveType;
    rObj['Start date'] = a.startDate;
    rObj['End date'] = a.endDate;
    rObj['Leave days'] = a.leaveDays;
    rObj['Status'] = a.leaveStatus;
    rObj['Cancelled reason'] = a.cancelledReason;
    rObj['Date posted'] = a.datePosted;
    rObj['Date reviewed'] = a.dateReviewed;
    return rObj;
  });

  return cancelledRecordItems.length > 0 ? (
    <Fragment>
      <CSVLink
        data={records}
        filename={'Cancelled-leave.csv'}
        className="btn btn-primary btn-sm mb-2"
      >
        Download
      </CSVLink>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Leave</th>
              <th>Type</th>
              <th>Start date</th>
              <th>End date</th>
              <th>Leave days</th>
              <th>Status</th>
              <th>Reason</th>
              <th>Date posted</th>
              <th>Date reviewed</th>
            </tr>
          </thead>
          <tbody>{cancelledRecordItems}</tbody>
        </table>
      </div>
    </Fragment>
  ) : (
    <div
      className="card card-body border-0"
      style={{ paddingTop: '100px', paddingBottom: '260px' }}
    >
      <h1 className="display-4 text-center">
        <em>There is no record to display.</em>
      </h1>
    </div>
  );
};

const DeclinedLeaveReportList = props => {
  const declinedRecord = props.declined_record.map(a => a).sort((a, b) => {
    return a.user.name.localeCompare(b.user.name);
  });

  const declinedRecordItems = declinedRecord.map(record => (
    <tr key={record.id}>
      <td>
        {record.user.name} {record.user.surname}
      </td>
      <td>{record.leaveName}</td>
      <td>{record.leaveType}</td>
      <td>{record.startDate}</td>
      <td>{record.endDate}</td>
      <td>{record.leaveDays}</td>
      <td>{record.leaveStatus}</td>
      <td>{record.declinedReason}</td>
      <td>{record.datePosted}</td>
      <td>{record.dateReviewed}</td>
    </tr>
  ));

  const records = declinedRecord.map(a => {
    var rObj = {};
    rObj['name'] = a.user.name;
    rObj['Surname'] = a.user.surname;
    rObj['Leave'] = a.leaveName;
    rObj['Type'] = a.leaveType;
    rObj['Start date'] = a.startDate;
    rObj['End date'] = a.endDate;
    rObj['Leave days'] = a.leaveDays;
    rObj['Status'] = a.leaveStatus;
    rObj['Declined reason'] = a.declinedReason;
    rObj['Date posted'] = a.datePosted;
    rObj['Date reviewed'] = a.dateReviewed;
    return rObj;
  });

  return declinedRecordItems.length > 0 ? (
    <Fragment>
      <CSVLink
        data={records}
        filename={'Declined-leave.csv'}
        className="btn btn-primary btn-sm mb-2"
      >
        Download
      </CSVLink>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Leave</th>
              <th>Type</th>
              <th>Start date</th>
              <th>End date</th>
              <th>Leave days</th>
              <th>Status</th>
              <th>Reason</th>
              <th>Date posted</th>
              <th>Date reviewed</th>
            </tr>
          </thead>
          <tbody>{declinedRecordItems}</tbody>
        </table>
      </div>
    </Fragment>
  ) : (
    <div
      className="card card-body border-0"
      style={{ paddingTop: '100px', paddingBottom: '260px' }}
    >
      <h1 className="display-4 text-center">
        <em>There is no record to display.</em>
      </h1>
    </div>
  );
};

const LeaveUpdatesReportList = props => {
  const leaveUpdates = props.leave_updates.map(a => a).sort((b, c) => {
    return b.leaveId - c.leaveId;
  });

  const leaveUpdateItems = leaveUpdates.map(record => (
    <tr key={record.id}>
      <td>{record.leaveId}</td>
      <td>
        {record.leaverecord.user.name} {record.leaverecord.user.surname}
      </td>
      <td>{record.previousStartDate}</td>
      <td>{record.previousEndDate}</td>
      <td>{record.previousLeaveName}</td>
      <td>{record.previousLeaveDays}</td>
      <td>{record.updatedStartDate}</td>
      <td>{record.updatedEndDate}</td>
      <td>{record.updatedLeaveName}</td>
      <td>{record.updatedLeaveDays}</td>
      <td>{record.editReason}</td>
      <td>{record.datePosted}</td>
    </tr>
  ));

  const records = props.leave_updates.map(a => {
    var rObj = {};
    rObj['name'] = a.leaverecord.user.name;
    rObj['Surname'] = a.leaverecord.user.surname;
    rObj['Previous start date'] = a.previousStartDate;
    rObj['Previous end date'] = a.previousEndDate;
    rObj['Previous leave name'] = a.previousLeaveName;
    rObj['Previous leave days'] = a.previousLeaveDays;
    rObj['Updated start date'] = a.updatedStartDate;
    rObj['Updated end date'] = a.updatedEndDate;
    rObj['Updated leave name'] = a.updatedLeaveName;
    rObj['Updated leave days'] = a.updatedLeaveDays;
    rObj['Edit reason'] = a.editReason;
    rObj['Date posted'] = a.datePosted;
    return rObj;
  });

  return leaveUpdateItems.length > 0 ? (
    <Fragment>
      <CSVLink
        data={records}
        filename={'Leave-updates.csv'}
        className="btn btn-primary btn-sm mb-2"
      >
        Download
      </CSVLink>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="thead-light">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Previous start date</th>
              <th>Previous end date</th>
              <th>Previous leave</th>
              <th>Previous leave days</th>
              <th>Updated start date</th>
              <th>Updated end date</th>
              <th>Updated leave</th>
              <th>Updated leave days</th>
              <th>Reason</th>
              <th>Date posted</th>
            </tr>
          </thead>
          <tbody>{leaveUpdateItems}</tbody>
        </table>
      </div>
    </Fragment>
  ) : (
    <div
      className="card card-body border-0"
      style={{ paddingTop: '100px', paddingBottom: '260px' }}
    >
      <h1 className="display-4 text-center">
        <em>There is no record to display.</em>
      </h1>
    </div>
  );
};

const StaffRecordList = props => {
  const staffRecordList = props.staff_record.map(a => a).sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  const staffRecordItems = staffRecordList.map(record => (
    <tr key={record.id}>
      <td>
        {record.name} {record.surname}
      </td>
      <td>{record.annual}</td>
      <td>{record.sick}</td>
      <td>{record.bereavement}</td>
      <td>{record.familyCare}</td>
      <td>{record.christmas}</td>
      <td>{record.maternity}</td>
      <td>{record.paternity}</td>
      <td>{record.employeeNumber}</td>
    </tr>
  ));

  const records = staffRecordList.map(a => {
    var rObj = {};
    rObj['name'] = a.name;
    rObj['Surname'] = a.surname;
    rObj['Annual'] = a.annual;
    rObj['Sick'] = a.sick;
    rObj['Bereavement'] = a.bereavement;
    rObj['Family care'] = a.familyCare;
    rObj['Christmas'] = a.christmas;
    rObj['Maternity'] = a.maternity;
    rObj['Paternity'] = a.paternity;
    rObj['employeeNumber'] = a.paternity;
    return rObj;
  });

  return staffRecordItems.length > 0 ? (
    <Fragment>
      <CSVLink
        data={records}
        filename={'User-record.csv'}
        className="btn btn-primary btn-sm mb-2"
      >
        Download
      </CSVLink>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Annual </th>
              <th>Sick</th>
              <th>Bereavement</th>
              <th>Family care</th>
              <th>Christmas</th>
              <th>Maternity</th>
              <th>Paternity</th>
              <th>Employee #</th>
            </tr>
          </thead>
          <tbody>{staffRecordItems}</tbody>
        </table>
      </div>
    </Fragment>
  ) : (
    <div
      className="card card-body border-0"
      style={{ paddingTop: '100px', paddingBottom: '260px' }}
    >
      <h1 className="display-4 text-center">
        <em>There is no record to display.</em>
      </h1>
    </div>
  );
};

const UserUpdatesReportList = props => {
  const userUpdates = props.user_updates.map(a => a).sort((b, c) => {
    return b.userId - c.userId;
  });

  const userUpdateItems = userUpdates.map(record => {
    let dob = new Date(record.dateOfBirth);
    let dateOfBirth = moment(dob).format('DD/MM/YYYY');

    return (
      <tr key={record.id}>
        <td>
          {record.user.name} {record.user.surname}
        </td>
        <td>{record.annual}</td>
        <td>{record.sick}</td>
        <td>{record.bereavement}</td>
        <td>{record.familyCare}</td>
        <td>{record.christmas}</td>
        <td>{record.maternity}</td>
        <td>{record.paternity}</td>
        <td>{record.designation}</td>
        <td>{dateOfBirth}</td>
        <td>{record.gender}</td>
        <td>{record.editReason}</td>
      </tr>
    );
  });

  const records = props.user_updates.map(a => {
    var rObj = {};
    rObj['name'] = a.user.name;
    rObj['Surname'] = a.user.surname;
    rObj['Annual'] = a.annual;
    rObj['Sick'] = a.sick;
    rObj['Bereavement'] = a.bereavement;
    rObj['Family care'] = a.familyCare;
    rObj['Christmas'] = a.christmas;
    rObj['Maternity'] = a.maternity;
    rObj['Paternity'] = a.paternity;
    rObj['Designation'] = a.designation;
    rObj['Date Of Birth'] = a.dateOfBirth;
    rObj['Gender'] = a.gender;
    rObj['Edit reason'] = a.editReason;
    rObj['Date posted'] = a.datePosted;
    return rObj;
  });

  return userUpdateItems.length > 0 ? (
    <Fragment>
      <CSVLink
        data={records}
        filename={'User-updates.csv'}
        className="btn btn-primary btn-sm mb-2"
      >
        Download
      </CSVLink>
      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Annual </th>
              <th>Sick</th>
              <th>Bereavement</th>
              <th>Family care</th>
              <th>Christmas</th>
              <th>Maternity</th>
              <th>Paternity</th>
              <th>Designation</th>
              <th>DOB</th>
              <th>Gender</th>
              <th>Reason</th>
            </tr>
          </thead>
          <tbody>{userUpdateItems}</tbody>
        </table>
      </div>
    </Fragment>
  ) : (
    <div
      className="card card-body border-0"
      style={{ paddingTop: '100px', paddingBottom: '260px' }}
    >
      <h1 className="display-4 text-center">
        <em>There is no record to display.</em>
      </h1>
    </div>
  );
};

type tabsProps = {
  data: Array<any>
};

type tabsState = {
  activeIndex: number
};

class Tabs extends Component<tabsProps, tabsState> {
  selectTabIndex: Function;

  constructor() {
    super();
    this.state = { activeIndex: 0 };

    this.selectTabIndex = this.selectTabIndex.bind(this);
  }

  selectTabIndex(e: SyntheticEvent<HTMLElement>) {
    this.setState({
      activeIndex: parseInt(e.currentTarget.id, 10)
    });
  }

  renderTabs() {
    return this.props.data.map((tab, index) => {
      const isActive = this.state.activeIndex === index;
      return (
        <div className="nav-link btn" key={index}>
          <div
            className={
              isActive
                ? 'border border-right-0 border-left-0 border-top-0 border-secondary'
                : 'text-secondary btn-link'
            }
            onClick={this.selectTabIndex}
            id={index}
          >
            {tab.label}
          </div>
        </div>
      );
    });
  }

  renderPanel() {
    return <div>{this.props.data[this.state.activeIndex].content}</div>;
  }

  render() {
    return (
      <div className="container">
        <nav className="nav justify-content-center">{this.renderTabs()}</nav>
        <div className="mt-1">{this.renderPanel()}</div>
      </div>
    );
  }
}

type Props = {
  cancelled_record: Object,
  declined_record: Object,
  approved_record: Object,
  pending_record: Object,
  user_updates: Object,
  leave_updates: Object,
  staff_record: Object
};

export default class LeaveReportList extends Component<Props> {
  render() {
    const tabData = [
      {
        label: 'Approved',
        content: (
          <ApprovedLeaveReportList
            approved_record={this.props.approved_record}
          />
        )
      },
      {
        label: 'Pending',
        content: (
          <PendingLeaveReportList pending_record={this.props.pending_record} />
        )
      },
      {
        label: 'Cancelled',
        content: (
          <CancelledLeaveReportList
            cancelled_record={this.props.cancelled_record}
          />
        )
      },
      {
        label: 'Declined',
        content: (
          <DeclinedLeaveReportList
            declined_record={this.props.declined_record}
          />
        )
      },
      {
        label: 'Leave updates',
        content: (
          <LeaveUpdatesReportList leave_updates={this.props.leave_updates} />
        )
      },
      {
        label: 'User record',
        content: <StaffRecordList staff_record={this.props.staff_record} />
      },
      {
        label: 'User updates',
        content: (
          <UserUpdatesReportList user_updates={this.props.user_updates} />
        )
      }
    ];

    return <Tabs data={tabData} />;
  }
}
