## 使用VitePress搭建vue组件库文档


## 安装
```bash
npm add -D vitepress
```

## 构建基本项目
```bahs
 npx vitepress init
```

## 启动并运行
```json
{
  ...
  "scripts": {
    "docs:dev": "vitepress dev docs",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  },
  ...
}
```
docs:dev 脚本将启动具有即时热更新的本地开发服务器。使用以下命令运行它：
```bash
npm run docs:dev
```
除了 npm 脚本，还可以直接调用 VitePress：
```bash
npx vitepress dev docs
```

## 预览

<img src="https://pic1.imgdb.cn/item/67bd2504d0e0a243d4043c65.png" />
<img src="https://pic1.imgdb.cn/item/67bd2503d0e0a243d4043c64.png" />