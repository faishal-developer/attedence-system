const student_ad = require('../models/StudentAttendence');
const AdminAttendence = require('../models/AdminAttendence');
const { addMinutes } = require('date-fns');

const getAttendance = async(req,res,next)=>{
    try{

        const adminAttendence = await AdminAttendence.findById(id);
        if(!adminAttendence){
            throw error("Invalid Attendance",400);
        }

        const started = addMinutes(new Date(adminAttendence.createdAt), adminAttendence.timeLimit);
    }catch(e){
        next(e);
    }
}

const getAttendanceStatus=(req,res,next)=>{
    try {

    } catch (e) {
        next(e);
    }
}

module.exports = {
    getAttendance,
    getAttendanceStatus
}