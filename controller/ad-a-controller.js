const { addMinutes, isAfter } = require("date-fns");
const AdminAttendence = require("../models/AdminAttendence");
const error = require("../utils/errors");

const getEnable = async(req,res,next)=>{
    try{
        const running = await AdminAttendence.findOne({status:"RUNNING"});
        if(running)throw error("Already attendence Running",400);
        const attendence = new AdminAttendence({});
        await attendence.save();
        return res.status(201).json({message:"success",attendence});
    }catch(e){
        next(e);
    }
};

const getDisable =async (req,res,next)=>{
    try{
        const running = await AdminAttendence.findOne({status:"RUNNING"});
        if(!running) throw error("Not running",400);

        running.status = 'COMPLETED';
        await running.save();
        res.status(200).json({running});
    }catch(e){
        next(e);
    }
};

const getRunning =async (req,res,next)=>{
    try{
        const running = await AdminAttendence.findOne({status:"RUNNING"});
        if(!running) throw error('Not Running',404);

        const started = addMinutes(new Date(running.createdAt), running.timeLimit);
        if(isAfter(new Date(),started)){
            running.status="COMPLETED";
            await running.save();
        }
        return res.status(200).json(running);
    }catch(e){
        next(e);
    }
};

module.exports = {
    getEnable,
    getDisable,
    getRunning
}