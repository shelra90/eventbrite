import express from 'express'
import { getEventById, getEvents, searchEvents } from '../controllers/eventController.js'
import asyncHandler from 'express-async-handler'
import event from '../models/eventModel.js'
import multer from 'multer'
import User from '../models/userModel.js'

const router = express.Router()
const DIR='./frontend/public/events_images';

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, fileName)
    }
});

var upload = multer({
    storage:storage,
    filefilter:(req,file, callback) =>{
        console.log(file)
        if(file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg"){
            callback(null, true);
        }
        else{
            callback(null, false);
            return callback(new Error('Only .png, .jpg and .jpeg format allowed!'))
        }
    }
});

// @desc     Fetch all events
// @route    GET /api/events
// @access   public
router.get('/', getEvents)
router.get('/search',searchEvents)
// @desc      Fetch single event by id
// @route     GET /api/events/:id
// @access    public
router.get('/:id', getEventById)

router.post('/create',  upload.single('Image'),asyncHandler(async (req, res) => {

    const user=await User.findOne({name :"Admin user"});
    
    const newEvent={
        user:user._id,
        EventName:req.body.EventName,
        CategoryName:req.body.CategoryName,
        Description:req.body.Description,
        Image:'/events_images/'+ req.file.filename,
        Location:req.body.Location,
        Price:req.body.Price, 
        countInStock:req.body.count,
        Date:req.body.Date
    }
    console.log(newEvent);

    event.create(newEvent).then(result => {
        res.status(201).json(result)
    }).catch(err => {
        console.log(err),
            res.status(500).json({
                error: err
            });
    })

}))

export default router