const express = require('express');
const router = express.Router();
const User = require('../modules/modules.user');
// const users = [];
// const usersControllers = require('')



router.post('/register', async(req, res) => {
  
  // if controllers approve.. then 'call' the schema here
  // contrtollers...
  // contrtollers...

    console.log('Request Type:', req.method)
    console.log('Request data:', req.body)

    const { name, password } = req.body.data
    const user = new User({name, password})
    console.log(user)

    await user.save().then(() => {
    console.log('successfully ran program');
    res.send('success !')
  })
  .catch(error => {
    console.error(`Error`);
    res.send('Failed !')
  });

  
  })

  // return res.send("ok")


module.exports = router;
