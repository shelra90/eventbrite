import {configureStore, combineReducers} from '@reduxjs/toolkit'
import { cartReducer } from './reducers/cartReducers'
import { eventListReducer, eventDetailsReducer } from './reducers/eventReducers'
import { orderCreateReduce, orderCreateReducer, orderDetailsReducer, orderPayReducer } from './reducers/orderReducers'


const rootReducer = combineReducers({
    eventList: eventListReducer,
    eventDetails: eventDetailsReducer,
    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    orderCreate: orderCreateReducer,
    oderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,  
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
