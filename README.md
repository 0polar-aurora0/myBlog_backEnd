# myblog_backend

 - [myblog_backend](#myblog_backend)
  - [文件目录](#文件目录)
  - [安装部署](#安装部署)
  - [启动运行](#启动运行)
  - [版本历史](#版本历史)
  - [信息](#信息)
  - [参与项目](#参与项目)
  
> 一个个人博客项目 myblog, 项目基于 midway-koa 实现

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Downloads Stats][npm-downloads]][npm-url]

<!-- ![](header.png) -->

---

## 工程目录结构
```
myBlog_backEnd
├─ .editorconfig
├─ .eslintrc.json
├─ .gitignore
├─ .prettierrc.js
├─ bootstrap.js
├─ jest.config.js
├─ jest.setup.js
├─ package.json
├─ README.md
├─ README.zh-CN.md
├─ src
│  ├─ app
│  │  ├─ controller
│  │  │  ├─ api.ts
│  │  │  ├─ articleCard.ts
│  │  │  └─ home.ts
│  │  ├─ database
│  │  │  └─ articlecard.sql
│  │  ├─ dto
│  │  │  └─ articleCard.ts
│  │  ├─ entity
│  │  ├─ extend
│  │  │  ├─ application.ts
│  │  │  ├─ context.ts
│  │  │  ├─ helper.ts
│  │  │  ├─ request.ts
│  │  │  └─ response.ts
│  │  ├─ middleware
│  │  ├─ model
│  │  │  └─ articleCard.ts
│  │  └─ service
│  │     ├─ articleCard.ts
│  │     └─ user.ts
│  ├─ config
│  │  ├─ config.default.ts
│  │  ├─ config.local.ts
│  │  ├─ config.unittest.ts
│  │  └─ plugin.ts
│  ├─ configuration.ts
│  └─ interface.ts
├─ test
│  └─ controller
│     ├─ api.test.ts
│     └─ home.test.ts
├─ tsconfig.json
└─ typings
   ├─ app
   │  ├─ extend
   │  │  ├─ application.d.ts
   │  │  ├─ context.d.ts
   │  │  ├─ helper.d.ts
   │  │  ├─ request.d.ts
   │  │  └─ response.d.ts
   │  └─ index.d.ts
   └─ config
      ├─ index.d.ts
      └─ plugin.d.ts

```
## 安装部署

OS X & Linux:

```sh
git clone https://github.com/0polar-aurora0/myBlog_backEnd.git
npm install --save
```

Windows:

```sh
git clone https://github.com/0polar-aurora0/myBlog_backEnd.git
npm install --save
```

## 启动运行

```sh
npm run dev
```

## 版本历史

- 0.2.1
  - CHANGE: Update docs (module code remains unchanged)
- 0.2.0
  - CHANGE: Remove `setDefaultXYZ()`
  - ADD: Add `init()`
- 0.1.1
  - FIX: Crash when calling `baz()` (Thanks @GenerousContributorName!)
- 0.1.0
  - The first proper release
  - CHANGE: Rename `foo()` to `bar()`
- 0.0.1
  - Work in progress

## 信息

0polar-aurora0 – [@github](https://github.com/0polar-aurora0) – 1045612802@qq.com

## 参与项目

1. Fork it (<https://github.com/0polar-aurora0/myBlog_backEnd/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

