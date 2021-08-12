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

    try {
      userValidation.loginUserValidation(req, res)

      const user = await User.findByCredentials(req.body.email, req.body.password)
      const token = await user.generateAuthToken()

      return res.send({ user, token })
    } catch (err) {
      return res.status(400).send({ "Error!": err.message })
    }
  }
  this.logoutUser = async (req, res) => {

    try {
      req.user.tokens = req.user.tokens.filter((token) => token.token !== req.token)

      await req.user.save()
      res.send('logout successfully')
    } catch (error) {
      res.sendStatus(500)
    }
  }
  this.getProfile = async (req, res) => {
    res.send(req.user)
  }
  this.deleteUser = async (req, res) => {
    // console.log('delete request on "/users/me" route for single user')

    try {
      const user = await User.findByIdAndDelete(req.user._id)
      if (!user) return res.sendStatus(404)

      return res.send({ "deleted": req.user })
    }
    catch (err) {
      return res.status(500).send({ "Error!": err.message })
    }
  }
  this.updateUser = async (req, res) => {


    // validate update fields
    const updates = Object.keys(req.body)
    const validation = userValidation.updateUserValidation(req, res, updates)

    try {
      
      if (!validation) return res.sendStatus(400)

      // validation will happen before "await user.save()". default operation. not like "User.findByIdAndUpdate()", that requires opts
      updates.forEach(update => req.user[update] = req.body[update])
      await req.user.save()

      return res.send(req.user)
    }
    catch (err) {
      return res.status(500).send({ "Error!": err.message })
    }
  }
}


module.exports = userController