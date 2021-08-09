const express = require('express');
const router = express.Router();
const authenticateToken = require('../middlewares/middleware.authentication')


const UsersController = require('../controllers/controller.user')
const usersController = new UsersController()


router.post('/register', usersController.createUser)

router.post('/login', usersController.loginUser)

router.post('/logout', authenticateToken, usersController.logoutUser)


module.exports = router;

