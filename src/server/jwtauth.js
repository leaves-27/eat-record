var jwt = require('jwt-simple');
var ObjectId = require("objectid");
var User = require('./models/user');

module.exports = function(req, res, next) {
  var token = (req.body && req.body.access_token) || (req.query && req.query.access_token) || req.headers['x-access-token'];
  console.log("token33:",token);
  if(token){
    try{
      var decoded = jwt.decode(token,req.app.get('jwtTokenSecret'));
      if (decoded.exp <= Date.now()) {
        res.end('Access token has expired', 400);
      }
      console.log("decoded:",decoded);
      
      User.findOne({"_id": new ObjectId(decoded.iss) }, function(err, user) {
        console.log("user:",user);
        req.user = user;
      });

    }catch (err) {
      return next();
    }
  }else{
    next();
  }
};