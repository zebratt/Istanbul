import { combineReducers } from 'redux'

// reducers
import App from 'app/AppReducer'
import { reducer } from 'pages/Home/HomeRedux'
import Stock from 'pages/Stock/StockReducer'
import Center from 'pages/Center/CenterReducer'

export default combineReducers({ App, Home: reducer, Stock, Center })
