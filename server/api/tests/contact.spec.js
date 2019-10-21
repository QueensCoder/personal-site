const {expect} = require('chai');
const request = require('supertest');
const db = require('../../db');
const app = require('../../index');
const Contact = db.model('contact');

describe('Contact routes', () => {
  beforeEach(() => {
    return db.sync({force: true});
  });

  describe('/api/contact/', () => {
    const message = 'Hello world';
    const email = 'ozal@aol.com';

    const postEmail = 'test@aol.com';
    const postMessage = 'this is a test';

    beforeEach(() => {
      return Contact.create({
        email,
        message
      });
    });

    it('GET /api/contact', async () => {
      const res = await request(app)
        .get('/api/contact')
        .expect(200);

      expect(res.body).to.be.an('array');
      expect(res.body[0].message).to.be.equal(message);
      expect(res.body[0].email).to.be.equal(email);
    });

    it('POST /api/contact', async () => {
      const res = await request(app)
        .post('/api/contact')
        .send({email: postEmail, message: postMessage})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201);

      expect(res.body).to.be.an('object');
      expect(res.body.email).to.be.equal(postEmail);
      expect(res.body.message).to.be.equal(postMessage);
    });
  });
});
