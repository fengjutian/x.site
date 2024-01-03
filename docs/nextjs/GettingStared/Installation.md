---
sidebar_position: 1
---

#  安装

系统要求：
- Node.js 18.17 或更高版本。
- 支持 macOS、Windows（包括 WSL）和 Linux。

# 自动安装

我们建议使用 `create-next-app` 启动新的 Next.js 应用程序，它会自动为您设置所有内容。若要创建项目，请运行：

```bash
npx create-next-app@latest
```

安装时，你将看到以下提示：

```bash
What is your project named? my-app
Would you like to use TypeScript? No / Yes
Would you like to use ESLint? No / Yes
Would you like to use Tailwind CSS? No / Yes
Would you like to use `src/` directory? No / Yes
Would you like to use App Router? (recommended) No / Yes
Would you like to customize the default import alias (@/*)? No / Yes
What import alias would you like configured? @/*
```

出现提示后，将创建一个包含项目名称的文件夹， `create-next-app` 并安装所需的依赖项。

# 手动安装

若要手动创建新的 Next.js 应用，请安装所需的包：

```bash
npm install next@latest react@latest react-dom@latest
```

--- 未完 ---