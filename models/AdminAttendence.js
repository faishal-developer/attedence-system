const { Schema, model } = require('mongoose')

const adminAttendenceSchema = Schema({
        timeLimit: {
            type:Number,
            required:true,
            max:30,
            min:5,
            default:5
        },
        status: {
            type:String,
            required:true,
            enum:['RUNNING',"COMPLETED"],
            default:'RUNNING'
        }
    },
    { timestamps:true}
)

let AdminAttendence = model('AdminAttendence', adminAttendenceSchema)
module.exports = AdminAttendence