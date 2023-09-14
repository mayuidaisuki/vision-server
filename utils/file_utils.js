// 获取文件对应的数据
import path from "path";
import fs from "fs";
export default async (url) => {
  // 将请求路径转换为文件路径
  const dataUrl = `data${url.replace("/api", "")}.json`;
  const filePath = path.join(path.resolve(), dataUrl);
  // 将结果返回为Promise对象
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf-8", (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
};
