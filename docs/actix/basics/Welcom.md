---
sidebar_position: 1
---

<!-- export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
    }}
    onClick={() => {}}>
    {children}
  </span>
);

This is <Highlight color="#25c2a0">Docusaurus green</Highlight> -->


# Welcome

<div title='Actix Web lets you quickly and confidently develop web services in Rust and this guide will get you going in no time.'>
**Actix Web**让你能够快速且自信地在 Rust 中开发 web 服务，而这份指南能让你快速上手。
</div>

<div title='The documentation on this website focuses primarily on the Actix Web framework. For information about the actor framework called Actix, check out the Actix chapter (or the lower level actix API docs). Otherwise, head on to the getting started guide. If you already know your way around and you need specific information you might want to read the Actix Web API docs.'>
该网站上的文档主要专注于 **Actix Web** 框架。关于 Actix 的 actor 框架的信息，请查阅 Actix 章节（或较低级别的 actix API 文档）。或者，请转到入门指南。如果您已经熟悉了相关内容，如果需要具体信息，您可能想阅读 Actix Web API 文档。
</div>

# Actix Web是Crates生态系统的一部分

<div title='Long ago, Actix Web was built on top of the actix actor framework. Now, Actix Web is largely unrelated to the actor framework and is built using a different system. Though actix is still maintained, its usefulness as a general tool is diminishing as the futures and async/await ecosystem matures. At this time, the use of actix is only required for WebSocket endpoints.'>
之前，**Actix Web** 是建立在 actix actor 框架之上的。而现在，Actix Web 在很大程度上与 actor 框架无关，并且使用不同的系统构建。尽管 actix 仍在维护中，但随着 futures 和 async/await 生态系统的成熟，它作为通用工具的影响力正在降低。当前，actix 的常被当做**WebSocket**的客户端使用 。
</div>

<div title="We call Actix Web a powerful and pragmatic framework. For all intents and purposes it's a micro-framework with a few twists. If you are already a Rust programmer you will probably find yourself at home quickly, but even if you are coming from another programming language you should find Actix Web easy to pick up.">
我们认为**Actix Web**是一个强大且实用的框架。从本质上讲，它是一个带有一些特色的微框架。如果你已经是 Rust 程序员，你会很快找到归属感，即使你来自另一种编程语言，你也会发现**Actix Web**非常易于上手。
</div>

<!-- 
An application developed with Actix Web will expose an HTTP server contained within a native executable. You can either put this behind another HTTP server like nginx or serve it up as-is. Even in the complete absence of another HTTP server Actix Web is powerful enough to provide HTTP/1 and HTTP/2 support as well as TLS (HTTPS). This makes it useful for building small services ready for production. -->

使用Actix Web开发的应用程序将公开包含在本机可执行文件中的HTTP服务器。您可以将其放在另一个HTTP服务器（如nginx）后面，也可以按原样提供。即使在完全没有其他HTTP服务器的情况下，Actix Web也足够强大，可以提供HTTP/1和HTTP/2支持以及TLS（HTTPS）。这对于构建可供生产的小型服务非常有用。

<!-- Most importantly: Actix Web runs on Rust 1.59 or later and it works with stable releases. -->
最重要的是：Actix Web运行在Rust 1.59或更高版本上，并且可以使用稳定的版本。