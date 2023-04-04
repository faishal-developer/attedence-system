const express = require('express');
let port = process.env.port || 5000
const connectDb = require('./db');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const e = require('express');
const app = express()

app.use(express.json())

app.post("/login",async(req,res,next)=>{
    const {email,password} = req.body;
    try{
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }
        delete user._doc.password;
        return res.status(200).json({message:"login successfull",user})
    }catch(er){
        next(er);
    }
})

app.post('/register',async (req, res,next) => {
    const { name, email, password, accountStatus } = req.body;
    if(!name || !email || !password){
        return res.status(400).json({message:'invalid request'});
    }
    try{
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exist" });
        }
        user = new User({ name, email, password, accountStatus });
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        user.password = hash;
        await user.save();
        return res.status(201).json({ message: 'user created successfully', user })
    }catch(e){
        next(e);
    }
}) 

app.get('/',(_,res)=>{
    res.json({});
});

app.use((err,req,res,next)=>{
    console.log(err);
    res.status(500).json({message:"server error occured"});
})

connectDb('mongodb://localhost:27017/attendance-db')
    .then(()=>{
        console.log("database connected");
        app.listen(port, () => { console.log('express is working now') })
    })
    .catch((e)=>console.log(e));
