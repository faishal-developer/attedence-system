const { Schema, model } = require('mongoose')

const adminAttendenceSchema = Schema({
    timeLimit: Number,
    status: String,
    createdAt: Date
})

let AdminAttendence = model('AdminAttendence', adminAttendenceSchema)
module.exports = AdminAttendence