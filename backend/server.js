import express from 'express';
import dotenv from 'dotenv'
// const events=require('./data/events');
import eventRoutes from './routes/eventRoutes.js'
import connectDB from './config/db.js';

const app=express();
// Add this line
app.use(express.json());

dotenv.config()
connectDB()


app.use('/api/events', eventRoutes)

app.use(errorHandler)

app.listen(5467,console.log('server is running on port 5467'))

// app.get('/api/events',(req,res)=>{
//     res.json(events)
// })

// app.get('/api/event/:id',(req,res)=>{
//     const event=events.find(e=>e.Id==req.params.id);
//     res.json(event)
// })


//app.get('/api/event/:id',(req,res)=>{

  //  const event=events.find(e=>e.Id==req.params.id);
   // console.log(event)
   // res.json(event)
//})

