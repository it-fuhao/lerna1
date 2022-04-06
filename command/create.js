    
import fs from "fs-extra";
import path from "path";
import chalk from "chalk";
import symbols from "log-symbols";

console.log(symbols.success, chalk.green("开始创建..........,请稍候"));

// 拿到命令行的参数去生成对应的文件
// 拿到命令行输入的模块名
const moduleName = process.argv[2];
// 默认模版目录
const componentModulePath = path.resolve(
  "./template"
); // 生成pages里的component
const assetsModulePath = path.resolve("./assets");
const localeModulePath = path.resolve("./locales");
// 输出的目标目录
const componentTargetPath = path.resolve("src/views"); // 对应输出的目标文件
const assetsTargetPath = path.resolve("src/assets");
const localeTargetPath = path.resolve("src/locales");
    
    // @param componentModulePath(要拷贝的模版路径)
    // @param componentTargetPath(输出的目标路径)
    // @param moduleNme(命令行拿到的 模块名)
    // createComponent(componentModulePath, componentTargetPath, moduleName);
    // createComponent(assetsModulePath, assetsTargetPath, moduleName);
    // createComponent(localeModulePath, localeTargetPath, moduleName);
    
    const createComponent = (demoPath, targetpath, name) => {
      console.log(symbols.success, chalk.green("开始创建..........,请稍候"));
      fs.copy(demoPath, `${targetpath}/${name}`) // 拷贝模板文件到目标目录
        .then(() => {
          reWrite(`${targetpath}/${name}`, name); // 生成文件
          console.log(symbols.success, chalk.green("创建成功"));
        })
        .catch(err => {
          console.log(symbols.error, chalk.red("创建失败", err));
        });
    }
    
    const reWrite = (path, name) => {
      const files = fs.readdirSync(path);
      files.forEach(file => {
        const fileName = `${path}/${file}`;
        if (fs.statSync(fileName).isFile()) {
          const content = fs.readFileSync(fileName).toString();
          // 创建子级组件XXX/yy,截取yy
          const demoName = name.split("/").reverse()[0];
          // 截取组件名-, 则写入的组件名采用大驼峰
          const result = content.replace(/template/g, stringToCamel(demoName));
          fs.writeFileSync(fileName, result);
        } else {
          reWrite(fileName, name);
        }
      });
    };
    
    // 将字符串转化成大驼峰
    const stringToCamel = str => {
      let temp = str.split("-");
      for (let i = 0; i < temp.length; i++) {
        temp[i] = temp[i][0].toUpperCase() + temp[i].slice(1);
      }
      return temp.join("");
    };