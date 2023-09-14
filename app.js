// 导入相关函数
import Koa from "koa";
import resDuration from "./middleware/koa_response_duration.js";
import resHeader from "./middleware/koa_response_header.js";
import resData from "./middleware/koa_response_data.js";
// 创建Koa实例对象
const app = new Koa();
// 使用第一层中间件
app.use(resDuration);
// 使用第二层中间件
app.use(resHeader);
// 使用第三层中间件
app.use(resData);
// 监听8888端口
app.listen(8888);
