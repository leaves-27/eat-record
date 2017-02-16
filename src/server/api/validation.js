import crypto from 'crypto';
import User from "../models/user";

export function validationApi(req, res, next){
  if(req.session.user){
    User.get(req.session.user.name,function(err,user){
      if(!user){
        req.session.user = null;
        res.json({
          code:1,
          msg:"用户不存在"
        });
      };
      
      res.json({
        code:0,
        data:user
      });
    });
  }else{
    res.json({
      code:1,
      msg:"未登录，请先去登录"
    });
  }
}
