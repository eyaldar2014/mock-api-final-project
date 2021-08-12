const express = require('express');
const router = express.Router();
const authenticateToken = require('../middlewares/middleware.authentication')


const UsersController = require('../controllers/controller.user')
const usersController = new UsersController()


router.post('/register', usersController.createUser)

router.post('/login', usersController.loginUser)

router.post('/logout', authenticateToken, usersController.logoutUser)

router.get('/me', authenticateToken, usersController.getProfile)

router.delete('/me', authenticateToken, usersController.deleteUser)

router.patch('/me', authenticateToken, usersController.updateUser)


module.exports = router;

