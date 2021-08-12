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

const userTwoId = new mongoose.Types.ObjectId()
const userTwo = {
  _id: userTwoId,
  email: "neanderthal@gmail.com",
  password: "bB00000000",
  tokens: [{
    token: jwt.sign({ _id: userTwoId }, "stringSignature")
  }]
}


const setupDatabase = async () => {
  await User.deleteMany()

  await new User(userOne).save()
  await new User(userTwo).save()
}

// close the connection with mongodb
const closeDatabaseConnection = async () => {
  await mongoose.connection.close();
  // await mongoose.disconnect()sudo service mongodb restart
}


module.exports = {
  userOneId,
  userTwoId,
  userOne,
  userTwo,
  setupDatabase,
  closeDatabaseConnection 
}