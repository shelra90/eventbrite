import express from 'express';
import dotenv from 'dotenv';
import errorHandler from './middleware/errorMiddleware.js';
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
// const events=require('./data/events');
import eventRoutes from './routes/eventRoutes.js'



import connectDB from './config/db.js';

const app = express();
dotenv.config()
connectDB()

app.use(express.json())
app.use('/api/events', eventRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.get('/api/config/paypal', (req, res)=> 
  res.send(process.env.PAYPAL_CLIENT_ID)
)

app.use(errorHandler)
app.listen(5467,console.log('server is running on port 5467'))


