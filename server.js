const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000; 

app.use(cors());

app.get('/', function (req, res, next) {
  console.log('Request Type:', req.method)
  res.send('lalala')
})


if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use(express.static('client/build'));
}


app.listen(process.env.PORT || port , () =>{
    console.log(`Server started on port ${port}`)
});
