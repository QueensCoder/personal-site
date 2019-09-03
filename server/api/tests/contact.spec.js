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
  });
});
