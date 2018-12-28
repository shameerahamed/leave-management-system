import {
	GraphQLObjectType,
	GraphQLInputObjectType,
	GraphQLNonNull,
	GraphQLString,
  GraphQLInt,
	GraphQLID,
  GraphQLList
} from 'graphql'; 
import { leaveType } from './leave';

import LeaveModel from '../../models/leave';

// User Type
export const userType = new GraphQLObjectType({
  name: 'UserType',
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
      leaverecord: {
        type: new GraphQLList(leaveType),
        resolve: async function(user, params) {
          return new Promise((resolve, reject) => {
            console.log('userId ' + user.id);
            const leaves =  LeaveModel.find({userId: user.id}, function (err, docs) {
              if(err) {
                return reject(err);
                //return new Error('Error in retriving leaveRecord ' + err);
              }
              //console.log(docs);
              return resolve(docs);
            });
          });
          
        }
      }
    }
  }
});

export const userInputType = new GraphQLInputObjectType({
	name: 'UserInput',
	fields: () => ({
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
	})
});

