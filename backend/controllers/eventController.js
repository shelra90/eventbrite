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

export {getEvents, getEventById}