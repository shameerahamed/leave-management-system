import {
	GraphQLNonNull,
	GraphQLID
} from 'graphql'

import { adminuserType, adminuserInputType } from '../../types/adminuser'
import AdminuserModel from '../../../models/adminuser'

export default {
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

