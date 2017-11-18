import { combineReducers } from 'redux';

// reducers
import home from '../pages/Home/reducer';
import stockBuy from '../pages/StockBuy/reducer';
import MyHome from '../pages/PersonalCenter/modules/MyHome/reducer';

export default combineReducers({ Home: home, StockBuy: stockBuy, MyHome: MyHome });
