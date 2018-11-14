import userMutation from './user';
import adminuserMutation from './adminuser';

export default {
  ...userMutation,
  ...adminuserMutation
}