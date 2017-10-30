import { combineReducers } from 'redux';

// reducers
import home from '../pages/Home/reducer';
import stockBuy from '../pages/StockBuy/reducer';

export default combineReducers({ Home: home, StockBuy: stockBuy });
