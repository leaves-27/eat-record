import Articles from '../models/articles';
import Utils from '../utils';
import { render } from '../render';

export function detailGet(req, res, next){
  Articles.getOne(req.date,function(err,data){
    let initState;

    if(err){
      initState = {
        detail:{
          data:{
            code : 1,
            msg : err
          }
        }
      }
    };

    initState = {
      detail:{
        data:{
          code:0,
          data:data
        }
      }
    };
    
    render(req,res,next,initState);
  });
};