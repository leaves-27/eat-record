/**
 * Created by leaves-27 on 17-01-20.
 */
 
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

const  loggerMiddleware = createLogger();

//创建加入中间件的createStore函数
//它提供的是位于 action 被发起之后，到达 reducer 之前的扩展点
let configureStore;
let env = process.env.NODE_ENV;

if(env=="production") {
  configureStore = applyMiddleware(
    thunkMiddleware
  )(createStore);
}else{
  configureStore = applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )(createStore);
}

//暴露store创建函数
export default configureStore