/**
 * Main entry point of the app
 * @flow
 */

import { createStore, combineReducers, applyMiddleware } from 'redux'
import LogReducer from './reducers/LogReducer'
import {createLogger} from 'redux-logger'

const reducer = combineReducers({
  log : LogReducer
})

var store;
if(process.env.NODE_ENV === 'production'){
  store = createStore(reducer)
}else{
  store = createStore(reducer, undefined, applyMiddleware(createLogger()))
}

export default store
