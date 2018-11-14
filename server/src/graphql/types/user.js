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
      othernames: {
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
      family_care: {
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
      date_of_birth: {
        type: GraphQLString
      },
      employee_number: {
        type: GraphQLInt
      },
      is_archived: {
        type: GraphQLBoolean
      },
      archive_reason: {
        type: GraphQLString
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
		name: {
			type: GraphQLString
		}
	})
});

