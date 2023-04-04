const express = require('express');
let port = process.env.port || 5000
const connectDb = require('./db');
const authenticate = require('./middleWare/authenticate');
const routes = require('./routes/index');

const app = express()
app.use(express.json())

app.use(routes);
app.get('/private',authenticate,async(req,res)=>{
    console.log(req.user);
    return res.status(200).json({message:"this is private"})
})

app.get('/public',(req,res)=>{
    return res.status(200).json({message:"this is public"})
})

/*TODO work with jwt token*/

app.get('/',(_,res)=>{
    res.json({});
});

app.use((err,req,res,next)=>{
    console.log(err);
    res.status(err.status? err.status : 500).json({message:err.message});
})

connectDb('mongodb://localhost:27017/attendance-db')
    .then(()=>{
        console.log("database connected");
        app.listen(port, () => { console.log('express is working now') })
    })
    .catch((e)=>console.log(e));
