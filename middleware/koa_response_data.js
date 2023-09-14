// 第三层中间件实现：获取数据
import getData from "../utils/file_utils.js";
export default async (ctx, next) => {
  // 获取请求路径
  const url = ctx.request.url;
  // 根据请求路径获取数据
  try {
    const data = await getData(url);
    ctx.response.body = data;
  } catch (error) {
    const errorMsg = {
      message: "读取内容失败，文件不存在",
      status: 404,
    };
    ctx.response.body = JSON.stringify(errorMsg);
  }
  await next();
};
