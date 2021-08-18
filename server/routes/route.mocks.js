const express = require('express');
const router = express.Router();



const MocksController = require('../controllers/controller.mock')
const mocksController = new MocksController()


router.get('/tryMock', mocksController.tryMock)



module.exports = router;

