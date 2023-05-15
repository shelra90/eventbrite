import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap'
import { useDisptach, useSelector } from 'react-redux'
import Message from '../components/Message'
import CheckoutSteps from '../components/CheckoutSteps'
import { createOrder } from '../actions/orderActions'

const PlaceOrderScreen = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const cart =useSelector((state) => state.cart)

    //  Calculate prices
    const addDecimals = (num) => {
        return (Math.round(num * 100) / 100).toFixed(2)
    }

    cart.itemsPrice = addDecimals(
        cart.cartItems.reduce((acc, item) => acc + item.price *
        item.qty, 0)
    )
    cart.shippingPrice = addDecimals(cart.itemsPrice > 100 ? 0 : 
        100)
    cart.taxPrice = addDecimals(Number((0.15 * cart.itemsPrice).
    toFixed(2)))
    cart.totalPrice =(
        Number(cart.itemsPrice) +
        Number(cart.shippingPrice) +
        Number(cart.taxPrice)
    ).toFixed(2)
    

    constorderCreate = useSelector((state) => state.
    orderCreate)
    const { order, success, error } = orderCreate
    

    useEffect(() => {
        if (success) {
            navigate(`/order/${order._id}`)
        }
     }, [navigate, success, order._id])
    

    const placeOrderHandler = () => {
        dispatch(
        createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippinAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippinPrice: cart.shippinPrice,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
        })
        )
    }
}