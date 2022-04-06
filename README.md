

## 发布相关

- npm login
开发者可能使用了淘宝镜像源，无法登录npm
1. 使用 > npm login --registry https://registry.npmjs.org
2. 切换淘宝镜像为npm官方

- lerna publish 
检测改动过的包，依次发布
修改一个包，如果其他包依赖这个包，则会自动检测发布