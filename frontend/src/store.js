import {configureStore, combineReducers} from '@reduxjs/toolkit'
import { cartReducer } from './reducers/cartReducers'
import { eventListReducer, eventDetailsReducer } from './reducers/eventReducers'

import { userLoginReducer,
    userDetailsReducer,
    userUpdateProfileReducer,userRegisterReducer  } from './reducers/userReducers'
import { orderCreateReducer,
    orderDetailsReducer, orderPayReducer, } from './reducers/orderReducers'


const rootReducer = combineReducers({
    eventList: eventListReducer,
    eventDetails: eventDetailsReducer,
    cart: cartReducer,

    userLogin: userLoginReducer,
   userRegister: userRegisterReducer,
   userDetails: userDetailsReducer,
   userUpdateProfile: userUpdateProfileReducer,
   orderCreate: orderCreateReducer, 
   orderDetails: orderDetailsReducer, 
   orderPay: orderPayReducer,
   
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItem'))
: []
const paymentMethodFromStorage = localStorage.getItem('paymentMethod')
  ? JSON.parse(localStorage.getItem('paymentMethod'))
  : {}

  const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

const initialState = {
    cart: {cartItems: cartItemsFromStorage,
        paymentMethod: paymentMethodFromStorage
    },
    userLogin: { userInfo: userInfoFromStorage },
}

const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
    
})


export default store
