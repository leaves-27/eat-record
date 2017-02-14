var crypto = require('crypto');
var	User = require("../models/user");

function Login(){}

Login.prototype.validate = function(req, res, next){
  if(req.session.user){
    User.get(req.session.user.name,function(err,user){
      if (!user){
        req.session.user = null;
        return res.json({
          code:1,
          msg:"用户不存在！"
        });
      };

      req.session.user = user;

      res.json({
        code:0,
        data:user
      });
    });
  }

  res.json({
    code:4,
    msg:"未登录，请先进行登录"
  });
}

Login.prototype.post = function(req, res, next){
  var md5 = crypto.createHash("md5"),
			password = md5.update(req.body.data.password).digest('hex');

	User.get(req.body.data.name,function(err,user){
		if (!user){
			return res.json({
        code:1,
        msg:"用户不存在！"
      });
		};

		if(user.password != password){
      return res.json({
        code:1,
        msg:"用户名或密码错误"
      });
		}

    req.session.user = user;
		res.json({
      code:0,
      data:user
    });
	});
}

module.exports = Login;