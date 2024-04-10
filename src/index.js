const express = require('express')
const app = require('./app.js')
const mongoose = require('mongoose')
const port = process.env.port || 3000;

// Parse JSON bodies (as sent by API clients)
app.use(express.json())
app.use(express.urlencoded({ extended: false }));



// Connect to DATABASE
const DATABASE_URL = "mongodb+srv://sreeramnov3:Sreeram%402001@ac-599ixjj-shard-00-00.cw5rsvw.mongodb.net:27017,ac-599ixjj-shard-00-01.cw5rsvw.mongodb.net:27017,ac-599ixjj-shard-00-02.cw5rsvw.mongodb.net:27017/mydatabase?retryWrites=true&w=majority&tls=true&appName=Cluster0";
mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('connected to database'))

// Start Server
app.listen(port, () => console.log(`App listening on port ${port}!`))
