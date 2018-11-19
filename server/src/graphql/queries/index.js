import {users, findUsers, findUserUpdates, user} from './user';
import Adminusers from './adminuser';
import publicHoliday from './publicHoliday';
import {findLeaveRecord, findLeaveUpdates, findSicksheetRecord, leaveRecords} from './leave';

export default {
  users, findUsers, findUserUpdates, user,
  Adminusers, 
  publicHoliday,
  findLeaveRecord, findLeaveUpdates, findSicksheetRecord, leaveRecords
}