---
sidebar_position: 2
---

# 将现有的 C 模块编译为 WebAssembly

WebAssembly 的一个核心用例是采用现有的 C 库生态系统，并允许开发人员在 Web 上使用它们。
这些库通常依赖于 C 的标准库、操作系统、文件系统和其他东西。Emscripten 提供了其中的大部分功能，尽管存在一些限制。
举个例子，让我们编译一个 WebP 到 Wasm 的编码器。WebP 编解码器的源代码是用 C 语言编写的，可在 GitHub 上找到，也可以在一些广泛的 API 文档中找到。这是一个很好的起点。
```bash
git clone https://github.com/webmproject/libwebp
```

要从简单开始， `WebPGetEncoderVersion()` `encode.h` 通过编写一个名为 `webp.c`;

```c++
#include "emscripten.h"
#include "src/webp/encode.h"

EMSCRIPTEN_KEEPALIVE
int version() {
  return WebPGetEncoderVersion();
}
```
这是一个很好的简单程序，可以测试是否可以获取 libwebp 的源代码进行编译，因为它不需要任何参数或复杂的数据结构来调用此函数。
要编译这个程序，你需要告诉编译器它在哪里 `-I` 可以找到 libwebp 的头文件，并使用标志将它需要的 libwebp 的所有 C 文件传递给它。一个有用的策略是只给它所有的 C 文件，并依靠编译器去掉所有不必要的东西。它似乎对这个库非常有效：
```bash
emcc -O3 -s WASM=1 -s EXPORTED_RUNTIME_METHODS='["cwrap"]' \
    -I libwebp \
    webp.c \
    libwebp/src/{dec,dsp,demux,enc,mux,utils}/*.c \
    libwebp/sharpyuv/*.c
```

现在，您只需要一些 HTML 和 JavaScript 即可加载新模块：

```html
<script src="./a.out.js"></script>
<script>
  Module.onRuntimeInitialized = async () => {
    const api = {
      version: Module.cwrap("version", "number", []),
    };
    console.log(api.version());
  };
</script>
```




原文： https://developer.mozilla.org/en-US/docs/WebAssembly/existing_C_to_wasm