const express=require('express');
import dotenv from 'dotenv'
const events=require('./data/events');
import connectDB from './config/db.js';

const app=express();
dotenv.config()
connectDB()

app.get('/api/events',(req,res)=>{
    res.json(events)
})

app.get('/api/event/:id',(req,res)=>{
    const event=events.find(e=>e.Id==req.params.id);
    res.json(event)
})

app.listen(5467,console.log('server is running on port 5467'))