---
title: Tina cms VS Decap cms
date: 2023-04-06T08:36:56.796Z
---

## Tina cms

#### 优点

- 直接使用原项目编译预览，无需另外维护预览组件；
- MDX shortcuts 引入方式非常方便，可直接使用 React 组件；
- 数据描述更为灵活；

#### 缺点

- 权限管理不灵活，需要依赖 tina cloud 或者另外[部署服务](https://tina.io/docs/self-hosted/overview/)；
- 集成流程较为复杂，高耦合；需要使用 tina cms hooks 去修改原项目获取数据方式，创建页面方式也需要按照 tina cms 的方式处理；

#### 基本接入流程

- [Gatsby + Tina Setup Guide](https://tina.io/docs/frameworks/gatsby/)
- [Migrate from Forestry](https://tina.io/docs/forestry/migrate/)

## Decap cms

#### 优点

- 集成现有项目较为方便，低耦合；
- 权限管理灵活，无需绑定指定平台服务；
- netlify 平台支持，并提供对应 Gatsby plugin；

#### 缺点

- 内容实时预览需要脱离 Gatsby 单独创建组件渲染，意味着原项目的 MUI theme、i18n 等都得为 preview 另外引入且无法展示 query 获取的数据；
- MDX shortcuts 如需预览，无法直接使用 React 组件，需要使用 [registereditorcomponent](https://decapcms.org/docs/custom-widgets/#registereditorcomponent) 另外创建，过程比较复杂；（可产考 `audio` `youtube`）

#### 基本接入流程

- [Add to Your Site](https://decapcms.org/docs/add-to-your-site/)
- [Gatsby Guides](https://decapcms.org/docs/gatsby/)
- [Account Settings](https://decapcms.org/docs/git-gateway-backend/)
- [Gatsby Template Example](https://github.com/decaporg/gatsby-starter-netlify-cms)

#### 注意事项

- 两个项目分支分别为 `migrate-to-tina` 和 `migrate-decap-cms`，两个分支均引入了不同插件，建议使用 github worktree 方式同时维护多个分支，避免每次切换分支更新对应依赖；
- Decap cms preview layout 已经单独引入 MUI theme 和 i18n，其中 i18n 目前使用默认 lang，之后如果对应内容包含 languages 相关 fields，可以传入对应 preview template，添加 lang 切换逻辑；
- Decap cms custom editors (MDX shortcuts)目前编辑后，是直接在 mdx 文件中插入 html，目前使用 css 文件 `customEditorComponents.css` 给对应 editor 提供样式，之后可以尝试优化；
- 目前 Decap cms 权限管理使用了 [Git Gateway with Netlify](https://decapcms.org/docs/git-gateway-backend/)；目前使用 `open` 模式，建议正式使用可以切换成 `invite only` 模式；
- 目前临时添加了 docs 文件夹在 `GATSBY_ENV=development` 环境生成页面逻辑；
- Decap cms 可本地启动 `npx netlify-cms-proxy-server` [Working with a Local Git Repository](https://decapcms.org/docs/beta-features/#working-with-a-local-git-repository)
- 目前 Decap cms 有个致命缺陷，自带的 markdown 编辑器中文输入焦点会丢失，暂时还未解决；[Updating Slate editor to support Korean](https://github.com/decaporg/decap-cms/issues/1347#issuecomment-809187277)
