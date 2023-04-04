const { model, Schema } = require('mongoose')

const ProfileSchema = Schema({
    firstName: String,
    lastName: String,
    phone: String,
    avator: [String],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})
const Profile = model('Profile', ProfileSchema)

module.exports = Profile