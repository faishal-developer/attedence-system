const router = require('express').Router();
const authRoutes = require('./auth');
const userRoutes = require('./users');
const authenticate = require('../middleWare/authenticate');

router.use('/api/v1/auth',authRoutes);
router.use('/api/v1/users',authenticate,userRoutes);

module.exports = router;