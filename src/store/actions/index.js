import { combineReducers } from 'redux';
import auth from './auth';
import category from './category';
import sub_category from './sub_category';
import order from './order';
import product from './product';
import badge from './badge';
import giftcard from './giftcard';
import wallet from './wallet';

import persist from './persist';

const rootReducer = combineReducers({
   auth, 
   category,
   sub_category,
   order,
   product,
   badge,
   giftcard,
   wallet,
   persist
});

export default rootReducer;
