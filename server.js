const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000; 
const os = require('os');

app.use(cors());

app.get('/api/getUser', (req, res) => res.send({ username: os.userInfo().username }));

app.use('/', function (req, res, next) {
  console.log('Request Type:', req.method)
  res.send('lalala')
})
// app.get('/api/getUser', (req, res) => res.send({ username: os.userInfo().username }));


if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use(express.static('client/build'));
}


app.listen(process.env.PORT || port , () =>{
    console.log(`Server started on port ${port}`)
});
