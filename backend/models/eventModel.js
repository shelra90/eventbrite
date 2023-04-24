import mongoose from "mongoose";

const eventSchema = mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectID,
        ref: 'users',
        required: true
    },

    Categoryname:{
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
        required: true,
        default: 0
    }

    }, {
        timestamps: true
})

const event = mongoose.model('events', eventSchema)
export default event