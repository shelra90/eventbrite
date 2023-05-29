import mongoose from "mongoose";

const eventSchema = mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectID,
        ref: 'users',
        required: true
    },

    CategoryName:{
        type: String,
        required: true     
    },

    EventName:{
        type: String,
        required: true
    },

    Date:{
        type: String,
        required: true
    },

    Description: {
        type: String,
        required: true
    },

    Image: {
        type: String,
        required: true
    },

    Location: {
        type: String,
        required: true
    },

    Price: {
        type: Number,
        required: true
        
    },
    
    countInStock:{
        type: Number
    }


    }, {
        timestamps: true
})

const Event = mongoose.model('events', eventSchema)
export default Event