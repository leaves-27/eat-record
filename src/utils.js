/**
 * 工具类
 */

//创建常量的函数:
export function createConstants(...constants) {
  return constants.reduce((acc, constant) => {
    acc[constant] = constant;
    return acc;
  }, {});
}

//创建reducer的函数
export function createReducer(initialState, reducerMap){
  return (state = initialState, action)=>{
    const reducer = reducerMap[action.type];
    return reducer ? reducer(state, action) : state;
    // if (reducerMap.hasOwnProperty(action.type)) {
    //   return reducerMap[action.type](state,action);
    // }else{
    //   return state;
    // }
  };
}

const date = new Date();
const minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
const time = {
    date: date,
    year: date.getFullYear(),
    month: date.getFullYear() + "-" + (date.getMonth() + 1),
    day: date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate(),
    minute: date.getFullYear() + "-" + (date.getMonth() + 1) + "-" +date.getDate() + " " + date.getHours() + ":" + minute
};

export function getTime(){
    return time;
}

//判断是不是空对象
export function isEmptyObject(e){
  let t;
  for(t in e)
    return !1;
  return !0
}
