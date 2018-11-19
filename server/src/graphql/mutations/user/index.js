import {addUser, removeUser, updateUser} from './actions';
import {archiveUser, unArchiveUser} from './archives';
import {authenticateUser, verifyUserToken} from './login';

export default {
  addUser, removeUser, updateUser,
  archiveUser, unArchiveUser,
  authenticateUser, verifyUserToken
}