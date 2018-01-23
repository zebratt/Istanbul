import { createStore, applyMiddleware } from 'redux'
import combinedReducers from './reducers'
import thunk from 'redux-thunk'
import promise from 'redux-promise'

const middlewares = [thunk, promise]

export default function createAppStore(initState) {
    return createStore(combinedReducers, initState, applyMiddleware(...middlewares))
}
