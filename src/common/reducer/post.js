import { REQUEST_POSTS,RECEIVE_POSTS } from '../actions/network';
import  post_article from './post_article';
import  { login } from './login';

export function post(state,action){
  switch (action.key){
    case "post_article":
      return post_article(state,action);
    case "login":
      return login(state,action);
    default:
      return state;
  }
}