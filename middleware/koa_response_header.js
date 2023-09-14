// 第二层中间件实现：设置响应头
export default async (ctx, next) => {
  // 响应头信息
  const contentType = "application/json; charset=utf-8";
  // 设置响应头
  ctx.set("Content-Type", contentType);
  ctx.set("Access-Control-Allow-Origin", "*");
  ctx.set("Access-Control-Allow-Methods", "OPTIONS,GET,PUT,POST,DELETE");
  // 调用下一层中间件
  await next();
};
