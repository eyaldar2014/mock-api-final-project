const express = require('express');
const router = express.Router();

const authenticateToken = require('../middlewares/middleware.authentication')

const MocksController = require('../controllers/controller.mock')
const mocksController = new MocksController()


// router.get('/tryMock', mocksController.tryMock)

router.post('/tryMock', authenticateToken, mocksController.tryMock)

// router.get('/tryMock', mocksController.tryMock)



module.exports = router;

