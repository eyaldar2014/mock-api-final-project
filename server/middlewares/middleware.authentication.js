const jwt = require('jsonwebtoken')
const User = require('../models/model.user')

const authenticateToken = async (req, res, next) => {

  try {
    // removing "Bearer " from 'Authorization' value (string)
    const token = req.header('Authorization').replace("Bearer ", "")
    const decoded = jwt.verify(token, "stringSignature")

    const user = await User.findOne({ 
      _id : decoded["_id"],
      'tokens.token' : token 
    })
    
    if (!user) throw new Error()

    // saving current user & token to the request
    req.user = user
    req.token = token
    next()

  } catch (error) {
    return res.sendStatus(401)
  }
}


module.exports = authenticateToken