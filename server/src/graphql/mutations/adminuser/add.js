import {
	GraphQLNonNull
} from 'graphql';

import { adminuserType, adminuserInputType} from '../../types/adminuser';
import AdminuserModel from '../../../models/adminuser';

export default {
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