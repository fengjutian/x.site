---
sidebar_position: 1
---
# Rust简介
## 什么是Rust 

Rust 是一种开放源代码系统编程语言，可用于开发高效、安全的软件。 使用 Rust 可管理内存并控制其低级详细信息。 但你也可以利用迭代和接口等高级概念。 这些功能将 Rust 与 C 和 C++ 等底层语言区分开来。

Rust 还具有以下优点，非常适合各种应用程序：

* 类型安全：编译器可确保不会将任何操作应用于错误类型的变量。
* 内存安全：Rust 指针（称为“引用”）始终引用有效的内存。
* 无数据争用：Rust 的 borrow 检查器通过确保程序的多个部分不能同时更改同一值来保证线程安全。
* 零成本抽象：Rust 允许使用高级别概念，例如迭代、接口和函数编程，将性能成本控制在最低，甚至不会产生成本。 这些抽象的性能与手工编写的底层代码一样出色。
* 最小运行时：Rust 具有极小的可选运行时。 为了有效地管理内存，此语言也不具有垃圾回收器。 在这一点上，Rust 非常类似于 C 和 C++ 之类的语言。
* 面向裸机：Rust 可以用于嵌入式和“裸机”编程，因此适合用于编写操作系统内核或设备驱动程序。
  
根据 2022 年的 Stack Overflow 开发人员调查，Rust 已经连续几年成为最受欢迎的语言。 开发人员喜欢 Rust 的编程！ 许多类型的组织（从初创公司到大型企业）都在其独特的用例中使用 Rust。 从生成工具到编写 Web 应用、在服务器上工作，以及创建嵌入式系统，有无限的可能。


## 环境安装与搭建

Get started by **creating a new site**.

Or **try Docusaurus immediately** with **[docusaurus.new](https://docusaurus.new)**.

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 18.0 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Generate a new site

Generate a new Docusaurus site using the **classic template**.

The classic template will automatically be added to your project after you run the command:

```bash
npm init docusaurus@latest my-website classic
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Docusaurus.

## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.
