const Mock = require('../models/model.mock');
const MockValidation = require('../validations/validation.mock');

const mockValidation = new MockValidation()


const mockController = function () {

  this.tryMock = async (req, res) => {

      const newMock = new Mock(req.body)
      const response = await newMock.save()
    
    
      return res.status(200).send({response})
    
    }
}



module.exports = mockController