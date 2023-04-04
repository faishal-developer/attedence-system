const { Schema, model } = require('mongoose')

const StudentAttendenceSchema = new Schema({
    createdAt: Date,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    adminAttendance: {
        type: Schema.Types.ObjectId,
        ref: 'AdminAttendence'
    }
})

const AdminAttendence = model('StudentAttendence', StudentAttendenceSchema)
module.exports = AdminAttendence