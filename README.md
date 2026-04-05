# 知链 (Zhilian) · 企业知识资产全链路处理平台

<div align="center">
  <br />
  <h3>
    面向企业私有化部署的知识全链路处理平台，<br/>
    帮助企业将分散知识转化为可搜索、可问答、可治理的 AI 核心资产。
  </h3>
</div>

<br/>

## 🌟 项目介绍

**知链 (Zhilian)** 是一套专为现代企业大模型应用落地的定制化前端产品与宣传官网。网页设计融入了最先进的现代化设计规范与玻璃态交互动效，提供“丝滑”的浏览体验与极强的工程科技感表现力。

该系统包含五个核心维度：
* **Pipeline 管理库**：全链路数据处理架构
* **可视化编排编排**：拖拽式知识节点调度系统
* **插件生态互联**：跨越第三方的数据隔离网
* **召回测试引擎**：知识点智能评测工具
* **智能向量与RAG增强**：数据分析与大白话答疑中心

## 💻 核心技术栈

本项目使用业界前沿也是最高性能的企业级前端单页应用（SPA）技术栈构建：

- **核心框架**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **构建工具**: [Vite](https://vitejs.dev/) - 极速本地服务与现代化的生产打包能力
- **视觉风格**: [Tailwind CSS](https://tailwindcss.com/) - 原子类CSS控制与美化
- **界面组件**: [shadcn/ui](https://ui.shadcn.com/) & [Radix UI](https://www.radix-ui.com/) - 无障碍体验的 Headless 高级 UI
- **动效引擎**: [Framer Motion](https://www.framer.com/motion/) - 提供所有页面物理回弹（Spring）、交错渐现与联动 3D 动画
- **数据管线**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/) - 表单校验与管理

## 🚀 快速本地开发

要求最低 `Node.js 18+`，推荐使用 `npm` 进行包管理。

```bash
# 1. 克隆代码到本地
git clone https://github.com/yhslgg-arch/zhilian.git

# 2. 进入项目目录
cd zhilian

# 3. 安装所有的相关依赖文件
npm install

# 4. 启动本地热更新开发服务器 (默认端口将会是 8080 或 8081)
npm run dev
```

## 📦 部署指南 (基于 Linux 宝塔面板 + Nginx)

由于该项目是现代架构的 React SPA，在部署前需要将代码编译并使用 Web 服务器托管。

### 步骤 1：本地打包构建
在项目终端中执行以下命令：
```bash
npm run build
```
执行完毕后，项目根目录会生成一个 **`dist`** 文件夹，这里面存放了所有被压缩过可供浏览器直接执行的静态资源文件（HTML/CSS/JS）。

### 步骤 2：上传到服务器
1. 将本地的 `dist` 文件夹打包压缩为 `zip` 格式。
2. 登录宝塔面板，添加并创建一个新站点（无需配置 PHP 和数据库）。
3. 在新站点的文件管理根目录中，清空旧文件，上传刚才压缩的 `zip` 包并解压。

### 步骤 3：配置 Nginx 伪静态 (关键!)
为解决单页应用（SPA）直接刷新非根路径（或外部直达链接）报 `404 Not Found` 错误的问题，需要给网页配置伪静态转发规则。在宝塔的 **网站设置 -> 伪静态** 中填入并保存：

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

至此，全部部署完成，直接访问配置的域名即可！

---
© 2026 知链 Zhilian. All rights reserved.
