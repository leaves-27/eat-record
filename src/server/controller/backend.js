import Articles from '../models/articles';
import Utils from '../utils';
import { render } from '../render';

export function backendGet (req, res, next){
  let time = Utils.time;

  Articles.getOne(time.day,function(err,data){
    let initState;
    
    if(err){
      initState = {
        diet:{
          data:{
            code : 1,
            msg : err
          }
        }
      }
    };

    if(!data){
      data = {
        fieldsets:[{
          name:'标题1',
          groups:[]
        },{
          name:'标题2',
          groups:[]
        },{
          name:'标题3',
          groups:[]
        },{
          name:'标题4',
          groups:[]
        }]
      }
    }

    initState = {
      diet:{
        data:{
          code:0,
          data:data
        }
      }
    };
    
    render(req,res,next,initState);
  });
};