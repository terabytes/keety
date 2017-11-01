var mongoose = require('mongoose');
var random = require('mongoose-simple-random');
var HelloP = mongoose.model('helloPhrase');

var sendJsonResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

module.exports.getHello = function(req, res){
  HelloP.findOneRandom(function(err, helloPhrase) {
    if (err) console.log(err);
    else {
      console.log(helloPhrase);
      sendJsonResponse(res, 200, helloPhrase);
    }
  });
};