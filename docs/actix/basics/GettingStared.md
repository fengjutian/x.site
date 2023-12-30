---
sidebar_position: 2
---

# 开始
## 安装 Rust

<!-- If you don't have Rust yet, we recommend you use `rustup` to manage your Rust installation. [The official rust guide](https://doc.rust-lang.org/book/ch01-01-installation.html) has a wonderful section on getting started. -->

如果您还没有 Rust，我们建议您使用 Rustup 来管理 Rust 安装。[官方 Rust 指南](https://doc.rust-lang.org/book/ch01-01-installation.html)是一个很棒的入门教程。

<!-- Actix Web currently has a minimum supported Rust version (MSRV) of 1.59. Running `rustup update` will ensure you have the latest and greatest Rust version available. As such, this guide assumes you are running Rust 1.59 or later. -->

Actix Web 目前支持的最低 Rust 版本为 1.59。运行 `rustup update` 将确保您拥有最新和最棒的 Rust 版本。因此，本指南假定你已经运行 Rust 1.59 或更高版本。

# Hello, world!

<!-- Start by creating a new binary-based Cargo project and changing into the new directory: -->
首先，创建一个新的基于二进制的 Cargo 项目并切换到新目录：

```xml
cargo new hello-world
cd hello-world
```
<!-- Add `actix-web` as a dependency of your project by adding the following to your Cargo.toml file. -->
你可以将以下依赖项添加到项目中的 `cargo.toml` 文件中：

```xml
[dependencies]
actix-web = "4"
```
<!-- Request handlers use async functions that accept zero or more parameters. These parameters can be extracted from a request (see `FromRequest` trait) and returns a type that can be converted into an `HttpResponse` (see `Responder` trait): -->
请求处理程序使用接受零个或多个参数的异步函数。 这些参数可以从请求中提取（请参见 FromRequest trait），并返回可以转换为 HttpResponse 的类型（请参见 Responder trait）：

<!-- Replace the contents of `src/main.rs` with the following: -->
请将 `src/main.rs` 的内容替换为以下内容：

```rust
use actix_web::{get, post, web, App, HttpResponse, HttpServer, Responder};

#[get("/")]
async fn hello() -> impl Responder {
    HttpResponse::Ok().body("Hello world!")
}

#[post("/echo")]
async fn echo(req_body: String) -> impl Responder {
    HttpResponse::Ok().body(req_body)
}

async fn manual_hello() -> impl Responder {
    HttpResponse::Ok().body("Hey there!")
}
```
<!-- 
Notice that some of these handlers have routing information attached directly using the built-in macros. These allow you to specify the method and path that the handler should respond to. You will see below how to register manual_hello (i.e. routes that do not use a routing macro). -->

请注意，其中一些处理程序使用内置宏直接附加了路由信息。这些允许您指定处理程序应该响应的方法和路径。您将在下面看到如何注册manual_hello（即不使用路由宏的路由）。

<!-- Next, create an App instance and register the request handlers. Use App::service for the handlers using routing macros and App::route for manually routed handlers, declaring the path and method. Finally, the app is started inside an HttpServer which will serve incoming requests using your App as an "application factory". -->

接下来，创建一个 `App` 实例并注册请求处理程序。 对于使用路由宏的处理程序，请使用 `App::service`，对于手动路由的处理程序，请使用 `App::route`，声明路径和方法。 最后，使用 `HttpServer` 启动应用程序，该服务器将使用您的 App 作为“应用程序工厂”来处理传入的请求。

<!-- Further append the following main function to src/main.rs: -->
将下面代码复制到`src/main.rs`:

```rust
#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .service(hello)
            .service(echo)
            .route("/hey", web::get().to(manual_hello))
    })
    .bind(("127.0.0.1", 8080))?
    .run()
    .await
}
```
<!-- That's it! Compile and run the program with cargo run. The #[actix_web::main] macro executes the async main function within the actix runtime. Now you can go to http://127.0.0.1:8080/ or any of the other routes you defined to see the results. -->
使用`cargo run`编译并运行程序。`#[actix_web::main]`宏在actix运行时中执行异步主函数。现在，你可以转到`http://127.0.0.1:8080/`或在定义的任何其他路由来查看结果。

