import userMutation from './user';
import adminuserMutation from './adminuser';
import publicHolidayMutation from './publicholiday';

export default {
  ...userMutation,
  ...adminuserMutation,
  ...publicHolidayMutation
}