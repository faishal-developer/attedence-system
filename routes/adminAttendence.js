const router = require('express').Router();
const ad_a_controller = require('../controller/ad-a-controller');

router.get('/enable', ad_a_controller.getEnable);
router.get('/disable',ad_a_controller.getDisable);
router.get('/running',ad_a_controller.getRunning);

module.exports = router;