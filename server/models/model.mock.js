const mongoose = require('mongoose');
// const bcrypt = require('bcrypt')
// const validator = require('validator')
// const jwt = require('jsonwebtoken')

const mongooseMock = require('../db/mongooseMock');


const userSchemaOptions = {
  // add CreatedAt and UpdatedAT
    timestamps : true
}

const mockSchema = new mongoose.Schema({
  name: {
    type: String
  }
}, userSchemaOptions);



const Mock = mongooseMock.model('Mock', mockSchema);

module.exports = Mock