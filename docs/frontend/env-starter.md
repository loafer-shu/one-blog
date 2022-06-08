## 前端环境通过工具安装配置

### 安装

nvm全称Node Version Manager是 Nodejs 版本管理器，它让我们能方便的对 Nodejs 的版 本进行切换。 nvm 的官方版本只支持 Linux 和 Mac。 Windows 用户，可以用 nvm-windows

下载地址: [Releases · coreybutler/nvm-windows · GitHub](https://github.com/coreybutler/nvm-windows/releases)

Linux & MacOS: [GitHub - nvm-sh/nvm: Node Version Manager](https://github.com/nvm-sh/nvm)

- `nvm ls available` 查看全部可下载的NodeJS的版本
  
- `nvm install [version]` 下载指定版本
  
- `nvm ls` 查看已下载的NodeJS
  
- `nvm use [version]` 切换指定版本的NodeJS
  
- `nvm uninstall [version]` 删除指定版本的NodeJS
  

### 配置

##### nvm配置

设置后可至安装目录settings.txt文件查看，也可直接在该文件操作。

settings.txt：

> root: D:\Program\nvm
> path: D:\Program\nodejs
> node_mirror:https://npm.taobao.org/mirrors/node/

- `nvm root [path]` ：设置存储不同版本node的目录。如果未设置，默认使用当前安装目录。
  
- `nvm node_mirror [url]` ：设置node镜像。默认是[https://nodejs.org/dist/](https://links.jianshu.com/go?to=https%3A%2F%2Fnodejs.org%2Fdist%2F)。
  
- path: 使用的nodejs目录下文件链接到的位置，会加入环境变量。windows下安装nvm的时候会提示设置目录，不要有中文和空格，会出错。
  

##### npm配置

用户目录下的`.npmrc`文件

.npmrc:

> registry=https://registry.npmmirror.com/
> prefix=D:\Program\npm\global
> cache=D:\Program\npm\cache
> store-dir=D:\Program\pnpm\.pnpm-store

- `npm config set registry [url]` : 设置远程仓库地址。通过`nrm` 工具修改比较方便
  
- `npm config set prefix [path]` : 设置npm包的全局安装目录
  
- `npm config set cache [path]` : 设置npm包的缓存存储目录
  

### pnpm

通过npm安装pnpm

```shell
npm i -g pnpm
```

因为修改过npm的镜像仓库地址，所以不需要修改pnpm的仓库地址了

仅需要修改pnpm下载软件包的目录

```shell
pnpm config set store-dir [path]
```

pnpm常用命令

- 安装全部package
  
  ```shell
  pnpm install
  # or
  pnpm i
  ```
  
- package 管理
  
  文档地址： [https://pnpm.io/zh/cli/add](https://pnpm.io/zh/cli/add)
  

```shell
pnpm add [packageName@version]
pnpm remove [packageName]
pnpm up # 更新所有依赖
pnpm up [packageName@version]
```