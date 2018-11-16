import {
	GraphQLNonNull, GraphQLID
} from 'graphql';

import { adminuserType, adminuserInputType} from '../../types/adminuser';
import AdminuserModel from '../../../models/adminuser';

export const addAdminuser = {
  type: adminuserType,
  args: {
    data: {
			name: 'data',
			type: new GraphQLNonNull(adminuserInputType)
		}
  },
  resolve(root, params) {
    const uModel = new AdminuserModel(params.data);
    const newUser = uModel.save();
    if (!newUser) {
      throw new Error('Error adding admin user');
    }
    return newUser
  }
}

export const removeAdminuser = {
  type: adminuserType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, params) {
    const removeduser = AdminuserModel.findByIdAndRemove(params.id).exec();
    if (!removeduser) {
      throw new Error('Error removing admin user')
    }
    return removeduser;
  }
}

export const updateAdminuser = {
  type: adminuserType,
	args: {
		id: {
			name: 'ID',
			type: new GraphQLNonNull(GraphQLID)
		},
		data: {
			name: 'data',
			type: new GraphQLNonNull(adminuserInputType)
		}
	},
	resolve(root, params) {
		return AdminuserModel.findByIdAndUpdate(
			params.id,
			{ $set: { ...params.data } },
			{ new: true }
		)
		.catch(err => new Error('Couldn\'t Update User data, ', err));
	}
}