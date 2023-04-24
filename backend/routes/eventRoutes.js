import express from 'express'
import asyncHandler from 'express-async-handler'
import event from '../models/eventModel.js'

const router = express.Router()

router.get('/', asyncHandler(async (req, res) => {
   const events = await event.find({})
   res.json(events)
}))


router.get('/:id', asyncHandler(async (req, res) => {
    const event = await event.findbyId(req.params.id)
    if (event){
        res.json(event)
    } else {
    res.status(404).json({message: 'Event not found'})
    }
}))

export default router