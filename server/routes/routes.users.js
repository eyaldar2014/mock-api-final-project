const express = require('express');
const router = express.Router();
// const users = [];
// const usersControllers = require('')



router.post('/register', (req, res) => {
  // if controllers approve.. then 'call' the schema here
    console.log('Request Type:', req.method)
    console.log('Request data:', req.body)
    res.send('success !')
  })
  // return res.send("ok")


module.exports = router;
