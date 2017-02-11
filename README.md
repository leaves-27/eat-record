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

# 以日期为关键字，每天只能有一条记录
# 提交时进行验证，并弹出确认框？
 


