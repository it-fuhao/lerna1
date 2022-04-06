
## yarn install


## 发布相关

- lerna 
lerna : 无法加载文件，系统策略禁止运行脚本
使用管理员身份运行powershell  > Set-ExecutionPolicy -ExecutionPolicy RemoteSigned
https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.2

- npm login
开发者可能使用了淘宝镜像源，无法登录npm
1. 使用 > npm login --registry https://registry.npmjs.org
2. 切换淘宝镜像为npm官方 npm config set registry https://registry.npmjs.org

- lerna publish 
检测改动过的包，依次发布
修改一个包，如果其他包依赖这个包，则会自动检测发布