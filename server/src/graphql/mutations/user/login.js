import {
	GraphQLList, GraphQLString
} from 'graphql'
import userModel from '../../../models/user';
import { userPayload } from '../../types/userPayload';

// Query

export const authenticateUser = {
  type: userPayload,
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
    var ok = true;
    var token = "";
    const user = userModel.findOne({email: params.email, password: params.password}, function(err, response){
      console.log('user' + response.email);
      token = response.id;
      if (err) {
        ok = false;
      throw new Error('Error in retriving user')
      }
    });
    return {token: token, ok: ok, User:  user};
  }
}

export const verifyUserToken = {
  type: userPayload,
  args: {
    userToken: {
      name: 'userToken',
      type: GraphQLString
    }
  },
  resolve: function(root, params) {
    var ok = true;
    if(params.userToken != null) {

      const user = userModel.findById(params.userToken).exec();

      if(!user) {
        ok = false;
        throw new Error('Error in verifying User Token');
      }
      return {token: params.userToken, ok: ok, User: user}
    }
  }
}