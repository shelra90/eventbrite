import asyncHandler from 'express-async-handler'
import event from '../models/eventModel.js'




const getEvents = asyncHandler(async (req, res) => {
    const events = await event.find({})
    res.json(events)
 })

const getEventById = asyncHandler(async (req, res) => {
    const events = await event.findById(req.params.id)
    if (events){
        res.json(events)
    } else {
    res.status(404).json({message: 'Event not found'})
    }
})

const searchEvents=asyncHandler(async(req,res) => {
    
    const events = await event.find({$or:[
    {EventName: new RegExp(req.query.input, 'i')},
    {Description:new RegExp(req.query.input, 'i')},
    {CategoryName:new RegExp(req.query.input, 'i')}]})
    res.json(events)
})

export {getEvents, getEventById, searchEvents}
