
function LoginOut(){}

LoginOut.prototype.get =  function(req, res, next) {
	req.session.user = null;
	res.json({
    code:0
  });
}

module.exports = LoginOut;