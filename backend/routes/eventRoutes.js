import express from 'express'
import asyncHandler from 'express-async-handler'
import event from '../models/eventModel.js'
import { async } from 'rxjs'

const router = express.Router()

router.get('/', asyncHandler(async (req, res) => {
   const events = await event.find({})
   res.json(events)
}))


router.get('/:id', asyncHandler(async (req, res) => {
    const events = await event.findById(req.params.id)
    if (events){
        res.json(events)
    } else {
    res.status(404).json({message: 'Event not found'})
    }
}))

router.put('/create', asyncHandler(async (req, res) => {
    console.log(req.body);
    res.json("ok");
}))

export default router