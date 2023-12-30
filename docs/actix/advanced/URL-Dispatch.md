---
sidebar_position: 2
---

# URL Dispatch

URL dispatch provides a simple way for mapping URLs to handler code using a simple pattern matching language. If one of the patterns matches the path information associated with a request, a particular handler object is invoked.

# Resource configuration

Resource configuration is the act of adding a new resources to an application. A resource has a name, which acts as an identifier to be used for URL generation. The name also allows developers to add routes to existing resources. A resource also has a pattern, meant to match against the PATH portion of a URL (the portion following the scheme and port, e.g. `/foo/bar` in the URL `http://localhost:8080/foo/bar?q=value`). It does not match against the QUERY portion (the portion that follows ?, e.g. q=value in `http://localhost:8080/foo/bar?q=value`).

The `App::route()` method provides simple way of registering routes. This method adds a single route to application routing table. This method accepts a path pattern, HTTP method and a handler function. `route()` method could be called multiple times for the same path, in that case, multiple routes register for the same resource path.

```rust
use actix_web::{web, App, HttpResponse, HttpServer};

async fn index() -> HttpResponse {
    HttpResponse::Ok().body("Hello")
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .route("/", web::get().to(index))
            .route("/user", web::post().to(index))
    })
    .bind(("127.0.0.1", 8080))?
    .run()
    .await
}
```

While `App::route()` provides simple way of registering routes, to access complete resource configuration, a different method has to be used. The `App::service()` method adds a single resource to application routing table. This method accepts a path pattern, guards, and one or more routes.

```rust
use actix_web::{guard, web, App, HttpResponse};

async fn index() -> HttpResponse {
    HttpResponse::Ok().body("Hello")
}

pub fn main() {
    App::new()
        .service(web::resource("/prefix").to(index))
        .service(
            web::resource("/user/{name}")
                .name("user_detail")
                .guard(guard::Header("content-type", "application/json"))
                .route(web::get().to(HttpResponse::Ok))
                .route(web::put().to(HttpResponse::Ok)),
        );
}
```

If a resource does not contain any route or does not have any matching routes, it returns NOT FOUND HTTP response

## Configuring a Route

Resource contains a set of routes. Each route in turn has a set of guards and a handler. New routes can be created with `Resource::route()` method which returns a reference to new Route instance. By default the route does not contain any guards, so matches all requests and the default handler is `HttpNotFound`.

The application routes incoming requests based on route criteria which are defined during resource registration and route registration. Resource matches all routes it contains in the order the routes were registered via `Resource::route()`.

```rust
App::new().service(
    web::resource("/path").route(
        web::route()
            .guard(guard::Get())
            .guard(guard::Header("content-type", "text/plain"))
            .to(HttpResponse::Ok),
    ),
)
```

In this example, `HttpResponse::Ok()` is returned for GET requests if the request contains Content-Type header, the value of this header is text/plain, and path equals to /path.

If a resource can not match any route, a "NOT FOUND" response is returned.

ResourceHandler::route() returns a Route object. Route can be configured with a builder-like pattern. Following configuration methods are available:

- `Route::guard()` registers a new guard. Any number of guards can be registered for each route.
- `Route::method()` registers a method guard. Any number of guards can be registered for each route.
- `Route::to()` registers an async handler function for this route. Only one handler can be registered. Usually handler registration is the last config operation.

# Route matching

The main purpose of route configuration is to match (or not match) the request's path against a URL path pattern. path represents the path portion of the URL that was requested.

The way that actix-web does this is very simple. When a request enters the system, for each resource configuration declaration present in the system, actix checks the request's path against the pattern declared. This checking happens in the order that the routes were declared via App::service() method. If resource can not be found, the default resource is used as the matched resource.

When a route configuration is declared, it may contain route guard arguments. All route guards associated with a route declaration must be true for the route configuration to be used for a given request during a check. If any guard in the set of route guard arguments provided to a route configuration returns false during a check, that route is skipped and route matching continues through the ordered set of routes.

If any route matches, the route matching process stops and the handler associated with the route is invoked. If no route matches after all route patterns are exhausted, a NOT FOUND response get returned.

