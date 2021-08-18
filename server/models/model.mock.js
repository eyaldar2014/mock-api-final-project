const mongooseMock = require('../db/mongooseMock');
const mongoose = require('mongoose');

// const bcrypt = require('bcrypt')
// const validator = require('validator')
// const jwt = require('jsonwebtoken')


const mockSchemaOptions = {
  // add CreatedAt and UpdatedAT
  timestamps: true
}

const names = {}
const createSchema = (name) => {

  let response
  
  if (Object.keys(names).includes(name)) response = name[name]
  else {
    response = new mongoose.Schema({
      name: {
        type: String
      }
    }, mockSchemaOptions);

    names[name] = response
  }

  return response
}


const createModel = (name) => mongooseMock.model(name, createSchema(name));



module.exports = createModel