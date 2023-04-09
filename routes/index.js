const router = require('express').Router();
const authRoutes = require('./auth');
const userRoutes = require('./users');
const authenticate = require('../middleWare/authenticate');
const ad_a_route = require('./adminAttendence');
const student_ad = require('./student-ad');

router.use('/api/v1/auth',authRoutes);
router.use('/api/v1/users',authenticate,userRoutes);
router.use('/api/v1/admin/attendence',authenticate,ad_a_route);
router.use('/api/v1/student/attendence',authenticate,student_ad);

module.exports = router;