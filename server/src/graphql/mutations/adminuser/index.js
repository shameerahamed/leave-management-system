import {addAdminuser, updateAdminuser, removeAdminuser} from './actions';
import {authenticateAdmin, verifyAdminToken} from './login';

export default {
  addAdminuser,
  removeAdminuser,
  updateAdminuser,
  authenticateAdmin,
  verifyAdminToken
}