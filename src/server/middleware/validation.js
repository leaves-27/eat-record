import crypto  from 'crypto';
import User  from "../models/user";

//验证：
//1.访问页面时候的验证，在未登录的情况下，需后端来跳转到登录页面
//2.访问接口的验证，在未登录的情况下，需前端的跳转页面

export function validationPage(req, res, next){
  if(req.session.user){
    User.get(req.session.user.name,function(err,user){
      if (!user){
        req.session.user = null;
        res.redirect("/web/login");
      };

      next();
    });
  }else{
    res.redirect("/web/login");
  }
}