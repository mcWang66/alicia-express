// 引入 mongoose 
const mongoose = require('mongoose')

  // const DB_CONNECTION_STRING = 'mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb/ExpressApi';
const DB_CONNECTION_STRING = 'mongodb://localhost:27017/ExpressApi';
// 连接数据库，自动新建 ExpressApi 库
mongoose.connect(DB_CONNECTION_STRING, {
  // useNewUrlParser: true, // 避免“不建议使用当前URL字符串解析器”
  // useCreateIndex: true, // 解决MongoDB弃用警告
  // useUnifiedTopology: true, // 解决连接报错问题
  // useFindAndModify: false,
  // useMongoClient: true,
}, function (err) {
  if (err) {
    console.log("数据库连接失败！", err);
  } else {
    console.log("数据库连接成功！");
    // app.listen(port);
    // console.log('moive start on port ' + port);
  }
})

//监听数据库连接状态
// mongoose.connection.once('open', () => {
//   console.log('数据库连接成功……')
// })
// mongoose.connection.once('close', () => {
//   console.log('数据库断开……')
// })

module.exports = mongoose