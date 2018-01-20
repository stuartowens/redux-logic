import { combineReducers } from 'redux';
import { key as userKey,
         reducer as userReducer } from './user/index';
import { key as usersKey,
         reducer as usersReducer } from './users/index';
import { key as addressKey,
        reducer as addressReducer } from './address/index';

export default combineReducers({
  [userKey]: userReducer,
  [usersKey]: usersReducer,
  [addressKey]: addressReducer
});
