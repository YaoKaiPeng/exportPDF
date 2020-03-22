# 组件开发框架

webpack配置等已准备好, 可以直接开发组件, 开发后可以进行build, 发布至npm

------------

### 目录解释
```
├── config # webpack配置
	├── webpack.base.js # 公共配置
	├── webpack.dev.config.js # 开发环境
	└── webpack.prod.config.js # 打包发布环境
├── example # 开发时预览效果
	├── app.js
	└── index.html
├── lib # 打包后生成到文件目录
├── src # 组件业务代码, 在这编写你的组件
	├── index.css # 组件样式
	└── index.js # 组件代码
├── .babelrc
├── .npmignore
├── README.md
└── package.json
```

------------

#### 开发
```shell
npm i
npm start
```
#### 打包发布
> 发布npm包请参考官方文档 https://docs.npmjs.com/cli/publish

```shell
npm run build
npm publish
```
