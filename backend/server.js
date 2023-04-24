const express=require('express');
const events=require('./data/events');
const app=express();

app.get('/api/events',(req,res)=>{
    res.json(events)
})

app.get('/api/event/:id',(req,res)=>{

    const event=events.find(e=>e.Id==req.params.id);
    console.log(event)
    res.json(event)
})

app.listen(5467,console.log('server is running on port 5467'))