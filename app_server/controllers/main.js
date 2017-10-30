/* Controller for home/landing/menu page */
module.exports.home = function(req, res){
  res.render('index', {title: 'Keety Grabber'});
};

/* Controller for home/landing/menu page */
module.exports.kitteh = function(req, res){
  var clue = "";

  if (req.session.views) {
    req.session.views++
    if(req.session.views == 3) {
      clue = "We don't want to hear that too much...";
    }
  } else {
    req.session.views = 1
  }

  var option = Math.floor(Math.random() * 5);

  console.log(option);

  var url = "";

  switch(option) {
    case 0:
      url = "http://cataas.com/cat/cute/says/hello";
      break;
    case 1:
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
