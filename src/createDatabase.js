const mongoose = require('mongoose')
const subscriberModel = require('./models/subscribers')
const data = require('./data')

// Connect to DATABASE
const DATABASE_URL = "mongodb+srv://sreeramnov3:Sreeram%402001@ac-599ixjj-shard-00-00.cw5rsvw.mongodb.net:27017,ac-599ixjj-shard-00-01.cw5rsvw.mongodb.net:27017,ac-599ixjj-shard-00-02.cw5rsvw.mongodb.net:27017/mydatabase?retryWrites=true&w=majority&tls=true&appName=Cluster0";
mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Database created...'))

const refreshAll = async () => {
    await subscriberModel.deleteMany({})
    // console.log(connection)
    await subscriberModel.insertMany(data)
    await mongoose.disconnect();
}
refreshAll()
