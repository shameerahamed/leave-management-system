// @flow
import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import '../spinners.css';

const USER_RECORD = gql`
  query($id: ID!) {
    user(id: $id) {
      leaverecord {
        id
        leaveName
        leaveDays
        startDate
        endDate
        leaveReason
        leaveStatus
      }
    }
  }
`;

const ApprovedRecordList = props => {
  const approvedList = props.user_record.leaverecord//.edges
    .filter(data => data.node.leaveStatus === 'approved')
    .map(record => (
      <tr key={record.node.id}>
        <td>{record.node.leaveName}</td>
        <td>{record.node.leaveDays}</td>
        <td>{record.node.startDate}</td>
        <td>{record.node.endDate}</td>
        <td>{record.node.leaveReason}</td>
      </tr>
    ));

  if (approvedList.length > 0) {
    return (
      <table className="table table-bordered table-hover">
        <thead className="thead-light">
          <tr>
            <th>Leave type</th>
            <th>Leave days</th>
            <th>Start date</th>
            <th>End date</th>
            <th>Reason</th>
          </tr>
        </thead>
        <tbody>{approvedList}</tbody>
      </table>
    );
  } else {
    return <div />;
  }
};

const PendingRecordList = props => {
  const pendingList = props.user_record.leaverecord//.edges
    .filter(data => data.node.leaveStatus === 'pending')
    .map(record => (
      <tr key={record.node.id}>
        <td>{record.node.leaveName}</td>
        <td>{record.node.leaveDays}</td>
        <td>{record.node.startDate}</td>
        <td>{record.node.endDate}</td>
        <td>{record.node.leaveReason}</td>
      </tr>
    ));

  if (pendingList.length > 0) {
    return (
      <table className="table table-bordered table-hover">
        <thead className="thead-light">
          <tr>
            <th>Leave type</th>
            <th>Leave days</th>
            <th>Start date</th>
            <th>End date</th>
            <th>Reason</th>
          </tr>
        </thead>
        <tbody>{pendingList}</tbody>
      </table>
    );
  } else {
    return <div />;
  }
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
                : 'text-secondary'
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
      <div>
        <nav className="nav">{this.renderTabs()}</nav>
        <div className="mt-2">{this.renderPanel()}</div>
      </div>
    );
  }
}

type Props = {
  id: any
};

export default (props: Props) => (
  <Query query={USER_RECORD} variables={{ id: props.id }} pollInterval={60000}>
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

      const tabData = [
        {
          label: 'Approved leave schedule',
          content: <ApprovedRecordList user_record={data.user} />
        },
        {
          label: 'Pending leave schedule',
          content: <PendingRecordList user_record={data.user} />
        }
      ];

      return (
        <div className="container">
          <Tabs data={tabData} />
        </div>
      );
    }}
  </Query>
);
