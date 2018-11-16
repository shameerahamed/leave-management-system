import {
	GraphQLNonNull, GraphQLID
} from 'graphql';

import { userType, userInputType} from '../../types/user';

import UserModel from '../../../models/user';

export const addUser = {
  type: userType,
  args: {
    data: {
			name: 'data',
			type: new GraphQLNonNull(userInputType)
		}
  },
  resolve(root, params) {
    const uModel = new UserModel(params.data);
    const newUser = uModel.save();
    if (!newUser) {
      throw new Error('Error adding user');
    }
    return newUser
  }
}

export const removeUser =  {
  type: userType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, params) {
    const removeduser = UserModel.findByIdAndRemove(params.id).exec();
    if (!removeduser) {
      throw new Error('Error removing user')
    }
    return removeduser;
  }
}

export const updateUser = {
	type: userType,
	args: {
		id: {
			name: 'ID',
			type: new GraphQLNonNull(GraphQLID)
		},
		data: {
			name: 'data',
			type: new GraphQLNonNull(userInputType)
		}
	},
	resolve(root, params) {
		return UserModel.findByIdAndUpdate(
			params.id,
			{ $set: { ...params.data } },
			{ new: true }
		)
		.catch(err => new Error('Couldn\'t Update User data, ', err));
	}
}