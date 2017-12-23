import { combineReducers } from 'redux';

// reducers
import Home from '../pages/Home/reducer';

import MyHome from '../pages/PersonalCenter/modules/MyHome/reducer';
import BankCard from '../pages/PersonalCenter/modules/BankCard/reducer';
import Safe from '../pages/PersonalCenter/modules/AccountSafe/reducer';

import Buy from '../pages/Stock/modules/Buy/reducer';
import Sell from '../pages/Stock/modules/Sell/reducer';
import Settle from '../pages/Stock/modules/Settle/reducer';

export default combineReducers({ Home, Buy, MyHome, Sell, Settle, BankCard, Safe });
