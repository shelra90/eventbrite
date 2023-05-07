import express from 'express'
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

router.post('/create',  upload.single('Image'),asyncHandler(async (req, res) => {

    const user=await User.findById('645055170a143d7f7428238c');
    const newEvent={
        user:user._id,
        EventName:req.body.EventName,
        CategoryName:req.body.CategoryName,
        Description:req.body.Description,
        Image:'events_images/'+ req.file.filename,
        Location:req.body.Location,
        StartingPrice:req.body.StartingPrice, 
        EndingPrice:req.body.EndingPrice, 
        Price:req.body.Price, 
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