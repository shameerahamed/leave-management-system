import userMutation from './user';
import adminuserMutation from './adminuser';
import publicHolidayMutation from './publicholiday';
import leaveMutation from './leave';

export default {
  ...userMutation,
  ...adminuserMutation,
  ...publicHolidayMutation,
  ...leaveMutation
}