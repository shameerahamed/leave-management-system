import {
	GraphQLObjectType,
	GraphQLInputObjectType,
	GraphQLNonNull,
	GraphQLString,
  GraphQLInt,
	GraphQLID,
  GraphQLList,
  Node
} from 'graphql'; 
//import { leaveType } from './leave';

//import LeaveModel from '../../models/leave';

// User Type
export const userType = new GraphQLObjectType({
  name: 'User',
  fields: function () {
    return {
      id: {
        type: new GraphQLNonNull(GraphQLID)
      },
      email: {
        type: GraphQLString
      },
      password: {
        type: GraphQLString
      },
      name:  {
        type: GraphQLString
      },
      surname: {
        type: GraphQLString
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
      isArchived: {
        type: GraphQLString
      },
      archiveReason: {
        type: GraphQLString
      },
      /*leaverecords: {
        type: leaveType,
        resolve: function(user, params) {
          const leaves =  LeaveModel.find({userId: user.id}).exec()
          if (!leaves) {
            return new Error('Error in retriving leaveRecord')
          }
          return leaves;
        }
      }*/
    }
  }
});

export const userInputType = new GraphQLInputObjectType({
	name: 'UserInput',
	fields: () => ({
		email: {
			type: GraphQLString
		},
		name: {
			type: GraphQLString
    },
    isArchived: {
      type: GraphQLString
    },
    dateOfBirth: {
      type: GraphQLString
    },
    gender: {
      type: GraphQLString
    }
	})
});

