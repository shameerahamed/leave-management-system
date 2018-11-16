import {
	GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull, GraphQLID
} from 'graphql'; 

import {userType} from './user'
import {leaveType} from './leave'

import UserModel from '../../models/user';
import LeaveModel from  '../../models/leave';

export const leaveUpdatesType = new GraphQLObjectType({
    name: 'LeaveUpdates',
    fields: function () {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            },
            updatedLeaveName: {
                type: GraphQLString
            },
            updatedLeaveType: {
                type: GraphQLString
            },
            updatedStartDate: {
                type: GraphQLString
            },
            updatedEndDate: {
                type: GraphQLString
            },
            updatedLeaveDays: {
                type: GraphQLInt
            },
            leaveStatus: {
                type: GraphQLString
            },
            datePosted: {
                type: GraphQLString
            },
            editReason: {
                type: GraphQLString
            },
            previousLeaveDays: {
                type: GraphQLString
            },
            previousLeaveName: {
                type: GraphQLString
            },
            previousLeaveType: {
                type: GraphQLString
            },
            previousStartDate: {
                type: GraphQLString
            },
            previousEndDate: {
                type: GraphQLString
            },
            reviewedBy: {
                type: GraphQLString
            },
            leaveId: {
                type: GraphQLString
            },
            leaverecord: {
                type: leaveType,
                resolve(leaveUpdates) {
                    const { leaveId } = leaveUpdates
                    return LeaveModel.findById(leaveId).exec()
                }
            },
            userId: {
                type: GraphQLString
            },
            user: {
                type: userType,
                resolve(leave) {
                    const { userId } = leave
                    return UserModel.find({id: userId}).exec()
                }
            }
        }
    }
});