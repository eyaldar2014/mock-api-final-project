const express = require('express');
const app = express();
const cors = require('cors');
const usersRoute = require('./routes/route.users')
const mocksRoute = require('./routes/route.mocks')



app.use(express.json())
app.use(cors());

// app.get('/api', (req, res) => res.send('hello world'))
app.use('/api/users', usersRoute);
app.use('/api/mocks', mocksRoute);



module.exports = app