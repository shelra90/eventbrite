import asyncHandler from 'express-async-handler'
import Order from '../models/orderModels.js'

import Event from '../models/eventModel.js'

const addOrderItems = asyncHandler(async (req, res) => {
    const {
        orderItems,
        paymentMethod,
        itemsPrice,
        taxPrice,
        totalPrice
    } = req.body

    if (orderItems && orderItems.length === 0) {
        res.status(400)
        throw new Error('No order items')
    }else {
        const order = new Order({
            orderItems, 
            user: req.user._id,
            paymentMethod,
            itemsPrice,
            taxPrice,
            totalPrice
        })
       
      const createdOrder = await order.save()
      res.status(201).json(createdOrder)
    }
})

const getOrderById = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id).populate(
        'user',
        'name email'
    )
    if (order) {
        res.json(order)
    }else{
        res.status(404)
        throw new Error('Order not found')
    }
})



const updateOrderToPaid = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id)
    if (order){
        order.isPaid= true
        order.paidAt = Date.now()
        order.paymentResult = {
            id: req.body.id,
            status: req.body.status,
            update_time: req.body.update_time,
            email_address: req.body.email_address
        }
        order.orderItems.forEach(async element => {
            var event=await Event.findById(element.event._id)
            if(event.countInStock>=element.qty){
                event.countInStock-=element.qty;
                await event.save()
            }
        });
        const updatedOrder = await order.save()
        res.json(updatedOrder)
    }else{
        res.status(404)
        throw new Error ('Order not found')
    }
})
export {addOrderItems, getOrderById, updateOrderToPaid}