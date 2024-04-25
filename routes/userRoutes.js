const express = require('express');
const verifyToken = require('../middlewares/verifyToken');
const router = express.Router();
const userController= require('../controllers/userController');

// routes for user management
// router.post('/', userController.createUser)
router.get('/',verifyToken, userController.getAllUsers)
router.get('/:id', userController.getOneUser)
router.put('/:id', userController.editUser)
router.delete('/:id', userController.deleteUser)

router.post('/', userController.register)
router.post('/login', userController.login)

module.exports = router