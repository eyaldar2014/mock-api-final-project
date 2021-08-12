require('./fixtures/mongoose')
const app = require('../app')

// supertest is HTTP library that allows testing the nodeJS server. it runs the app each time seperatedly, 
// and allows modifying: request method, set authorization, send request and receive response as for wide example
const request = require('supertest')
const User = require('../models/model.user')
const {
  userOneId,
  userTwoId,
  userOne,
  userTwo,
  setupDatabase,
  closeDatabaseConnection
} = require('./fixtures/db')

// runs before each test
beforeEach(setupDatabase)
// runs after all tests completed
afterAll(closeDatabaseConnection)


test('Should signup a new user', async () => {
    
  const response = await request(app)
    .post('/api/users/register')
    .send({
      email: "eyal@gmail.com",
      password: "12345678aA"
    })
    .expect(201)

  // Test that the database was changed correctly
  const user = await User.findById(response.body.user._id)
  expect(user).not.toBeNull()

  // Test about the response body
  expect(response.body).toMatchObject({
    user: {
      email: "eyal@gmail.com"
    },
    token: user.tokens[0].token
  })
  // password should be "hashed"
  expect(user.password).not.toBe('12345678aA')
})

test('Should login existing user', async () => {
  const response = await request(app)
    .post('/api/users/login')
    .send({
      email: userOne.email,
      password: userOne.password
    })
    .expect(200)

  const user = await User.findById(userOneId)
  expect(user).not.toBeNull()

  // new token is being created at login
  expect(response.body.token).toBe(user.tokens[1].token)
})

test('Should not login existing user', async () => {
  await request(app)
    .post('/api/users/login')
    .send({
      email: userOne.email,
      password: "wrong password"
    })
    .expect(400)

  await request(app)
    .post('/api/users/login')
    .send({
      email: "wrong email",
      password: userOne.password
    })
    .expect(400)
})

test('Should fetch user\'s information', async () => {
  const response = await request(app)
    .get('/api/users/me')
    .set('Authorization', "Bearer " + userOne.tokens[0].token)
    .send()
    .expect(200)
    
    expect(response.body._id).toBe(userOneId.toString())
})

test('Should NOT fetch user\'s information because of missing Authorization', async () => {
  await request(app)
    .get('/api/users/me')
    .send()
    .expect(401)
})

test('Should delete user\'s account', async () => {
  const response = await request(app)
    .delete('/api/users/me')
    .set('Authorization', "Bearer " + userOne.tokens[0].token)
    .send()
    .expect(200)

  const user = await User.findById(userOneId)
  expect(user).toBeNull()
})

test('Should NOT delete user\'s account because of missing Authorization', async () => {
  await request(app)
    .delete('/api/users/me')
    .send()
    .expect(401)
})

test('Should update user\'s using valid user fields', async () => {
  const response = await request(app)
    .patch('/api/users/me')
    .set('Authorization', "Bearer " + userOne.tokens[0].token)
    .send({
      email: "kofiko@gmail.com",
      password: "123123aA"
    })
    .expect(200)

  const user = await User.findById(userOneId)
  expect(user.email).toBe("kofiko@gmail.com")
  // again password should be hashed
  expect(user.password).not.toBe("123123aA")
  expect(user.password).not.toBeNull()
})

test('Should NOT update user\'s using invalid user fields', async () => {
  const response = await request(app)
    .patch('/api/users/me')
    .set('Authorization', "Bearer " + userOne.tokens[0].token)
    .send({
      location: "anywhere"
    })
    // bad request
    .expect(400)

    const response2 = await request(app)
    .patch('/api/users/me')
    .set('Authorization', "Bearer " + userOne.tokens[0].token)
    .send({
    // invalid password 
      password: "123456"
    })
    // validation failure (internal error)
    .expect(500)
})
