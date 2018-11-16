import {
	GraphQLList, GraphQLString
} from 'graphql'
import userModel from '../../../models/user';
import { authPayload } from '../../types/authpayload';

// Query

export const authenticateAdmin = {
  type: authPayload,
  args: {
    email: {
        name: 'email',
        type: GraphQLString
    },
    password: {
        name: 'password',
        type: GraphQLString
    }
  },
  resolve: function (root, params) {
    const adminuser = adminuserModel.findOne({email: params.email, password: params.password})
    if (!adminuser) {
      throw new Error('Error in retriving admin user')
    }
    var token = new Date().getTime()
    return {token: token, ok: true, Admin:  adminuser};
  }
}

export const verifyAdminToken = {
  type: authPayload,
  args: {
    adminToken: {
      name: 'adminToken',
      type: GraphQLString
    }
  },
  resolve: function(root, params) {
    if(params.adminToken != null) {
      return {token: params.adminToken, ok: true}
    }
  }
}