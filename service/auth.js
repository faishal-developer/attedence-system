const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const error = require('../utils/errors');
const {findUserByProperty, createNewUser} = require('../service/user');

const loginService=async({email,password})=>{
    const user = await findUserByProperty('email',email);
    if (!user) throw error("Invalid email or password",400);
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw error("Invalid email or password", 400);
    
    delete user._doc.password;

    const token = jwt.sign(user._doc, 'secret-key', { expiresIn: '2h' });
    return token;

}

const registrationService=async({name,email,password})=>{
    let user = await findUserByProperty('email',email);
    console.log('user',user);
    if (user) {
        const error = new Error("User already exist");
        error.status = 400;
        throw error;
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
     return createNewUser({email,name,password:hash});

}

module.exports = {
    loginService,
    registrationService
}