const {expect} = require('chai');
const request = require('supertest');
const app = require('../../index');

describe('Resume routes', () => {
  describe('/api/resume', () => {
    it('GET /api/resume results in a 200, file can be found and downloaded', async () => {
      const res = await request(app)
        .get('/api/resume')
        .expect(200);

      //the response type should be as pdf file when this route is hit
      expect(res.type).to.be.equal('application/pdf');
    });
  });
});
