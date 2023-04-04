const { model, Schema } = require('mongoose')

const UserSchema = Schema({
    name: {
        type:String,
        required:true,
        minlength:2,
        maxlength:10
    },
    email: {
        type: String,
        required:true,
        validate:{
            validator: function(v){
                return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/.test(v);
            },
            message:(props)=>`invalid email ${props.value}`
        }
    },
    password: {
        type: String,
        minlength:[6,'passward too short'],
        required:true
    },
    roles:{
        type:[String],
        required: true,
        default : ['STUDENT']
    } ,
    accountStatus: {
        type: String,
        enum:['PENDING','ACTIVE','REJECT'],
        default:'PENDING',
        required:true
    }
})
const User = model('User', UserSchema)

module.exports = User