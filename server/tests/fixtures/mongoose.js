const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://eyal:87654321@cluster0.uairz.mongodb.net/Cluster0?retryWrites=true&w=majority' , {
  useNewUrlParser: true,
  useCreateIndex : true,
  useUnifiedTopology: true,
  useFindAndModify: false
})
