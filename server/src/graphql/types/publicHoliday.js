import {
	GraphQLObjectType,
	GraphQLNonNull,
	GraphQLString,
	GraphQLID,
} from 'graphql'; 

// User Type
export const publicHolidayType = new GraphQLObjectType({
  name: 'PublicHoliday',
  fields: function () {
    return {
      id: {
        type: new GraphQLNonNull(GraphQLID)
      },
      holidayDate: {
          type: GraphQLString
      }
    }
  }
});

