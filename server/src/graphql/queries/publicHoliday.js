import {
	GraphQLList
} from 'graphql'
import { publicHolidayType } from '../types/publicHoliday'
import publicHolidayModel from '../../models/publicHoliday'

// Query

export default {
  type: new GraphQLList(publicHolidayType),
  resolve: function () {
    const publicHolidays = publicHolidayModel.find().exec()
    if (!publicHolidays) {
      throw new Error('Error in retriving admin user')
    }
    return publicHolidays
  }
}