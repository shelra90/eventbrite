import express from 'express';
import dotenv from 'dotenv';
import errorHandler from './middleware/errorMiddleware.js';
import eventRoutes from './routes/eventRoutes.js'
import userRoutes from './routes/userRoutes.js'


import connectDB from './config/db.js';

const app=express();
app.use(express.json());

dotenv.config()
connectDB()

app.use(express.json())
app.use('/api/events', eventRoutes)

app.use('/api/orders', orderRoutes)

app.use('/api/users', userRoutes)


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

