const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = require('../../models/model.user')


const userOneId = new mongoose.Types.ObjectId()
const userOne = {
  _id: userOneId,
  email: "homosepian@gmail.com",
  password: "aA0000000",
  tokens: [{
    token: jwt.sign({ _id: userOneId }, "stringSignature")
  }]
}


const setupDatabase = async () => {
  await User.deleteMany()

  await new User(userOne).save()  
}

// close the connection with mongodb
const closeDatabaseConnection = async () => {
  await mongoose.connection.close();
  // await mongoose.disconnect()sudo service mongodb restart
}


module.exports = {
  setupDatabase,
  closeDatabaseConnection 
}