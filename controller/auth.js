const {registrationService,loginService} = require('../service/auth');

const registerController = async (req, res, next) => {
    const { name, email, password, accountStatus } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'invalid request' });
    }
    try {
        const user =await registrationService({name,email,password})
        delete user._doc.password;
        return res.status(201).json({ message: 'user created successfully', user })

    } catch (e) {
        next(e);
    }
}

const loginController = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const token = await loginService({email,password});
        return res.status(200).json({ message: "login successfull", token })
    } catch (er) {
        next(er);
    }
}

module.exports = {
    registerController,
    loginController
};