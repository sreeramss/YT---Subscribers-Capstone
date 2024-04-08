const express = require('express');
const Subscriber = require('./models/subscribers');
const path = require('path');
const cors  = require('cors');
const app = express();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname, "/index.html"));
});


app.get('/subscribers',async(req,res)=>{
    try{
        let subcribers = await Subscriber.find();
        res.status(200).send(subcribers);
    }
    catch(err){
        res.status(500).send(err);
    }    
});

app.get('/subscribers/names',async(req,res)=>{
    try{
        let subscribers = await Subscriber.find(
            {}, 
            { name: 1, subscribedChannel: 1, _id: 0 }
        );
        res.status(200).send(subscribers); 
    }
    catch(err){
        res.status(500).send(err);
    }
});

app.get('/subscribers/:id',async (req, res)=>{
    try{
        let subscribers = await Subscriber.findById(req.params.id);
        // Response data
        res.status(200).send(subscribers);
    }
    catch(err) {
        res.status(400).send({Error_message : "No Subscriber found in  this id"});
    }
});


module.exports = app;
