import { combineReducers } from 'redux'

import Buy from './modules/Buy/reducer'
import Sell from './modules/Sell/reducer'
import Settle from './modules/Settle/reducer'

export default combineReducers({ Buy, Sell, Settle })
