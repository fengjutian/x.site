---
sidebar_position: 4
---

# Server
## HTTP Server

The HttpServer type is responsible for serving HTTP requests.

HttpServer accepts an application factory as a parameter, and the application factory must have Send + Sync boundaries. More about that in the multi-threading section.

To start the web server it must first be bound to a network socket. Use HttpServer::bind() with a socket address tuple or string such as ("127.0.0.1", 8080) or "0.0.0.0:8080". This will fail if the socket is being used by another application.

After the bind is successful, use HttpServer::run() to return a Server instance. The Server must be awaited or spawned to start processing requests and will run until it receives a shutdown signal (such as, by default, a ctrl-c; read more here).

```rust
use actix_web::{web, App, HttpResponse, HttpServer};

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| App::new().route("/", web::get().to(HttpResponse::Ok)))
        .bind(("127.0.0.1", 8080))?
        .run()
        .await
}
```

## 多线程
HttpServer automatically starts a number of HTTP workers, by default this number is equal to the number of physical CPUs in the system. This number can be overridden with the HttpServer::workers() method.

```rust
use actix_web::{web, App, HttpResponse, HttpServer};

#[actix_web::main]
async fn main() {
    HttpServer::new(|| App::new().route("/", web::get().to(HttpResponse::Ok))).workers(4);
    // <- Start 4 workers
}
```

Once the workers are created, they each receive a separate application instance to handle requests. Application state is not shared between the threads, and handlers are free to manipulate their copy of the state with no concurrency concerns.

Application state does not need to be Send or Sync, but application factories must be Send + Sync.

To share state between worker threads, use an Arc/Data. Special care should be taken once sharing and synchronization are introduced. In many cases, performance costs are inadvertently introduced as a result of locking the shared state for modifications.

In some cases these costs can be alleviated using more efficient locking strategies, for example using read/write locks instead of mutexes to achieve non-exclusive locking, but the most performant implementations often tend to be ones in which no locking occurs at all.

Since each worker thread processes its requests sequentially, handlers which block the current thread will cause the current worker to stop processing new requests:

```rust
fn my_handler() -> impl Responder {
    std::thread::sleep(Duration::from_secs(5)); // <-- Bad practice! Will cause the current worker thread to hang!
    "response"
}
```

For this reason, any long, non-cpu-bound operation (e.g. I/O, database operations, etc.) should be expressed as futures or asynchronous functions. Async handlers get executed concurrently by worker threads and thus don't block execution:

```rust
async fn my_handler() -> impl Responder {
    tokio::time::sleep(Duration::from_secs(5)).await; // <-- Ok. Worker thread will handle other requests here
    "response"
}
```

The same limitation applies to extractors as well. When a handler function receives an argument which implements FromRequest, and that implementation blocks the current thread, the worker thread will block when running the handler. Special attention must be given when implementing extractors for this very reason, and they should also be implemented asynchronously where needed.
