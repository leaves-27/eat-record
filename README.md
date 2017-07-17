# issue：
1.state的设计是按功能设计还是按业务的页面模块设计？
  目前是按页面设计？

  按功能设计：
    简单清晰、可复用性较强
  按业务的页面模块设计：
    简单、快速

2.一个大的action下如何细分action？
  目前的办法将同一个层级的action写在一个文件。

3.如何跨页面修改state.
  目前方案是先修改最开始的state，然后再反馈到页面再根据页面的action修改其他action.


# state:

##登录页面:

  输入登录信息:
    用户名:
    密码:
    验证码:

  获取登录验证码:
    验证码:

  登录(数据合法性验证、请求登录、登录失败、登录成功):


state:
  username:{
    text:"",
    valid:{//不能为空
      code:"",
      text:""
    }
  }

  password:{
    text:"",
    valid:{ //不是由字母、数字和特殊字符串组，且不能少于6位，不能超过11位。
      code:"",
      text:""
    }
  }
  

  verityCode:{
    text:"",
    login:{ //必须是数字，且必须等于6位。
      code : ""
      text : ""
    }
  }
  
  isLogin:{
    code:""
    text:""
  }

action:
  1.获取验证码
    1)请求验证码
    2)请求成功
    3)请求失败
  2.输入相关信息
  3.登录
    1)进行验证
    2)请求登录
    3)登录成功
    4)登录失败

const:

  Validation:
    [{
      code:"0",
      text:"验证成功"
    },{
      code:"1",
      text:"不能为空"
    },{
      code:"2",
      text:"必须是数字，且必须等于6位"
    },{
      code:"3",
      text:"不是由字母、数字和特殊字符串组，且不能少于6位，不能超过11位"
    }]

  Login:[{
    code: "0",
    text: "登录成功"
  },{
    code: "1",
    text: "未登录"
  },{
    code: "2",
    text: "登录中"
  },{
    code: "3",
    text: "登录失败"
  }]


## 列表页面
  
action:
  获取列表:
  1)请求获取列表
  2)获取列表失败
  3)获取列表成功

state:
  list:[{
    title:"",
    date:""
  }]

## 详情页面

state:
  desc:{
    title:""
    date:"",
    content:""
  }

action:
  获取详情:
  1)请求获取详情
  2)获取详情失败
  3)获取详情成功

## 后台页面

state:
  fieldsets:[{
    title:"",
    groups:[{
      name:"",
      value:"",
    }]
  }]

## 注册页面

state:
  user:{
    name:
    password:
    repassword:
    email:
  }

  isRegister:{
    code:"",
    text:""
  }

action:
  注册：
  1)数据验证
  2)请求注册
  3)注册失败
  4)注册成功












  













