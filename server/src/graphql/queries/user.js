import {
	GraphQLList
} from 'graphql'
import { userType } from '../types/user'
import userModel from '../../models/user'

// Query
export default {
  type: new GraphQLList(userType),
  resolve: function () {
    const users = userModel.find().exec()
    if (!users) {
      throw new Error('Error getting users')
    }
    return users
  }
}