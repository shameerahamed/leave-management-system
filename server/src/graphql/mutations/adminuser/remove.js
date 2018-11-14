import {
	GraphQLNonNull,
	GraphQLID
} from 'graphql'

import { adminuserType } from '../../types/adminuser';
import AdminuserModel from '../../../models/adminuser';

export default  {
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
