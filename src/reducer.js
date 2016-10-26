import { combineReducers } from 'redux';

import user from './ducks/userDuck';
import account from './ducks/accountDuck';

export default combineReducers( {
    account
    , user
} );
