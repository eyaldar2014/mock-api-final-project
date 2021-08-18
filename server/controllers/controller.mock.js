const createModel = require('../models/model.mock');
const MockValidation = require('../validations/validation.mock');

const mockValidation = new MockValidation()


const mockController = function () {

  this.tryMock = async (req, res) => {


      const Mock = await createModel(req.user.email)
      const newMock = new Mock()
      const response = await newMock.save()
    
      return res.status(200).send({response})
    
    }

}


module.exports = mockController