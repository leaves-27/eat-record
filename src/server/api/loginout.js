function Loginout(){}
Loginout.prototype.get = function(req, res, next) {
  req.session.user = null;
  res.json({
    code:0,
    msg:"退出成功"
  });
}

module.exports = Loginout;