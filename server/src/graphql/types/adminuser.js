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
export const adminuserType = new GraphQLObjectType({
  name: 'Adminuser',
  fields: function () {
    return {
      id: {
        type: new GraphQLNonNull(GraphQLID)
      },
      email: {
        type: GraphQLString
      },
      name: {
        type: GraphQLString
      },
      password: {
        type: GraphQLString
      },
      surname: {
        type: GraphQLString
      }
    }
  }
});

export const adminuserInputType = new GraphQLInputObjectType({
	name: 'AdminuserInput',
	fields: () => ({
		email: {
			type: GraphQLString
		},
		password: {
			type: GraphQLString
    },
    isArchived: {
      type: GraphQLBoolean
    }
	})
});

