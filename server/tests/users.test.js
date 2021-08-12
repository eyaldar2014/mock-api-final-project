require('./fixtures/mongoose')
const app = require('../app')

// const request = require('supertest')
// const User = require('../models/model.user')
const { setupDatabase, closeDatabaseConnection } = require('./fixtures/db')


beforeEach(setupDatabase)

afterAll(closeDatabaseConnection)


test('hello world', () => {
  expect(1 + 1).toBe(2)
})
