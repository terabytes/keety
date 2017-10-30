var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');

router.get('/', ctrlMain.home); // home page aka menu
router.get('/meow', ctrlMain.kitteh); // kitteh page aka menu

module.exports = router;
