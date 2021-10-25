const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const validator = require('validator')
const jwt = require('jsonwebtoken')

const mongooseAdmin = require('../db/mongooseAdmin');


const userSchemaOptions = {
  // add CreatedAt and UpdatedAT
    timestamps : true
}

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    // unique create indexes, with no similar fields. 
    // Note - must reset db to work (erase db) and refresh
    unique: true,
    required: true,
    trim: true,
    index: true,
    validate(val) {
      if (!validator.isEmail(val)) {
        throw new Error('Email is invalid')
      }
    }
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 6,
    validate(val) {
      // Password must contain at least one numeric digit, one uppercase and one lowercase letter
      const lowerCaseLetters = /[a-z]/g;
      if (!val.match(lowerCaseLetters)) {
        throw new Error('password must contain lower case letter')
      }
      const upperCaseLetters = /[A-Z]/g;
      if (!val.match(upperCaseLetters)) {
        throw new Error('password must contain upper case letter')
      }
      const numbers = /[0-9]/g;
      if (!val.match(numbers)) {
        throw new Error('password must contain a number')
      }
    }
  },
  tokens: [{
    token: {
      type: String,
      required: true
    }
  }],
  schemaData : {
    type : Object,
    required : true,
    default : {}
  }
}, userSchemaOptions);


// MiddleWare Section : notice that "statics" are available on the Model, when "methods" are available on instances
//
// create token (after login or creating user) :
userSchema.methods.generateAuthToken = async function () {

  const user = this
  // therefore not an arrow function (otherwise this equals undefined)

  // "jwt.sign()" gets obj as 1st parameter, and a String is expected
  const token = jwt.sign({ _id: user["_id"].toString() }, process.env.JWT_SECRET || "stringSignature")
  // concat merges 2 arrays or more
  user.tokens = user.tokens.concat({ token })
  await user.save()

  return token
}
// for login purpuses verify email & password : 
userSchema.statics.findByCredentials = async (email, password) => {

  if (!email || !password) throw new Error('missing fields')

  const user = await User.findOne({ email })

  if (!user) throw new Error('invalid login')

  const verifyPassword = await bcrypt.compare(password, user.password)
  
  if (!verifyPassword) throw new Error('invalid login')

  return user
}
// 'middleware public data filter'. runs every time before send. "automatically" hides the given list of properties before sending the object in the response.
userSchema.methods.toJSON = function () {

  // Documents has a toObject method which converts the 'mongoose document' into a plain 'JavaScript object'
  const { _id, email } = this.toObject()
  return { _id, email }
}
// hash the plain password before storing (in case db info gets stolen) :
userSchema.pre('save', async function (next) {

  let user = this
  // therefore not an arrow function (otherwise this equals undefined)

  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8)
  }

  next()
})


const User = mongooseAdmin.model('User', userSchema);

module.exports = User