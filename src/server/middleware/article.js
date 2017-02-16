import { normalize, schema } from 'normalizr';
import Articles from '../models/articles';
import Utils from '../utils';

function Article(){}


Article.prototype.get = function(req, res, next){
  let time = Utils.time;

  Articles.getOne(time.day,function(err,data){
    if(err){
      return res.json({
        code : 1,
        msg : err
      });
    };

    res.json({
      code:0,
      data:data
    });
  });
};

Article.prototype.post = function(req, res, next){
  let body = req.body;
  let articles = new Articles(body.data);

  articles.save(function(err){
    if(err){
      return res.json({
        code:1,
        msg:err
      });
    };
    res.json({
      code:0,
      msg:"提交成功"
    });
  });
};

module.exports = Article;