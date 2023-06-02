import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import errorHandler from './middleware/errorMiddleware.js';
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
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

const __dirname = path.resolve()
if (process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname, '/frontend/build')))
  app.get('*', (reg, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  })
}


app.use(errorHandler)
const PORT = process.env.PORT
app.listen(PORT,console.log('server is running on port ${PORT}'))

// SR
// const eventsRoutes = require('./routes/events');

// app.use('/api/events', eventsRoutes);