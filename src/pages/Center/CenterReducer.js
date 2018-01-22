import {combineReducers} from 'redux'

import Safe from './modules/AccountSafe/reducer'
import Bank from './modules/BankCard/reducer'
import MyHome from './modules/MyHome/reducer'

export default combineReducers({Safe, Bank, MyHome})