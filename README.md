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
  entities:
    article:
      isFetching: false,
      didInvalidate: false,
      lastUpdated:"",
      pageCount:0,
      pageSize:0,
      currentNo:1,
      data:[]
    diet:
      isFetching: false,
      didInvalidate: false,
      lastUpdated:"",
      pageCount:0,
      pageSize:0,
      currentNo:1,
      data:{
        status:1,
        fieldsets:[]
      }
# 尚需解决的问题：
1、pm2启动的应用找不到view文件；
3、登录页面添加；
4、分页；
5、监控报警；
git clone https://github.com/harttle/pm2-notify cd pm2-noti
6、数据库缓存添加；
 


