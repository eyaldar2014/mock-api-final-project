const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://eyal:87654321@currentcluster.ub7sd.mongodb.net/currentCluster?retryWrites=true&w=majority' , {
  useNewUrlParser: true,
  useCreateIndex : true,
  useUnifiedTopology: true,
  useFindAndModify: false
})
