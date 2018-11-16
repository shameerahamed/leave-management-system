import {
	GraphQLNonNull, GraphQLID, GraphQLString
} from 'graphql';

import { publicHolidayType} from '../../types/publicHoliday';
import { publicHolidayPayload } from '../../types/publicHolidayPayLoad';
import PublicHolidayModel from '../../../models/publicHoliday';

export const addPublicholiday = {
  type: publicHolidayPayload,
  args: {
    holidayDate: {
			name: 'holidayDate',
			type: GraphQLString
		}
  },
  resolve(root, params) {
    const uModel = new PublicHolidayModel(params.holidayDate);
    const newUser = uModel.save();
    if (!newUser) {
      throw new Error('Error adding public Holiday');
    }
    return {publicHoliday: newUser}
  }
}

export const deletePublicholiday = {
  type: publicHolidayType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(root, params) {
    const removedVal = PublicHolidayModel.findByIdAndRemove(params.id).exec();
    if (!removedVal) {
      throw new Error('Error removing publicHoliday ')
    }
    return removedVal;
  }
}