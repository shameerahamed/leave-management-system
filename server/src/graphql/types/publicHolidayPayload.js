import {
	GraphQLObjectType,
} from 'graphql'; 

import {publicHolidayType} from './publicHoliday'

export const publicHolidayPayload = new GraphQLObjectType({
    name: 'PublicHolidayPayload',
    fields: function() {
      return {
        publicHoliday: {
          type: publicHolidayType
        }
      }
    }
  })