const express = require('express');
const indexCon = require('../controllers/indexCon')
const router = express.Router();

router.get('/login', indexCon.login);

router.get('/signup', indexCon.signup);
router.post('/signup', indexCon.signup_post);

router.get('/homepage', indexCon.homepage);

module.exports = router;