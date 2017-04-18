function Loginout(){}
Loginout.prototype.get = function(req, res, next) {
  let cookieOptions = {
    expires : new Date(Date.now() + 1000*60*30),
    httpOnly : false,
    path : "/",
    secure : false,
    signed : false
  };

  res.clearCookie("token",cookieOptions);

  res.json({
    code : 0,
    msg : "退出成功"
  });
}

module.exports = Loginout;