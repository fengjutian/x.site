"use strict";(self.webpackChunkx_site=self.webpackChunkx_site||[]).push([[699],{1369:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=t(4848),r=t(8453);const s={sidebar_position:5},i="Extraction",o={id:"actix/basics/Extraction",title:"Extraction",description:"Type-safe information extraction",source:"@site/docs/actix/basics/Extraction.md",sourceDirName:"actix/basics",slug:"/actix/basics/Extraction",permalink:"/x.site/docs/actix/basics/Extraction",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/actix/basics/Extraction.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"actixSidebar",previous:{title:"Server",permalink:"/x.site/docs/actix/basics/Server"},next:{title:"Handlers",permalink:"/x.site/docs/actix/basics/Handlers"}},c={},l=[{value:"Type-safe information extraction",id:"type-safe-information-extraction",level:2},{value:"Path",id:"path",level:2},{value:"Query",id:"query",level:2},{value:"JSON",id:"json",level:2},{value:"URL-Encoded Forms",id:"url-encoded-forms",level:2},{value:"Other",id:"other",level:2},{value:"Application State Extractor",id:"application-state-extractor",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"extraction",children:"Extraction"}),"\n",(0,a.jsx)(n.h2,{id:"type-safe-information-extraction",children:"Type-safe information extraction"}),"\n",(0,a.jsx)(n.p,{children:"Actix Web provides a facility for type-safe request information access called extractors (i.e., impl FromRequest). There are lots of built-in extractor implementations (see implementors)."}),"\n",(0,a.jsx)(n.p,{children:"An extractor can be accessed as an argument to a handler function. Actix Web supports up to 12 extractors per handler function. Argument position does not matter."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-rust",children:'async fn index(path: web::Path<(String, String)>, json: web::Json<MyInfo>) -> impl Responder {\n    let path = path.into_inner();\n    format!("{} {} {} {}", path.0, path.1, json.id, json.username)\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"path",children:"Path"}),"\n",(0,a.jsx)(n.p,{children:'Path provides information that is extracted from the request\'s path. Parts of the path that are extractable are called "dynamic segments" and are marked with curly braces. You can deserialize any variable segment from the path.'}),"\n",(0,a.jsxs)(n.p,{children:["For instance, for resource that registered for the ",(0,a.jsx)(n.code,{children:"/users/{user_id}/{friend}"})," path, two segments could be deserialized, ",(0,a.jsx)(n.code,{children:"user_id"})," and friend. These segments could be extracted as a tuple in the order they are declared (e.g., ",(0,a.jsx)(n.code,{children:"Path<(u32, String)>"}),")."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-rust",children:'use actix_web::{get, web, App, HttpServer, Result};\n\n/// extract path info from "/users/{user_id}/{friend}" url\n/// {user_id} - deserializes to a u32\n/// {friend} - deserializes to a String\n#[get("/users/{user_id}/{friend}")] // <- define path parameters\nasync fn index(path: web::Path<(u32, String)>) -> Result<String> {\n    let (user_id, friend) = path.into_inner();\n    Ok(format!("Welcome {}, user_id {}!", friend, user_id))\n}\n\n#[actix_web::main]\nasync fn main() -> std::io::Result<()> {\n    HttpServer::new(|| App::new().service(index))\n        .bind(("127.0.0.1", 8080))?\n        .run()\n        .await\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"It is also possible to extract path information to a type that implements the Deserialize trait from serde by matching dynamic segment names with field names. Here is an equivalent example that uses a deserialization struct using serde (make sure to enable its derive feature) instead of a tuple type."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-rust",children:'use actix_web::{get, web, Result};\nuse serde::Deserialize;\n\n#[derive(Deserialize)]\nstruct Info {\n    user_id: u32,\n    friend: String,\n}\n\n/// extract path info using serde\n#[get("/users/{user_id}/{friend}")] // <- define path parameters\nasync fn index(info: web::Path<Info>) -> Result<String> {\n    Ok(format!(\n        "Welcome {}, user_id {}!",\n        info.friend, info.user_id\n    ))\n}\n\n#[actix_web::main]\nasync fn main() -> std::io::Result<()> {\n    use actix_web::{App, HttpServer};\n\n    HttpServer::new(|| App::new().service(index))\n        .bind(("127.0.0.1", 8080))?\n        .run()\n        .await\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["As a ",(0,a.jsx)(n.code,{children:"non-type-safe"})," alternative, it's also possible to query (see match_info docs) the request for path parameters by name within a handler:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-rust",children:'#[get("/users/{user_id}/{friend}")] // <- define path parameters\nasync fn index(req: HttpRequest) -> Result<String> {\n    let name: String = req.match_info().get("friend").unwrap().parse().unwrap();\n    let userid: i32 = req.match_info().query("user_id").parse().unwrap();\n\n    Ok(format!("Welcome {}, user_id {}!", name, userid))\n}\n\n#[actix_web::main]\nasync fn main() -> std::io::Result<()> {\n    use actix_web::{App, HttpServer};\n\n    HttpServer::new(|| App::new().service(index))\n        .bind(("127.0.0.1", 8080))?\n        .run()\n        .await\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"query",children:"Query"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"Query<T>"})," type provides extraction functionality for the request's query parameters. Underneath it uses ",(0,a.jsx)(n.code,{children:"serde_urlencoded"})," crate."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-rust",children:'use actix_web::{get, web, App, HttpServer};\nuse serde::Deserialize;\n\n#[derive(Deserialize)]\nstruct Info {\n    username: String,\n}\n\n// this handler gets called if the query deserializes into `Info` successfully\n// otherwise a 400 Bad Request error response is returned\n#[get("/")]\nasync fn index(info: web::Query<Info>) -> String {\n    format!("Welcome {}!", info.username)\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"json",children:"JSON"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"Json<T>"})," allows deserialization of a request body into a struct. To extract typed information from a request's body, the type T must implement ",(0,a.jsx)(n.code,{children:"serde::Deserialize"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-rust",children:'use actix_web::{post, web, App, HttpServer, Result};\nuse serde::Deserialize;\n\n#[derive(Deserialize)]\nstruct Info {\n    username: String,\n}\n\n// deserialize `Info` from request\'s body\n#[post("/submit")]\nasync fn submit(info: web::Json<Info>) -> Result<String> {\n    Ok(format!("Welcome {}!", info.username))\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Some extractors provide a way to configure the extraction process. To configure an extractor, pass its configuration object to the resource's ",(0,a.jsx)(n.code,{children:".app_data()"})," method. In the case of Json extractor it returns a JsonConfig. You can configure the maximum size of the JSON payload as well as a custom error handler function."]}),"\n",(0,a.jsx)(n.p,{children:"The following example limits the size of the payload to 4kb and uses a custom error handler."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-rust",children:'use actix_web::{error, web, App, HttpResponse, HttpServer, Responder};\nuse serde::Deserialize;\n\n#[derive(Deserialize)]\nstruct Info {\n    username: String,\n}\n\n// deserialize `Info` from request\'s body, max payload size is 4kb\nasync fn index(info: web::Json<Info>) -> impl Responder {\n    format!("Welcome {}!", info.username)\n}\n\n#[actix_web::main]\nasync fn main() -> std::io::Result<()> {\n    HttpServer::new(|| {\n        let json_config = web::JsonConfig::default()\n            .limit(4096)\n            .error_handler(|err, _req| {\n                // create custom error response\n                error::InternalError::from_response(err, HttpResponse::Conflict().finish())\n                    .into()\n            });\n\n        App::new().service(\n            web::resource("/")\n                // change json extractor configuration\n                .app_data(json_config)\n                .route(web::post().to(index)),\n        )\n    })\n    .bind(("127.0.0.1", 8080))?\n    .run()\n    .await\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"url-encoded-forms",children:"URL-Encoded Forms"}),"\n",(0,a.jsxs)(n.p,{children:["A ",(0,a.jsx)(n.code,{children:"URL-encoded"})," form body can be extracted to a struct, much like ",(0,a.jsx)(n.code,{children:"Json<T>"}),". This type must implement ",(0,a.jsx)(n.code,{children:"serde::Deserialize"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"FormConfig allows configuring the extraction process."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-rust",children:'use actix_web::{post, web, App, HttpServer, Result};\nuse serde::Deserialize;\n\n#[derive(Deserialize)]\nstruct FormData {\n    username: String,\n}\n\n// extract form data using serde\n// this handler gets called only if the content type is *x-www-form-urlencoded*\n// and the content of the request could be deserialized to a `FormData` struct\n#[post("/")]\nasync fn index(form: web::Form<FormData>) -> Result<String> {\n    Ok(format!("Welcome {}!", form.username))\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"other",children:"Other"}),"\n",(0,a.jsx)(n.p,{children:"Actix Web also provides many other extractors, here's a few important ones:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Data - For accessing pieces of application state."}),"\n",(0,a.jsx)(n.li,{children:"HttpRequest - HttpRequest is itself an extractor, in case you need access to other parts of the request."}),"\n",(0,a.jsx)(n.li,{children:"String - You can convert a request's payload to a String. An example is available in the rustdoc."}),"\n",(0,a.jsx)(n.li,{children:"Bytes - You can convert a request's payload into Bytes. An example is available in the rustdoc."}),"\n",(0,a.jsx)(n.li,{children:"Payload - Low-level payload extractor primarily for building other extractors. An example is available in the rustdoc."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"application-state-extractor",children:"Application State Extractor"}),"\n",(0,a.jsx)(n.p,{children:"Application state is accessible from the handler with the web::Data extractor; however, state is accessible as a read-only reference. If you need mutable access to state, it must be implemented."}),"\n",(0,a.jsx)(n.p,{children:"Here is an example of a handler that stores the number of processed requests:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-rust",children:'use actix_web::{web, App, HttpServer, Responder};\nuse std::cell::Cell;\n\n#[derive(Clone)]\nstruct AppState {\n    count: Cell<usize>,\n}\n\nasync fn show_count(data: web::Data<AppState>) -> impl Responder {\n    format!("count: {}", data.count.get())\n}\n\nasync fn add_one(data: web::Data<AppState>) -> impl Responder {\n    let count = data.count.get();\n    data.count.set(count + 1);\n\n    format!("count: {}", data.count.get())\n}\n\n#[actix_web::main]\nasync fn main() -> std::io::Result<()> {\n    let data = AppState {\n        count: Cell::new(0),\n    };\n\n    HttpServer::new(move || {\n        App::new()\n            .app_data(web::Data::new(data.clone()))\n            .route("/", web::to(show_count))\n            .route("/add", web::to(add_one))\n    })\n    .bind(("127.0.0.1", 8080))?\n    .run()\n    .await\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Although this handler will work, data.count will only count the number of requests handled by each worker thread. To count the number of total requests across all threads, one should use shared Arc and atomics."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-rust",children:'use actix_web::{get, web, App, HttpServer, Responder};\nuse std::{\n    cell::Cell,\n    sync::atomic::{AtomicUsize, Ordering},\n    sync::Arc,\n};\n\n#[derive(Clone)]\nstruct AppState {\n    local_count: Cell<usize>,\n    global_count: Arc<AtomicUsize>,\n}\n\n#[get("/")]\nasync fn show_count(data: web::Data<AppState>) -> impl Responder {\n    format!(\n        "global_count: {}\\nlocal_count: {}",\n        data.global_count.load(Ordering::Relaxed),\n        data.local_count.get()\n    )\n}\n\n#[get("/add")]\nasync fn add_one(data: web::Data<AppState>) -> impl Responder {\n    data.global_count.fetch_add(1, Ordering::Relaxed);\n\n    let local_count = data.local_count.get();\n    data.local_count.set(local_count + 1);\n\n    format!(\n        "global_count: {}\\nlocal_count: {}",\n        data.global_count.load(Ordering::Relaxed),\n        data.local_count.get()\n    )\n}\n\n#[actix_web::main]\nasync fn main() -> std::io::Result<()> {\n    let data = AppState {\n        local_count: Cell::new(0),\n        global_count: Arc::new(AtomicUsize::new(0)),\n    };\n\n    HttpServer::new(move || {\n        App::new()\n            .app_data(web::Data::new(data.clone()))\n            .service(show_count)\n            .service(add_one)\n    })\n    .bind(("127.0.0.1", 8080))?\n    .run()\n    .await\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Note: If you want the entire state to be shared across all threads, use web::Data and app_data as described in Shared Mutable State."}),"\n",(0,a.jsx)(n.p,{children:"Be careful when using blocking synchronization primitives like Mutex or RwLock within your app state. Actix Web handles requests asynchronously. It is a problem if the critical section in your handler is too big or contains an .await point. If this is a concern, we would advise you to also read Tokio's advice on using blocking Mutex in async code."})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var a=t(6540);const r={},s=a.createContext(r);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);