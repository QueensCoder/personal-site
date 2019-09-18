const router = require('express').Router();
module.exports = router;

//when route is hit the resume is downloaded
router.get('/', (req, res, next) => {
  try {
    const file = `${__dirname}/resume/Ozal_Khan_resume.pdf`;
    res.download(file);
    console.log('here');
  } catch (err) {
    console.log(err);
  }
});
