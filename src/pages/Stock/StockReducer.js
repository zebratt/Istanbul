import { combineReducers } from 'redux'

import Buy from './Buy/reducer'
import Sell from './Sell/reducer'
import Settle from './Settle/reducer'

export default combineReducers({ Buy, Sell, Settle })
