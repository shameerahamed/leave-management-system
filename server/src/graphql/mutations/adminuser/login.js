import {
	GraphQLList, GraphQLString
} from 'graphql'
import { adminuserType } from '../../types/adminuser';
import adminuserModel from '../../../models/adminuser';
import { authPayload } from '../../types/authpayload';

// Query

export default {
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

/*

{
  "operationName":"authenticateAdmin",
  "variables":{"email":"admin@ed.com","password":"123456"},
  "query":"mutation 
  authenticateAdmin($email: String!, $password: String!) {  
    authenticateAdmin(email: $email, password: $password) { 
      Admin {
        othernames
        __typename
      }
      token
      ok 
      __typename
    }
  }
}

*/