import { normalize, schema } from 'normalizr';
import Articles from '../models/articles';


function List(){}

List.prototype.get = function(req, res, next){
  //对数据进行读取
  Articles.getAll(function(err,data){
    if(err){
      return res.json({
        code:1,
        msg:err
      });
    };
    
    res.json({
      code:0,
      data:data
    });
  });
};

module.exports = List;