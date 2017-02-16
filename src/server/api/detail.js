import Articles from '../models/articles';
import Utils from '../utils';

function Detail(){}

Detail.prototype.get = function(req, res, next){
  Articles.getOne(req.date,function(err,data){
    if(err){
      res.json({
        detail:{
          code : 1,
          msg : err
        }
      })
    };

    res.json({
      detail:{
        code:0,
        data:data
      }
    });
    
  });
};
module.exports = Detail;