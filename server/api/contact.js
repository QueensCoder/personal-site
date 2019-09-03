const router = require('express').Router();
const {Contact} = require('../db/models');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const contact = await Contact.findAll();
    res.json(contact);
  } catch (err) {
    console.log(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const createdContact = await Contact.create(req.body);
    res.status(201).json(createdContact);
  } catch (err) {
    console.log(err);
  }
});
