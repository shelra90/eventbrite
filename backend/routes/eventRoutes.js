import express from 'express'
import { getEventById, getEvents } from '../controllers/eventController.js'
import asyncHandler from 'express-async-handler'


const router = express.Router()

// @desc     Fetch all events
// @route    GET /api/events
// @access   public
router.get('/', getEvents)


// @desc      Fetch single event by id
// @route     GET /api/events/:id
// @access    public
router.get('/:id', getEventById)

router.put('/create', asyncHandler(async (req, res) => {
    console.log(req.body);
    res.json("ok");
}))

export default router