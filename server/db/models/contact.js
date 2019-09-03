const Sequelize = require('sequelize');
const db = require('../db');

const Contact = db.define('contact', {
  message: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Contact;
