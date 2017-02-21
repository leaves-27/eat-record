# create-fieldset页面：取消、完成  1-2-3
# create-group页面:取消、完成
# end

# creat:
  ##1 
    1.onclick-创建fieldset
    2.onclick-去下一页
  ##2 
    1.onclick-创建group
    2.onclick-向后台提交数据
  ##3 tip
  
# login: 
  1.onclick-向后台提交数据
    username:
    password:

# list: 
  1.向后台获取数据
    state:
  2.onclick:
    去详情
 
# detail: 
  1.向后台获取数据
  2.返回list.
  content[i]


request:

# state

  articles:
    data:
      code:
      data:
        date:
        fieldsets:[]
  diet:
    data:
      code:
      data:
        fieldsets:[]
      status:
        
  login:
    data:
      user:
        name:
        password:
      code:
      data:

    
# 尚需解决的问题：
1、pm2启动的应用找不到view文件；
3、登录页面添加；
4、分页；
5、监控报警；
git clone https://github.com/harttle/pm2-notify cd pm2-noti
6、数据库缓存添加；

# state:

## 最终state:
  login:
    user:
  articles:[]
  diet:
    status:1
    fieldsets:[]
  detail:
    fieldsets:[]
  backend:
    fieldsets:[]

# service:
  web:
  api:

# client:
login:
  post:
list:
  get:
detail:
  get:
backend:
  get:
  post:

# 疑问：
1.客户端路由跳转后，没有数据时，state为未定义时，去渲染不返回任何组件，会不会报错。
2.客户端和服务器共用store时，服务端store的设计。因服务端一般是1对多：设计为1对1。
3.api数据服务的设计，如何保证安全性。
4.前后端同构情况下，前端如何进行路由跳转？例如：登录完成的页面跳转。

# 开发的时候需要遵守的逻辑:

1.服务端对所有web接口进行校验，如果未登录，统一跳转到login页面。
2.服务端对所有api接口进行校验，如果未登录，统一提示去登录页面登录。
3.渲染前，对state是否存在进行判断。若不存在则不进行渲染。
4.客户端和服务端数据来源统一封装成一个action和api。
(1)即客户端若发送的是页面请求，则服务端通过触发相应action去获取数据，然后将获取的数据传给组件通过服务器端渲染以后返回给客户端。
(2)若客户端发送的是json请求，则客户端通过触发相应的action去后去数据，获取的数据直接返回给客户端。
5.登录动作设计为web请求，登录完成后，让服务端负责页面的跳转。若要客户端进行跳转，则添加一个页面提示用户登陆成功，让用户点击跳转到相应页面。

# 每个页面的逻辑：
## login:
  去登录、登录成功，则去获取需要跳转的页面数据，然后渲染需要跳转的页面的组件。否则，继续渲染login页面。
## list:
  login:
    status:0,
    user:
  articles:[]
## detail:
  login:
    status:0,
    user:
  detail:
    fieldsets:[]
## backend:
  login:status:0,
    status:0
    user:
  fieldsets:[]
  status:0




