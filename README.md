# 编辑部署流程

## 编写

- 在main分支中修改配置和md文档
- 提交推送远程
- 切换gh-pages分支执行 `pnpm docs:build` 编译并推送远程

## 部署

流程，伪代码

1. git checkout main
  编辑文件...
  
2. git commit

3. git checkout gh-pages

4. git merge main

5. pnpm docs:build

6. push
