// might need to set up a server and set it to localhost 3000
const request = require('supertest');
const fs = require('fs');
const path = require('path');

const server = 'http://localhost:3000'

describe('Route integration', () => {
  describe('/', () => {
    describe('GET', () => {
      it('response with 200 status and text/html content type', () => {
        return request(server)
          .get('/')
          .expect('Content-Type', /text\/html/)
          .expect(200)
      })
    })
  })

  describe('/signin tests', () => {
    describe('POST', () => {
      it('responds with 200 status and json/application content type', () => {
        return request(server)
          .post('/signin')
          .send({ email: 'test@test.com', password: 'password'})
          .expect('Content-Type', /json\/application/)
          .expect(200)
      })

      it('response with error status if email or password does not match database', () => {
        return request(server)
          .post('/signin')
          .send({ email: 'test@test.com', password: 'wrongpassword'})
          .expect(200)
          .then(res => {
            expect(res.body.error)
          })
      })
    })
  })

  describe('/signup tests', () => {
    describe('POST', () => {
      it('responds with 200 status and json/applicatin content type', () => {
        return request(server)
          .post('/signup')
          .send({ firstName: 'test', lastName: 'test', email: 'test@test.com', password: 'password'})
          .expect('Content-Type', /application\/json/)
          .expect(200)
      })

      it('response with an error if customer already exists', () => {
        return request(server)
          .post('/signup')
          .send({ firstName: 'test', lastName: 'test', email: 'test@test.com', password: 'password' })
          .expect('Content-Type', /application\/json/)
          .expect(200)
          .then(res => {
            expect(res.body.error)
          })
      })
    })
  })
})