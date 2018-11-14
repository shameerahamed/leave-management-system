import {
	GraphQLList
} from 'graphql'
import { adminuserType } from '../types/adminuser'
import adminuserModel from '../../models/adminuser'

// Query

export default {
  type: new GraphQLList(adminuserType),
  resolve: function () {
    const adminusers = adminuserModel.find().exec()
    if (!adminusers) {
      throw new Error('Error in retriving admin user')
    }
    return adminusers
  }
}