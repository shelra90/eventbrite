import {configureStore, combineReducers} from '@reduxjs/toolkit'
import { eventListReducer } from './reducers/eventReducers'

const rootReducer = combineReducers({
    eventList: eventListReducer

})

const store = configureStore({
    reducer: {},
    preloadedState: {},
    
})

export default store
