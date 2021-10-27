const createModel = require('../models/model.mock');
const MockValidation = require('../validations/validation.mock');
const mockValidation = new MockValidation()


const mockController = function () {

  // user creates schema using mockApi
  this.createSchema = async (req, res) => {

    try {

      const requestSchema = req.body
      if (!mockValidation.createSchemaValidation(requestSchema)) throw new Error('wrong details')
      
      req.user.schemaData = requestSchema
      const saveUser = await req.user.save()

      return res.status(201).send(saveUser)
    }
    catch (err) {
      return res.status(400).send({ "details": err.message })
    }

  }

  // user creates item using mockApi
  this.createData = async (req, res) => {

    try {

      const name = req.body.name
      if (!mockValidation.createDataValidation(name)) throw new Error('wrong details')

      const { email, schemaData } = req.user
      const Mock = await createModel(email, schemaData)
      const newMock = new Mock({ name })
      const response = await newMock.save()

      return res.status(200).send(response)
    }
    catch (err) {
      return res.status(400).send({ "details": err.message })
    }
  }

  // user gets all his using mockApi
  this.getData = async (req, res) => {

    try {

      const { email, schemaData } = req.user
      const Mock = await createModel(email, schemaData)

      const userData = await Mock.find({})
      // console.log(userData)

      res.send(userData)
    } catch (error) {
      res.sendStatus(500)
    }
  }

  // user erases all his using mockApi
  this.deleteAllData = async (req, res) => {

    try {
      const { email, schemaData } = req.user
      // const requestSchema = req.user.schema
      const Mock = await createModel(email, schemaData)

      const userDeleted = await Mock.deleteMany({})

      return res.send("deleted")
    } catch (error) {
      res.sendStatus(500)
    }
  }

  // later add
  // this.deleteSingleData = async (req, res) => {}
}


module.exports = mockController