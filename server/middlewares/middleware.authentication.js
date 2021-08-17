const jwt = require('jsonwebtoken')
const User = require('../models/model.user')

const authenticateToken = async (req, res, next) => {

  // console.log(req.headers.cookie)

  try {

    // on postman : removing "Bearer " from 'Authorization' value (string)
    // const token = req.header('Authorization').replace("Bearer ", "")
    // on production : removing "access_token=" from 'Authorization' value (string)
    const token = req.headers.cookie.replace('access_token=', "")

    // unpacks token to user's _id that was used to create the token, and the time it was created
    const decoded = jwt.verify(token, "stringSignature")

    // checks if the user exists and token is up to date
    const user = await User.findOne({
      _id: decoded["_id"],
      'tokens.token': token
    })

    if (!user) throw new Error()

    // saving current user & token to the request
    req.user = user
    req.token = token
    next()

  } catch (error) {
    // Unauthorized
    return res.sendStatus(401)
  }
}


module.exports = authenticateToken