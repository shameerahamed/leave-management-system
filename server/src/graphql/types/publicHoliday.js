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
export const publicHolidayType = new GraphQLObjectType({
  name: 'PublicHoliday',
  fields: function () {
    return {
      id: {
        type: new GraphQLNonNull(GraphQLID)
      },
      holiday_date: {
          type: GraphQLString
      }
    }
  }
});

