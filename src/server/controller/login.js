import crypto  from 'crypto';
import User  from "../models/user";
import { render } from '../render';

export function loginGet(req, res, next){
  render(req,res,next,{
    login:{
      data:{
        code:0
      }
    }
  });
}