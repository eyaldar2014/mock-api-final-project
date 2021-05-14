const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require("body-parser");
const path = require('path');
const port = 5000; 

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://eyal:87654321@currentcluster.qukhk.mongodb.net/currentCluster?retryWrites=true&w=majority'
, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/api/', function (req, res) {
  console.log('Request Type:', req.method)
  res.send('lalalali')
})

app.post('/request/register/', function (req, res) {
  console.log('Request Type:', req.method)
  console.log('Request data:', req.body)

  res.send('success !')
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


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  app.listen(process.env.PORT || port , () =>{
    console.log(`Server started on port ${port}`)
  });  
});


const userSchema = new mongoose.Schema({
  name: String,
  password: String
});
const User = mongoose.model('User', userSchema);