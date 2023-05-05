import {configureStore, combineReducers} from '@reduxjs/toolkit'
import { cartReducer } from './reducers/cartReducers'
import { eventListReducer, eventDetailsReducer } from './reducers/eventReducers'


const rootReducer = combineReducers({
    eventList: eventListReducer,
    eventDetails: eventDetailsReducer,
    cart: cartReducer
   
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItem'))
: []

const initialState = {
    cart: {cartItems: cartItemsFromStorage}
}

const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
    
})


export default store
