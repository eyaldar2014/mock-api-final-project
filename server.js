const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000; 


app.use(cors());


app.use('/', function (req, res, next) {
  console.log('Request Type:', req.method)
  res.send('lalala')
})



app.listen(process.env.PORT || port , () =>{
    console.log(`Server started on port ${port}`)
});
