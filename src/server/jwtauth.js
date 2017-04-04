var jwt = require('jwt-simple');
var ObjectId = require("objectid");
var User = require('./models/user');

module.exports = function(req, res, next) {
  var token = (req.body && req.body.token) || (req.query && req.query.token) || req.headers['x-access-token'];
  if(token){
    try{
      var decoded = jwt.decode(token,req.app.get('jwtTokenSecret'));
      if (decoded.exp <= Date.now()) {
        res.end('Access token has expired', 400);
      }
      
      User.findOne({"_id": new ObjectId(decoded.iss) }, function(err, user) {
        req.user = user;
        next();
      });

    }catch (err) {
      return next();
    }
  }else{
    next();
  }
};