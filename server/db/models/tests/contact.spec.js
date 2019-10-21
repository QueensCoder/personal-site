const {expect} = require('chai');
const db = require('../../index');
const Contact = db.model('contact');

describe('Contact model', () => {
  let contact;
  beforeEach(() => {
    return db.sync({force: true});
  });

  beforeEach(async () => {
    contact = await Contact.create({
      message: 'hello world',
      email: 'ozal@aol.com'
    });
  });

  it('associates the email to the correct message, ozal@aol.com sent hello world', () => {
    expect(contact.message).to.be.equal('hello world');
    expect(contact.email).to.be.equal('ozal@aol.com');
  });
});
