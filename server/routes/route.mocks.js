const express = require('express');
const router = express.Router();
const authenticateToken = require('../middlewares/middleware.authentication')

const MocksController = require('../controllers/controller.mock')
const mocksController = new MocksController()


router.post('/createSchema', authenticateToken, mocksController.createSchema)

router.post('/createData', authenticateToken, mocksController.createData)

router.get('/getData', authenticateToken, mocksController.getData)

router.delete('/deleteData', authenticateToken, mocksController.deleteAllData)



module.exports = router;

