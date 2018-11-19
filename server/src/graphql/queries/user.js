import {
	GraphQLList, GraphQLBoolean, GraphQLString, GraphQLObjectType,GraphQLNonNull,GraphQLID
} from 'graphql'
import { userType } from '../types/user'
import { userUpdatesType} from '../types/userUpdates'
import userModel from '../../models/user'
import userUpdatesModel from '../../models/userUpdates'

// Query
export const users = {
  type: new GraphQLList(userType),
  resolve: function () {
    const users = userModel.find().exec()
    if (!users) {
      throw new Error('Error getting users')
    }
    return users
  }
};

export const user = {
  type: userType,
  args: {
    id: {
			name: 'ID',
			type: new GraphQLNonNull(GraphQLID)
		}
  },
  resolve: function(root, params) {
    const user = userModel.findById(params.id).exec()

    if (!user) {
      throw new Error ('Error in getting user')
    }

    return user
  }
}

export const findUsers = {
  type: new GraphQLList(userType),
  args: {
    isArchived: {
      name: "isArchived",
      type: GraphQLString
    }
  },
  resolve: function(root, params) {
    const users = userModel.find(params).exec()
    if (!users) {
      throw new Error('Error getting archived users')
    }
    return users
  }
}

export const findUserUpdates = {
  type: new GraphQLList(userUpdatesType),
  args: {
    isArchived: {
      name: "isArchived",
      type: GraphQLString
    }
  },
  resolve: function(root, params) {
    const userUpdates = userUpdatesModel.find(params).exec()

    if (!userUpdates) {
      throw new Error('Error getting findUserUpdates')
    }
    return userUpdates
  }
}