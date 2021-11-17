const request = require('supertest');
const app = require('../app');
const expect = require('chai').expect;
var mocha = require('mocha')
  var describe = mocha.describe
  var it = mocha.it
  var assert = require('chai').assert

describe('login api', ()=> {
    it('Should success if credential is valid', (done) => {
        request(app)
           .post('/login')
           .send({ username: 'username', password: 'password' })
           .expect(200)
           .expect('Content-Type', /json/)
           .expect(function(response) {
              expect(response.body).not.to.be.empty;
              expect(response.body).to.be.an('object');
           })
           .end(done);
    }); 
});