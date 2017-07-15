# 尚需解决的问题：
1.请求的action如何和reducer的state一一对应

# state

## 业务分析
login:
  name:
  pwd:
  verityCode:

register:
  name:
  pwd:
  repwd:
  email:

list :
  title :
  date :

detail :
  article :
  
backend :
  tempArticle :

## 最终的state
list:[]
currentScanArticle : id
tempArticle:{}
user : {
  email:"",
  name : "",
  pwd : "",
  verityCode : ""
}

login : {
  isFetching : false, 
  msg : "",
  isLogin : ""
}

发出请求:
请求成功:
请求错误:

# action

setName:
setPwd:
setVerityCode:

setIsLogin:
  request:
  response:

setList:
  getList:
  request:
  response:
  
  
getDetail:


setTempArticle:
  getDetail:
    request:
    response:

  addNewGroup
  INPUT_GROUP
  DELETE_GROUP
  
  ADD_FIELDSET
  DELETE_FIELDSET

state设计：
路由跳转：
路由授权：

  













