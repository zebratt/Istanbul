import { createStore, applyMiddleware } from 'redux'
import createCombinedReducers from './reducers'
import thunk from 'redux-thunk'
import promise from 'redux-promise'

const middlewares = [thunk, promise]

export default function createAppStore(initState) {
    const reducers = createCombinedReducers(initState)

    return createStore(reducers, applyMiddleware(...middlewares))
}
