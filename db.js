const mongoose = require('mongoose');

const connectDb = (connectionStr)=>{
    return mongoose.connect(connectionStr,{
        serverSelectionTimeoutMS:1000
    });
}

module.exports = connectDb;