import { userpayload} from '../../types/userpayload';
import {
	GraphQLNonNull, GraphQLID, GraphQLString
} from 'graphql';

import { userType, userInputType} from '../../types/user';

import UserModel from '../../../models/user';

export const unArchiveUser = {
    type: userpayload,
    args: {
      id: {
              name: 'ID',
              type: new GraphQLNonNull(GraphQLID)
          }
    },
    resolve(root, params) {
      const user = UserModel.findByIdAndUpdate(params.id, {isArchived: false, archiveReason: null});
  
      if( !user ) {
        throw new Error ('Error in retriving details');
      }
      return {
        ok: true,
        User: user
      }
    }
  }

  export const archiveUser = {
      type: userpayload,
      args: {
          id: {
              name: 'ID',
              type: new GraphQLNonNull(GraphQLID)
          },
          archiveReason: {
              name: 'archiveReason',
              type: GraphQLString
          } 
      },
      resolve(root, params) {
        const user = UserModel.findByIdAndUpdate(params.id, {isArchived: true, archiveReason: params.archiveReason});
  
        if( !user ) {
          throw new Error ('Error in retriving details');
        }
        return {
          ok: true,
          User: user
        }
      }
  }