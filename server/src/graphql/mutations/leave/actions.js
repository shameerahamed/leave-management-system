import {
	GraphQLNonNull, GraphQLID, GraphQLObjectType
} from 'graphql';
import { leavePayload } from '../../types/leavePayload';
import {leaveInputType} from '../../types/leave';
import LeaveModel from '../../../models/leave';
import UserModel from '../../../models/user';

export const applyforleave = {
  type: leavePayload,
  args: {
    data: {
        name: 'data',
        type: new GraphQLNonNull(leaveInputType)
    }
  },
  resolve(root, params) {
    const leaveInput = params.data;
    console.log(leaveInput)
    var current_leave_balance = 0;
    var new_leave_balance = 0;
    var message = "";
    var ok = false;
    
    UserModel.findById(leaveInput.userId, function(err, userReponse) {
        if (userReponse == null) {
            console.log(userReponse);
            message = "Cannot find this record in the database.";
            ok = false;
        }
        else {
            var leaveName = leaveInput.leaveName;
            new_leave_balance = leaveInput.applicationDays;

            switch(leaveName) {
                case "annual": 
                    current_leave_balance = userReponse.annual;
                    break;
                case "sick":
                    current_leave_balance = userReponse.sick;
                    break;
                case "christmas":
                    current_leave_balance = userReponse.christmas;
                    break;
                case "bereavement":
                    current_leave_balance = userReponse.bereavement;
                    break;
                case "family care":
                    current_leave_balance = userReponse.familyCare;
                    break;
                case "maternity":
                    current_leave_balance = userReponse.maternity;
                    break;
                case "paternity":
                    current_leave_balance = userReponse.paternity;
                    break;
                default:
                    break;
            }
            const lModel = new LeaveModel(leaveInput);
            const newLeave = lModel.save();
            if (!newLeave) {
                throw new Error('Error adding new Leave');
            }
            message = "Your application has been submitted.";
            ok = true;
        }
    });
    
    return {message: message, ok: ok}
  }
}