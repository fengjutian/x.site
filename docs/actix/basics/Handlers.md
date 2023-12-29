---
sidebar_position: 6
---

# Handlers
## Request Handlers

A request handler is an async function that accepts zero or more parameters that can be extracted from a request (i.e., impl FromRequest) and returns a type that can be converted into an HttpResponse (i.e., impl Responder).

Request handling happens in two stages. First the handler object is called, returning any object that implements the Responder trait. Then, respond_to() is called on the returned object, converting itself to a HttpResponse or Error.

By default Actix Web provides Responder implementations for some standard types, such as &'static str, String, etc.

For a complete list of implementations, check the Responder documentation.

Examples of valid handlers:

```rust
async fn index(_req: HttpRequest) -> &'static str {
    "Hello world!"
}
```
```rust
async fn index(_req: HttpRequest) -> String {
    "Hello world!".to_owned()
}
```
You can also change the signature to return impl Responder which works well if more complex types are involved.

```rust
async fn index(_req: HttpRequest) -> impl Responder {
    web::Bytes::from_static(b"Hello world!")
}
```
```rust
async fn index(req: HttpRequest) -> Box<Future<Item=HttpResponse, Error=Error>> {
    ...
}
```

## Response with custom type

To return a custom type directly from a handler function, the type needs to implement the Responder trait.

Let's create a response for a custom type that serializes to an application/json response:

```rust
use actix_web::{
    body::BoxBody, http::header::ContentType, HttpRequest, HttpResponse, Responder,
};
use serde::Serialize;

#[derive(Serialize)]
struct MyObj {
    name: &'static str,
}

// Responder
impl Responder for MyObj {
    type Body = BoxBody;

    fn respond_to(self, _req: &HttpRequest) -> HttpResponse<Self::Body> {
        let body = serde_json::to_string(&self).unwrap();

        // Create response and set content type
        HttpResponse::Ok()
            .content_type(ContentType::json())
            .body(body)
    }
}

async fn index() -> impl Responder {
    MyObj { name: "user" }
}
```

## Streaming response body

Response body can be generated asynchronously. In this case, body must implement the stream trait Stream<Item = Result<Bytes, Error>>, i.e.:

```rust
use actix_web::{get, web, App, Error, HttpResponse, HttpServer};
use futures::{future::ok, stream::once};

#[get("/stream")]
async fn stream() -> HttpResponse {
    let body = once(ok::<_, Error>(web::Bytes::from_static(b"test")));

    HttpResponse::Ok()
        .content_type("application/json")
        .streaming(body)
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| App::new().service(stream))
        .bind(("127.0.0.1", 8080))?
        .run()
        .await
}
```

## Different return types (Either)

Sometimes, you need to return different types of responses. For example, you can error check and return errors, return async responses, or any result that requires two different types.

For this case, the Either type can be used. Either allows combining two different responder types into a single type.

```rust
use actix_web::{Either, Error, HttpResponse};

type RegisterResult = Either<HttpResponse, Result<&'static str, Error>>;

async fn index() -> RegisterResult {
    if is_a_variant() {
        // choose Left variant
        Either::Left(HttpResponse::BadRequest().body("Bad data"))
    } else {
        // choose Right variant
        Either::Right(Ok("Hello!"))
    }
}
```