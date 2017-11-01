var request = require('request');

var apiOptions = {
  server: "http://localhost:60000"
};

if (process.env.NODE_ENV === 'production') {
  apiOptions.server = "http://keety.herokuapp.com";
}

/* Controller for rendering home/landing/menu page */
module.exports.home = function(req, res){
  res.render('index', {title: 'Keety Grabber'});
};

module.exports.loadKitty = function (req, res){
var requestOptions, path;

  path = '/api/hellos';

  requestOptions = {
    url: apiOptions.server + path,
    method: "GET",
    json: {},
    qs: {}
  };

  request(
    requestOptions,
    function(err, response, body) {
      renderKitteh(err, req, res, body);
    }
  );
};

/* Controller for home/landing/menu page */
var renderKitteh = function(err, req, res, responseBody){
  console.log(responseBody.phrase);

  var clue = "";

  if (req.session.views) {
    req.session.views++
    if(req.session.views == 3) {
      clue = "We don't want to hear that too much...";
    }
  } else {
    req.session.views = 1
  }

  var option = Math.floor(Math.random() * 6);

  console.log(option);

  var url = "";

  switch(option) {
    case 0:
    case 1:
      url = "http://cataas.com/cat/cute/says/"+responseBody.phrase;
      break;
    case 2:
      url = "http://cataas.com/cat/cute";
      break;
    default:
      url = "http://cataas.com/cat/gif";
      break;
  }
  
  res.render('kitteh', {
    title: 'Your Kitteh',
    link: url,
    views: req.session.views,
    clue: clue
  });
};
