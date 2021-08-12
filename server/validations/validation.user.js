const validator = require('validator');


const userValidation = function () {

  this.createUserValidation = (req, res) => {

    const { email, password } = req.body

    if (!validator.isEmail(email)) throw new Error('invalid email value')

    // Password must contain at least one numeric digit, one uppercase and one lowercase letter
    // basic and seperated regex usage. for maintainabillity and understanding
    if (password.length < 6 ) {
      throw new Error('password must be at least 6 characters long')
    }
    const lowerCaseLetters = /[a-z]/g;
    if (!password.match(lowerCaseLetters)) {
      throw new Error('password must contain lower case letter')
    }
    const upperCaseLetters = /[A-Z]/g;
    if (!password.match(upperCaseLetters)) {
      throw new Error('password must contain upper case letter')
    }
    const numbers = /[0-9]/g;
    if (!password.match(numbers)) {
      throw new Error('password must contain a number')
    }

    return true
  }

  this.updateUserValidation = (req, res, updates) => {
    
    // allow only specific fields to update
    const allowedUpdates = ['password', 'email']
    const isValideOperation = updates.reduce((sum, val) => {
      return sum && allowedUpdates.includes(val)
    }, true)
    
    if (!isValideOperation) return false

    return true
  }
}


module.exports = userValidation