import Articles from '../models/articles';
import { render } from '../render';

export function listGet(req, res, next){
  //对数据进行读取
  Articles.getAll(function(err,data){
    let initState;

    if(err){
      initState = {
        articles:{
          data:{
            code:1,
            msg:err
          }
        }
      };
    };
    
    initState = {
      articles:{
        data:{
          code:0,
          data:data
        }
      }
    };
    
    render(req,res,next,initState);
  });
};