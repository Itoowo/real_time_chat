const express = require('express');
const indexCon = require('../controllers/indexCon')
const router = express.Router();

router.get('/', indexCon.index);

router.get('/login', indexCon.login);
router.post('/login', indexCon.login_post);

router.post('/logout', indexCon.logout_post)

router.get('/signup', indexCon.signup);
router.post('/signup', indexCon.signup_post);

router.get('/homepage', indexCon.homepage);

module.exports = router;