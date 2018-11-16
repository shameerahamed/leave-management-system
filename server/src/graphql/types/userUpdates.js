import {
	GraphQLObjectType,
	GraphQLInputObjectType,
	GraphQLNonNull,
	GraphQLString,
  GraphQLInt,
	GraphQLID,
  GraphQLList,
  GraphQLBoolean
} from 'graphql'; 

import {userType} from './user'
import UserModel from '../../models/user';

// User Type
export const userUpdatesType = new GraphQLObjectType({
  name: 'UserUpdates',
  fields: function () {
    return {
      id: {
        type: new GraphQLNonNull(GraphQLID)
      },
      annual: {
        type: GraphQLInt
      },
      sick: {
        type: GraphQLInt
      },
      bereavement: {
        type: GraphQLInt
      },
      familyCare: {
        type: GraphQLInt
      },
      christmas: {
        type: GraphQLInt
      },
      maternity: {
        type: GraphQLInt
      },
      paternity: {
        type: GraphQLInt
      },
      designation: {
        type: GraphQLString
      },
      gender: {
        type: GraphQLString
      },
      dateOfBirth: {
        type: GraphQLString
      },
      employeeNumber: {
        type: GraphQLInt
      },
      editReason: {
        type: GraphQLString
      },
      datePosted: {
        type: GraphQLString
      },
      reviewedBy: {
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