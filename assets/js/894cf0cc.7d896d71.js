"use strict";(self.webpackChunkx_site=self.webpackChunkx_site||[]).push([[3147],{9057:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var i=s(5893),n=s(1151);const a={sidebar_position:3},o="Application",r={id:"actix/basics/Application",title:"Application",description:"actix-web provides various primitives to build web servers and applications with Rust. It provides routing, middleware, pre-processing of requests, post-processing of responses, etc.",source:"@site/docs/actix/basics/Application.md",sourceDirName:"actix/basics",slug:"/actix/basics/Application",permalink:"/x.site/docs/actix/basics/Application",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/actix/basics/Application.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"actixSidebar",previous:{title:"\u5f00\u59cb",permalink:"/x.site/docs/actix/basics/GettingStared"},next:{title:"Server",permalink:"/x.site/docs/actix/basics/Server"}},p={},c=[];function l(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"application",children:"Application"}),"\n",(0,i.jsx)(t.p,{children:"actix-web provides various primitives to build web servers and applications with Rust. It provides routing, middleware, pre-processing of requests, post-processing of responses, etc."}),"\n",(0,i.jsx)(t.p,{children:"All actix-web servers are built around the App instance. It is used for registering routes for resources and middleware. It also stores application state shared across all handlers within the same scope."}),"\n",(0,i.jsx)(t.p,{children:'An application\'s scope acts as a namespace for all routes, i.e. all routes for a specific application scope have the same url path prefix. The application prefix always contains a leading "/" slash. If a supplied prefix does not contain leading slash, it is automatically inserted. The prefix should consist of value path segments.'}),"\n",(0,i.jsx)(t.p,{children:"For an application with scope /app, any request with the paths /app, /app/, or /app/test would match; however, the path /application would not match."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:'use actix_web::{web, App, HttpServer, Responder};\n\nasync fn index() -> impl Responder {\n    "Hello world!"\n}\n\n#[actix_web::main]\nasync fn main() -> std::io::Result<()> {\n    HttpServer::new(|| {\n        App::new().service(\n            // prefixes all resources and routes attached to it...\n            web::scope("/app")\n                // ...so this handles requests for `GET /app/index.html`\n                .route("/index.html", web::get().to(index)),\n        )\n    })\n    .bind(("127.0.0.1", 8080))?\n    .run()\n    .await\n}\n'})})]})}function d(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>r,a:()=>o});var i=s(7294);const n={},a=i.createContext(n);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);