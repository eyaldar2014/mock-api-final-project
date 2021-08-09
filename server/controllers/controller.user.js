const User = require('../models/model.user');
const UserValidation = require('../validations/validation.user');

const userValidation = new UserValidation()


const userController = function () {

  this.createUser = async (req, res) => {

    try {
      userValidation.createUserValidation(req, res)

      const newUser = new User(req.body)
      const user = await newUser.save()
      const token = await user.generateAuthToken()

      return res.status(201).send({ user: user, token })
    }
    catch (err) {
      return res.status(400).send({ "Error!": err.message })
    }
  }
  this.loginUser = async (req, res) => {

    try{
      userValidation.loginUserValidation(req, res)
      
      const user = await User.findByCredentials(req.body.email, req.body.password)
      const token = await user.generateAuthToken()

      return res.send( {user, token})
    } catch (err){
      return res.status(400).send({ "Error!": err.message })
    }
  }
  this.logoutUser = async (req, res) => {

    try{
      req.user.tokens = req.user.tokens.filter((token) => token.token !== req.token)

      await req.user.save()
      res.send('logout successfully')
    } catch (error) {
      res.sendStatus(500)
    }
  }
}


module.exports = userController