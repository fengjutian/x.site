---
sidebar_position: 1
---

# Welcome
## Welcome to Actix

Actix Web 让你能够快速且自信地在 Rust 中开发 web 服务，而这份指南能让你快速上手。

该网站上的文档主要专注于 **Actix Web** 框架。关于 Actix 的 actor 框架的信息，请查阅 Actix 章节（或较低级别的 actix API 文档）。或者，请转到入门指南。如果您已经熟悉了相关内容，如果需要具体信息，您可能想阅读 Actix Web API 文档。

# Actix Web是Crates生态系统的一部分

之前，Actix Web 是建立在 actix actor 框架之上的。而现在，Actix Web 在很大程度上与 actor 框架无关，并且使用不同的系统构建。尽管 actix 仍在维护中，但随着 futures 和 async/await 生态系统的成熟，它作为通用工具的影响力正在降低。当前，actix 的常被当做**WebSocket**的客户端使用 。

We call Actix Web a powerful and pragmatic framework. For all intents and purposes it's a micro-framework with a few twists. If you are already a Rust programmer you will probably find yourself at home quickly, but even if you are coming from another programming language you should find Actix Web easy to pick up.

An application developed with Actix Web will expose an HTTP server contained within a native executable. You can either put this behind another HTTP server like nginx or serve it up as-is. Even in the complete absence of another HTTP server Actix Web is powerful enough to provide HTTP/1 and HTTP/2 support as well as TLS (HTTPS). This makes it useful for building small services ready for production.

Most importantly: Actix Web runs on Rust 1.59 or later and it works with stable releases.