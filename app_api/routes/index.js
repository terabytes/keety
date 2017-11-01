var express = require('express');
var router = express.Router();
var ctrlHellos = require('../controllers/hellos');

router.get('/hellos', ctrlHellos.getHello);

module.exports = router;