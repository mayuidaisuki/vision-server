// 第一层中间件实现：计算服务器响应时间
export default async (ctx, next) => {
  // 记录开始时的时间
  const start = Date.now();
  // 进入下一层中间件
  await next();
  // 记录结束时的时间
  const end = Date.now();
  // 计算使用的时间
  const duration = end - start;
  // 在响应头设置时间
  ctx.set("X-Response-Time", `${duration}ms`);
};
