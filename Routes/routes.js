const express = require('express');
const constroller = require('../Controllers/controller');

const router = express.Router();

router.get('/user', constroller.getUser)
router.get('/', constroller.getMsg);

module.exports = router;