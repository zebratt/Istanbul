import {combineReducers} from 'redux'

import Safe from './AccountSafe/reducer'
import Bank from './BankCard/reducer'
import MyHome from './MyHome/reducer'

export default combineReducers({Safe, Bank, MyHome})