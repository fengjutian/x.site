"use strict";(self.webpackChunkx_site=self.webpackChunkx_site||[]).push([[4828],{950:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>r,contentTitle:()=>o,default:()=>a,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var c=n(4848),i=n(8453);const t={sidebar_position:2},o="\u5c06\u73b0\u6709\u7684 C \u6a21\u5757\u7f16\u8bd1\u4e3a WebAssembly",l={id:"WebAssembly/compileModule/compileExiste",title:"\u5c06\u73b0\u6709\u7684 C \u6a21\u5757\u7f16\u8bd1\u4e3a WebAssembly",description:"WebAssembly \u7684\u4e00\u4e2a\u6838\u5fc3\u7528\u4f8b\u662f\u91c7\u7528\u73b0\u6709\u7684 C \u5e93\u751f\u6001\u7cfb\u7edf\uff0c\u5e76\u5141\u8bb8\u5f00\u53d1\u4eba\u5458\u5728 Web \u4e0a\u4f7f\u7528\u5b83\u4eec\u3002",source:"@site/docs/WebAssembly/compileModule/compileExiste.md",sourceDirName:"WebAssembly/compileModule",slug:"/WebAssembly/compileModule/compileExiste",permalink:"/x.site/docs/WebAssembly/compileModule/compileExiste",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/WebAssembly/compileModule/compileExiste.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"WebAssemblySidebar",previous:{title:"\u5c06C/C++\u6a21\u5757\u7f16\u8bd1\u5230WebAssembly",permalink:"/x.site/docs/WebAssembly/compileModule/cpp"},next:{title:"\u8d44\u6599",permalink:"/x.site/docs/WebAssembly/intro"}},r={},d=[];function p(e){const s={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s.h1,{id:"\u5c06\u73b0\u6709\u7684-c-\u6a21\u5757\u7f16\u8bd1\u4e3a-webassembly",children:"\u5c06\u73b0\u6709\u7684 C \u6a21\u5757\u7f16\u8bd1\u4e3a WebAssembly"}),"\n",(0,c.jsx)(s.p,{children:"WebAssembly \u7684\u4e00\u4e2a\u6838\u5fc3\u7528\u4f8b\u662f\u91c7\u7528\u73b0\u6709\u7684 C \u5e93\u751f\u6001\u7cfb\u7edf\uff0c\u5e76\u5141\u8bb8\u5f00\u53d1\u4eba\u5458\u5728 Web \u4e0a\u4f7f\u7528\u5b83\u4eec\u3002\n\u8fd9\u4e9b\u5e93\u901a\u5e38\u4f9d\u8d56\u4e8e C \u7684\u6807\u51c6\u5e93\u3001\u64cd\u4f5c\u7cfb\u7edf\u3001\u6587\u4ef6\u7cfb\u7edf\u548c\u5176\u4ed6\u4e1c\u897f\u3002Emscripten \u63d0\u4f9b\u4e86\u5176\u4e2d\u7684\u5927\u90e8\u5206\u529f\u80fd\uff0c\u5c3d\u7ba1\u5b58\u5728\u4e00\u4e9b\u9650\u5236\u3002\n\u4e3e\u4e2a\u4f8b\u5b50\uff0c\u8ba9\u6211\u4eec\u7f16\u8bd1\u4e00\u4e2a WebP \u5230 Wasm \u7684\u7f16\u7801\u5668\u3002WebP \u7f16\u89e3\u7801\u5668\u7684\u6e90\u4ee3\u7801\u662f\u7528 C \u8bed\u8a00\u7f16\u5199\u7684\uff0c\u53ef\u5728 GitHub \u4e0a\u627e\u5230\uff0c\u4e5f\u53ef\u4ee5\u5728\u4e00\u4e9b\u5e7f\u6cdb\u7684 API \u6587\u6863\u4e2d\u627e\u5230\u3002\u8fd9\u662f\u4e00\u4e2a\u5f88\u597d\u7684\u8d77\u70b9\u3002"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"git clone https://github.com/webmproject/libwebp\n"})}),"\n",(0,c.jsxs)(s.p,{children:["\u8981\u4ece\u7b80\u5355\u5f00\u59cb\uff0c ",(0,c.jsx)(s.code,{children:"WebPGetEncoderVersion()"})," ",(0,c.jsx)(s.code,{children:"encode.h"})," \u901a\u8fc7\u7f16\u5199\u4e00\u4e2a\u540d\u4e3a ",(0,c.jsx)(s.code,{children:"webp.c"}),";"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-c++",children:'#include "emscripten.h"\n#include "src/webp/encode.h"\n\nEMSCRIPTEN_KEEPALIVE\nint version() {\n  return WebPGetEncoderVersion();\n}\n'})}),"\n",(0,c.jsxs)(s.p,{children:["\u8fd9\u662f\u4e00\u4e2a\u5f88\u597d\u7684\u7b80\u5355\u7a0b\u5e8f\uff0c\u53ef\u4ee5\u6d4b\u8bd5\u662f\u5426\u53ef\u4ee5\u83b7\u53d6 libwebp \u7684\u6e90\u4ee3\u7801\u8fdb\u884c\u7f16\u8bd1\uff0c\u56e0\u4e3a\u5b83\u4e0d\u9700\u8981\u4efb\u4f55\u53c2\u6570\u6216\u590d\u6742\u7684\u6570\u636e\u7ed3\u6784\u6765\u8c03\u7528\u6b64\u51fd\u6570\u3002\n\u8981\u7f16\u8bd1\u8fd9\u4e2a\u7a0b\u5e8f\uff0c\u4f60\u9700\u8981\u544a\u8bc9\u7f16\u8bd1\u5668\u5b83\u5728\u54ea\u91cc ",(0,c.jsx)(s.code,{children:"-I"})," \u53ef\u4ee5\u627e\u5230 libwebp \u7684\u5934\u6587\u4ef6\uff0c\u5e76\u4f7f\u7528\u6807\u5fd7\u5c06\u5b83\u9700\u8981\u7684 libwebp \u7684\u6240\u6709 C \u6587\u4ef6\u4f20\u9012\u7ed9\u5b83\u3002\u4e00\u4e2a\u6709\u7528\u7684\u7b56\u7565\u662f\u53ea\u7ed9\u5b83\u6240\u6709\u7684 C \u6587\u4ef6\uff0c\u5e76\u4f9d\u9760\u7f16\u8bd1\u5668\u53bb\u6389\u6240\u6709\u4e0d\u5fc5\u8981\u7684\u4e1c\u897f\u3002\u5b83\u4f3c\u4e4e\u5bf9\u8fd9\u4e2a\u5e93\u975e\u5e38\u6709\u6548\uff1a"]}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-bash",children:"emcc -O3 -s WASM=1 -s EXPORTED_RUNTIME_METHODS='[\"cwrap\"]' \\\n    -I libwebp \\\n    webp.c \\\n    libwebp/src/{dec,dsp,demux,enc,mux,utils}/*.c \\\n    libwebp/sharpyuv/*.c\n"})}),"\n",(0,c.jsx)(s.p,{children:"\u73b0\u5728\uff0c\u60a8\u53ea\u9700\u8981\u4e00\u4e9b HTML \u548c JavaScript \u5373\u53ef\u52a0\u8f7d\u65b0\u6a21\u5757\uff1a"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-html",children:'<script src="./a.out.js"><\/script>\n<script>\n  Module.onRuntimeInitialized = async () => {\n    const api = {\n      version: Module.cwrap("version", "number", []),\n    };\n    console.log(api.version());\n  };\n<\/script>\n'})}),"\n",(0,c.jsxs)(s.p,{children:["\u539f\u6587\uff1a ",(0,c.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/WebAssembly/existing_C_to_wasm",children:"https://developer.mozilla.org/en-US/docs/WebAssembly/existing_C_to_wasm"})]})]})}function a(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,c.jsx)(s,{...e,children:(0,c.jsx)(p,{...e})}):p(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>l});var c=n(6540);const i={},t=c.createContext(i);function o(e){const s=c.useContext(t);return c.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),c.createElement(t.Provider,{value:s},e.children)}}}]);