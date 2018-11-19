import {
GraphQLList, GraphQLString, GraphQLBoolean
} from 'graphql';
import { leaveType } from '../types/leave';
import { leaveUpdatesType } from '../types/leaveUpdates'; 
import leaveModel from '../../models/leave';
import leaveUpdatesModel from '../../models/leaveUpdates';

// Query
export const leaveRecords = {
  type: new GraphQLList(leaveType),
  resolve: function () {
    const leaves = leaveModel.find().exec()
    if (!leaves) {
      throw new Error('Error getting leaves')
    }
    return leaves
  }
};

export const findLeaveRecord = {
  type: new GraphQLList(leaveType),
  args: {
    leaveStatus: {
      name: "leaveStatus",
      type: GraphQLString
    },
  isArchived: {
      name: "isArchived",
      type:  GraphQLString
    }
  },
  resolve: function (root, params) {
    const leaves = leaveModel.find({"leaveStatus": params.leaveStatus}, function(err, docs){
      if (!docs) {
        throw new Error('Error in retriving leaveRecord');
      }
      console.log(docs);
      return docs;
    });
    
    return leaves;
  }
};

export const findLeaveUpdates = {
  type: new GraphQLList(leaveUpdatesType),
  args: {
    isArchived: {
      name: "isArchived",
      type: GraphQLString
    }
  },
  resolve: function(root, params) {
    const leaveUpdates = leaveUpdatesModel.find(params).exec();
    if (!leaveUpdates) {
      throw new Error('Error in retriving leaveupdates');
    }
    return leaveUpdates;
  }
}

export const findSicksheetRecord = {
  type: new GraphQLList(leaveType),
  resolve: function() {
    const leaves = leaveModel.find({leaveType: 'Sick'}).exec();
    if (!leaves) {
      throw new Error('Error in retriving leaves');
    }
    return leaves;
  }
}