const mongooseMock = require('../db/mongooseMock');
const mongoose = require('mongoose');


const mockSchemaOptions = {
  // add CreatedAt and UpdatedAT
  timestamps: true
}

const names = {}
const createSchema = (email, requestSchema) => {


  const { minLength, maxLength } = requestSchema
  // console.log('here', minLength, maxLength)

  let response  
  if (Object.keys(names).includes(email)) response = names[email]
  else {
    response = new mongoose.Schema({

      name : {
        type : String,
        minLength,
        maxLength,
      }

    }, mockSchemaOptions);


    names[email] = response
  }

  // console.log(names)
  return response
}


const createModel = (email, requestSchema) => mongooseMock.model(email, createSchema(email, requestSchema));



module.exports = createModel