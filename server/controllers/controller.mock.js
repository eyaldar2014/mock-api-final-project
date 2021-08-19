const createModel = require('../models/model.mock');
const MockValidation = require('../validations/validation.mock');
const mockValidation = new MockValidation()


const mockController = function () {

  this.createSchema = async (req, res) => {

    try {

      const requestSchema = req.body
      if (!mockValidation.createSchemaValidation(requestSchema)) throw new Error('wrong details')
      req.user.schemaData = requestSchema
      
      const { email } = req.user
      const response = await createModel(email, requestSchema)
      const saveUser = await req.user.save()

      return res.status(201).send(saveUser)
    }
    catch (err) {
      return res.status(400).send({ "details": err.message })
    }

  }
  this.createData = async (req, res) => {

    try {

      const name = req.body.name
      if (!mockValidation.createDataValidation(name)) throw new Error('wrong details')

      const { email } = req.user
      const requestSchema = req.user.schemaData
      // console.log(requestSchema)
      const Mock = await createModel(email, requestSchema)
      const newMock = new Mock({ name })
      const response = await newMock.save()

      return res.status(200).send(response)
    }
    catch (err) {
      return res.status(400).send({ "details": err.message })
    }

  }
  this.getData = async (req, res) => {

    try {

      const { email } = req.user
      const requestSchema = req.user.schema
      const Mock = await createModel(email, requestSchema)

      const userData = await Mock.find({})
      // console.log(userData)

      res.send(userData)
    } catch (error) {
      res.sendStatus(500)
    }
  }
  this.deleteAllData = async (req, res) => {

    try {
      const { email } = req.user
      const requestSchema = req.user.schema
      const Mock = await createModel(email, requestSchema)

      // const userData2 = await Mock.find({})
      // console.log('here', userData2)

      const userDeleted = await Mock.deleteMany({})

      return res.send("deleted")
    } catch (error) {
      res.sendStatus(500)
    }
  }
  // later
  // this.deleteSingleData = async (req, res) => {}

}


module.exports = mockController