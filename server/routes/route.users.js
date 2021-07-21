const express = require('express');
const router = express.Router();
const User = require('../models/model.user');

const userControllers = require('../controllers/controller.user')


router.post('/register', async (req, res) => {

  console.log('Request Type:', req.method)
  console.log('Request data:', req.body)

  try {

    // if controllers approve.. then 'call' the schema here

    const { name, password } = req.body
    userControllers(name, password)


    const user = new User({ name: name, 'password': password })
    console.log("new User: " + user)

    await user.save().then(() => {
      console.log('successfully ran program');
      res.send('success !')
    })
  }
  catch (error) {
    console.error(`Error:`, error);
    res.send('Failed !')
  }
})


module.exports = router;
