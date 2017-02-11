import { REQUEST_POSTS,RECEIVE_POSTS } from '../actions/network';

export function post(state,action){
  switch (action.key){
    case "post_article":
      let data;

      let post_article = Object.assign({},state.post_article,{
        didInvalidate: true,
        isFetching:false,
        data:action.data
      });

      if(action.data.code == 1) {
        return Object.assign({},state,{
          post_article:post_article
        });
      }else{
        //提交成功修改status
        //提交失败不用修改，直接添加一个提示文案
        let innerData = Object.assign({},state.diet.data.data,{
          status:1
        });

        let data = Object.assign({},state.diet.data,{
          data:innerData
        });

        let diet = Object.assign({},state.diet,{
          data:data
        });

        return Object.assign({},state,{
          post_article:post_article,
          diet:diet
        });
        
      }

    default:
      return state;
  }
}