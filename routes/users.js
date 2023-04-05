const router = require('express').Router();
const userController = require('../controller/userController');
/**
 * create a new user
 */
router.post('/',userController.postUser)

/** 
 * update user
*/
router.patch('/:userId',userController.patchUserById)

router.put('/:userId',userController.putUserById)

/**
 * delete user
 */
router.delete('/:userId',userController.deleteUserById);

/**
 * Get a user by id or email
 */
router.get('/:userId',userController.getUserById)

/**
 * get a single user
 */
router.get('/', userController.getUsers);


module.exports = router;