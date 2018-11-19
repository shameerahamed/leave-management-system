import {
	GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt, GraphQLNonNull, GraphQLInputObjectType
} from 'graphql'; 

import {userType} from './user'
import UserModel from '../../models/user';

export const leaveType = new GraphQLObjectType({
    name: 'Leave',
    fields: function () {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            },
            leaveName: {
                type: GraphQLString
            },
            leaveType: {
                type: GraphQLString
            },
            startDate: {
                type: GraphQLString
            },
            endDate: {
                type: GraphQLString
            },
            leaveDays: {
                type: GraphQLInt
            },
            leaveReason: {
                type: GraphQLString
            },
            leaveStatus: {
                type: GraphQLString
            },
            datePosted: {
                type: GraphQLString
            },
            dateReviewed: {
                type: GraphQLString
            },
            declinedReason: {
                type: GraphQLString
            },
            cancelledReason: {
                type: GraphQLString
            },
            reviewedBy: {
                type: GraphQLString
            },
            fileName: {
                type: GraphQLString
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

export const leaveInputType = new GraphQLInputObjectType({
    name: "LeaveInputType",
    fields: () => ({
        userId: {
            type: GraphQLString
        },
        leaveName: {
            type: GraphQLString
        },
        leaveType: {
            type: GraphQLString
        },
        startDate: {
            type: GraphQLString
        },
        endDate: {
            type: GraphQLString
        },
        supervisorEmail: {
            type: GraphQLString
        },
        secretaryEmail: {
            type: GraphQLString
        },
        leaveDays: {
            type: GraphQLInt
        },
        applicationDays: {
            type: GraphQLInt
        },
        leaveReason: {
            type: GraphQLString
        },
        sickSheet: {
            type: GraphQLString
        },
        designation: {
            type: GraphQLString
        }
    })
});