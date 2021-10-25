const express = require('express');
const app = express();
const cors = require('cors');
const usersRoute = require('./routes/route.users')
const mocksRoute = require('./routes/route.mocks')



app.use(express.json())
app.use(cors());

// route for users
app.use('/api/users', usersRoute);
// route for data of users using mockApi
app.use('/api/mocks', mocksRoute);



module.exports = app