const { Schema, model } = require('mongoose')

const StudentAttendenceSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    adminAttendance: {
        type: Schema.Types.ObjectId,
        ref: 'AdminAttendence'
    }
},{timestamps:true})

const AdminAttendence = model('StudentAttendence', StudentAttendenceSchema)
module.exports = AdminAttendence