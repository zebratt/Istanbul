import { combineReducers } from 'redux'

import appReducerCreator from 'app/AppReducer'

// reducers
import Stock from 'pages/Stock/StockReducer'
import Center from 'pages/Center/CenterReducer'

export default function createCombinedReducers(initState) {
    return combineReducers({ App: appReducerCreator(initState), Stock, Center })
}
