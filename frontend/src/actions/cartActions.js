import axios from 'axios'
import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_PAYMENT_METHOD } from "../constants/cartConstants"

export const addToCart = (id, qty, price) => async (dispatch, 
    getState) => {
        const {data} = await axios.get (`/api/events/${id}`)
        dispatch({
            type: CART_ADD_ITEM,
            payload: {
                event: data._id,
                name: data.EventName,
                image:data.Image,
                price: price,
                countInStock: data.countInStock,
                qty: qty
            }
        })
    
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
    }

    export const removeFromCart = (id) => (dispatch, getState) => {
        dispatch({
            type: CART_REMOVE_ITEM,
            payload: id
        })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
    }
    
    export const savePaymentMethod = (data) => (dispatch) => {
        dispatch({
          type: CART_SAVE_PAYMENT_METHOD,
          payload: data,
        })
      
        localStorage.setItem('paymentMethod', JSON.stringify(data))
      }