---
sidebar_position: 3
---

# Application

<!-- actix-web provides various primitives to build web servers and applications with Rust. It provides routing, middleware, pre-processing of requests, post-processing of responses, etc. -->
`activx-web`提供了各种原语来使用Rust构建web服务器和应用程序。它提供路由、中间件、请求的预处理、响应的后处理等。

<!-- All actix-web servers are built around the App instance. It is used for registering routes for resources and middleware. It also stores application state shared across all handlers within the same scope. -->
所有`activx-web`服务器都是围绕应用程序实例构建的。它用于注册资源和中间件的路由。它还存储在同一范围内的所有处理程序之间共享的应用程序状态。

<!-- An application's scope acts as a namespace for all routes, i.e. all routes for a specific application scope have the same url path prefix. The application prefix always contains a leading "/" slash. If a supplied prefix does not contain leading slash, it is automatically inserted. The prefix should consist of value path segments. -->
应用程序的作用域充当所有路由的命名空间，即特定应用程序作用域的所有路由都具有相同的url路径前缀。应用程序前缀总是包含一个前导的“/”斜线。如果提供的前缀不包含前导斜杠，则会自动插入。前缀应由值路径段组成。

<!-- For an application with scope /app, any request with the paths `/app`, `/app/`, or `/app/test` would match; however, the path /application would not match. -->
对于具有`scope/app`的应用程序，任何具有路径`/app`、`/app/`或`/app/test`的请求都将匹配；但是，路径/应用程序将不匹配。

```rust
use actix_web::{web, App, HttpServer, Responder};

async fn index() -> impl Responder {
    "Hello world!"
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new().service(
            // prefixes all resources and routes attached to it...
            web::scope("/app")
                // ...so this handles requests for `GET /app/index.html`
                .route("/index.html", web::get().to(index)),
        )
    })
    .bind(("127.0.0.1", 8080))?
    .run()
    .await
}
```
In this example, an application with the /app prefix and an index.html resource is created. This resource is available through the /app/index.html url.

# State
Application state is shared with all routes and resources within the same scope. State can be accessed with the `web::Data<T>` extractor where T is the type of the state. State is also accessible for middleware.

Let's write a simple application and store the application name in the state:

```rust
use actix_web::{get, web, App, HttpServer};

// This struct represents state
struct AppState {
    app_name: String,
}

#[get("/")]
async fn index(data: web::Data<AppState>) -> String {
    let app_name = &data.app_name; // <- get app_name
    format!("Hello {app_name}!") // <- response with app_name
}
```

Next, pass in the state when initializing the App and start the application:

```rust
#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .app_data(web::Data::new(AppState {
                app_name: String::from("Actix Web"),
            }))
            .service(index)
    })
    .bind(("127.0.0.1", 8080))?
    .run()
    .await
}
```

Any number of state types could be registered within the application.

# Shared Mutable State

`HttpServer` accepts an application factory rather than an application instance. An `HttpServer` constructs an application instance for each thread. Therefore, application data must be constructed multiple times. If you want to share data between different threads, a shareable object should be used, e.g. `Send + Sync`.

Internally, `web::Data` uses `Arc`. So in order to avoid creating two `Arcs`, we should create our Data before registering it using `App::app_data()`.

In the following example, we will write an application with mutable, shared state. First, we define our state and create our handler:

```rust
use actix_web::{web, App, HttpServer};
use std::sync::Mutex;

struct AppStateWithCounter {
    counter: Mutex<i32>, // <- Mutex is necessary to mutate safely across threads
}

async fn index(data: web::Data<AppStateWithCounter>) -> String {
    let mut counter = data.counter.lock().unwrap(); // <- get counter's MutexGuard
    *counter += 1; // <- access counter inside MutexGuard

    format!("Request number: {counter}") // <- response with count
}
```

and register the data in an `App`:

```rust
#[actix_web::main]
async fn main() -> std::io::Result<()> {
    // Note: web::Data created _outside_ HttpServer::new closure
    let counter = web::Data::new(AppStateWithCounter {
        counter: Mutex::new(0),
    });

    HttpServer::new(move || {
        // move counter into the closure
        App::new()
            .app_data(counter.clone()) // <- register the created data
            .route("/", web::get().to(index))
    })
    .bind(("127.0.0.1", 8080))?
    .run()
    .await
}
```
Key takeaways:

- State initialized inside the closure passed to `HttpServer::new` is local to the worker thread and may become de-synced if modified.
- To achieve globally shared state, it must be created outside of the closure passed to `HttpServer::new` and `moved/cloned` in.

# Using an Application Scope to Compose Applications

The `web::scope()` method allows setting a resource group prefix. This scope represents a resource prefix that will be prepended to all resource patterns added by the resource configuration. This can be used to help mount a set of routes at a different location than the original author intended while still maintaining the same resource names.

For example:

```rust
#[actix_web::main]
async fn main() {
    let scope = web::scope("/users").service(show_users);
    App::new().service(scope);
}
```

In the above example, the show_users route will have an effective route pattern of `/users/show` instead of `/show` because the application's scope argument will be prepended to the pattern. The route will then only match if the URL path is `/users/show`, and when the `HttpRequest.url_for()` function is called with the route name show_users, it will generate a URL with that same path.

# Application guards and virtual hosting

The `web::scope()` method allows setting a resource group prefix. This scope represents a resource prefix that will be prepended to all resource patterns added by the resource configuration. This can be used to help mount a set of routes at a different location than the original author intended while still maintaining the same resource names.

For example:

```rust
#[actix_web::main]
async fn main() {
    let scope = web::scope("/users").service(show_users);
    App::new().service(scope);
}
```

In the above example, the show_users route will have an effective route pattern of `/users/show` instead of `/show` because the application's scope argument will be prepended to the pattern. The route will then only match if the URL path is `/users/show`, and when the `HttpRequest.url_for()` function is called with the route name show_users, it will generate a URL with that same path.