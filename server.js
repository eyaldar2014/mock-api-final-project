const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000; 

const os = require('os');
const path = require('path');

app.use(cors());

app.get('/api/', function (req, res) {
  console.log('Request Type:', req.method)
  res.send('lalalali')
})


if (process.env.NODE_ENV === 'production') {
  // Exprees will serve up production assets
  app.use(express.static('client/build'));
// Express serve up index.html file if it doesn't recognize route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });

}


app.listen(process.env.PORT || port , () =>{
    console.log(`Server started on port ${port}`)
});
