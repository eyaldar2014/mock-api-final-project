const validator = require('validator');


const mockValidation = function () {

  // validation for user creating schame using mockApi
  this.createSchemaValidation = (requestSchema) => {

    let check = true
    if (!requestSchema.minLength || !requestSchema.maxLength) {
      check = false
    }
    else if (requestSchema.minLength < 1 || requestSchema.minLength > 100) {
      check = false
    }
    else if (requestSchema.maxLength < 1 || requestSchema.maxLength > 100) {
      check = false
    }
    else if (requestSchema.maxLength <= requestSchema.minLength) {
      check = false
    }

    return check
  }

  // validation for user creating item using mockApi
  this.createDataValidation = (name) => {
    
    let check = true
    if (!name) {
      check = false
    }
    else if (typeof name !== 'string') {
      check = false
    }

    return check
  }

}


module.exports = mockValidation