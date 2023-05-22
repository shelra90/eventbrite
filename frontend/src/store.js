import {configureStore, combineReducers} from '@reduxjs/toolkit'
import { cartReducer } from './reducers/cartReducers'
import { eventListReducer, eventDetailsReducer } from './reducers/eventReducers'

import { orderCreateReducer, orderPayReducer } from './reducers/orderReducers'

import { userLoginReducer,
    userDetailsReducer,
    userUpdateProfileReducer,userRegisterReducer  } from './reducers/userReducers'


const rootReducer = combineReducers({
    eventList: eventListReducer,
    eventDetails: eventDetailsReducer,
    cart: cartReducer,

    
    orderCreate: orderCreateReducer,  
    orderPay: orderPayReducer,  
    userLogin:userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer
   

})

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems'))
: []

const userInfoFromStorage = localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    :null

const initialState = {
    cart: {cartItems: cartItemsFromStorage},
    userLogin:{userInfo:userInfoFromStorage}
}

const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState
    
})


export default store
