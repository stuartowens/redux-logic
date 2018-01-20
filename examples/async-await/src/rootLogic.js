import { logic as userLogic } from './user/index';
import { logic as usersLogic } from './users/index';
import { logic as addressLogic } from './address/index';


export default [
  ...userLogic,
  ...usersLogic,
  ...addressLogic
];
