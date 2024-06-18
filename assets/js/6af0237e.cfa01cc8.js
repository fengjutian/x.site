"use strict";(self.webpackChunkx_site=self.webpackChunkx_site||[]).push([[1099],{448:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>r,default:()=>a,frontMatter:()=>i,metadata:()=>t,toc:()=>o});var l=n(4848),c=n(8453);const i={sidebar_position:1},r="\u5c06C/C++\u6a21\u5757\u7f16\u8bd1\u5230WebAssembly",t={id:"WebAssembly/compileModule/cpp",title:"\u5c06C/C++\u6a21\u5757\u7f16\u8bd1\u5230WebAssembly",description:"\u5f53\u4f60\u7528 C/C++ \u7b49\u8bed\u8a00\u7f16\u5199\u4e86\u4e00\u4e2a\u65b0\u7684\u4ee3\u7801\u6a21\u5757\u65f6\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 Emscripten \u7b49\u5de5\u5177\u5c06\u5176\u7f16\u8bd1\u6210 WebAssembly\u3002\u8ba9\u6211\u4eec\u770b\u770b\u5b83\u662f\u5982\u4f55\u5de5\u4f5c\u7684\u3002",source:"@site/docs/WebAssembly/compileModule/cpp.md",sourceDirName:"WebAssembly/compileModule",slug:"/WebAssembly/compileModule/cpp",permalink:"/x.site/docs/WebAssembly/compileModule/cpp",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/WebAssembly/compileModule/cpp.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"WebAssemblySidebar",previous:{title:"\u7f16\u8bd1\u6a21\u5757",permalink:"/x.site/docs/category/\u7f16\u8bd1\u6a21\u5757"},next:{title:"\u5c06\u73b0\u6709\u7684 C \u6a21\u5757\u7f16\u8bd1\u4e3a WebAssembly",permalink:"/x.site/docs/WebAssembly/compileModule/compileExiste"}},d={},o=[{value:"\u521b\u5efa HTML \u548c JavaScript",id:"\u521b\u5efa-html-\u548c-javascript",level:2}];function h(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.h1,{id:"\u5c06cc\u6a21\u5757\u7f16\u8bd1\u5230webassembly",children:"\u5c06C/C++\u6a21\u5757\u7f16\u8bd1\u5230WebAssembly"}),"\n",(0,l.jsx)(s.p,{children:"\u5f53\u4f60\u7528 C/C++ \u7b49\u8bed\u8a00\u7f16\u5199\u4e86\u4e00\u4e2a\u65b0\u7684\u4ee3\u7801\u6a21\u5757\u65f6\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 Emscripten \u7b49\u5de5\u5177\u5c06\u5176\u7f16\u8bd1\u6210 WebAssembly\u3002\u8ba9\u6211\u4eec\u770b\u770b\u5b83\u662f\u5982\u4f55\u5de5\u4f5c\u7684\u3002"}),"\n",(0,l.jsx)(s.h1,{id:"emscripten-\u73af\u5883\u8bbe\u7f6e",children:"Emscripten \u73af\u5883\u8bbe\u7f6e"}),"\n",(0,l.jsxs)(s.p,{children:["\u4f7f\u7528\u4ee5\u4e0b\u8bf4\u660e\u83b7\u53d6 Emscripten SDK\uff1a\n",(0,l.jsx)(s.a,{href:"https://emscripten.org/docs/getting_started/downloads.html",children:"https://emscripten.org/docs/getting_started/downloads.html"})]}),"\n",(0,l.jsx)(s.p,{children:(0,l.jsx)(s.img,{alt:"Alt text",src:n(9528).A+"",width:"1213",height:"880"})}),"\n",(0,l.jsx)(s.h1,{id:"\u7f16\u8bd1\u793a\u4f8b",children:"\u7f16\u8bd1\u793a\u4f8b"}),"\n",(0,l.jsx)(s.p,{children:"\u73af\u5883\u642d\u5efa\u597d\u540e\uff0c\u6211\u4eec\u6765\u770b\u770b\u5982\u4f55\u4f7f\u7528\u5b83\u6765\u7f16\u8bd1\u4e00\u4e2a C \u793a\u4f8b\u5230 Wasm\u3002\u4f7f\u7528 Emscripten \u8fdb\u884c\u7f16\u8bd1\u65f6\uff0c\u6709\u8bb8\u591a\u9009\u9879\u53ef\u7528\uff0c\u4f46\u6211\u4eec\u5c06\u4ecb\u7ecd\u7684\u4e3b\u8981\u4e24\u79cd\u573a\u666f\u662f\uff1a"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsx)(s.li,{children:"\u7f16\u8bd1\u4e3a Wasm \u5e76\u521b\u5efa HTML \u6765\u8fd0\u884c\u6211\u4eec\u7684\u4ee3\u7801\uff0c\u4ee5\u53ca\u5728 Web \u73af\u5883\u4e2d\u8fd0\u884c Wasm \u6240\u9700\u7684\u6240\u6709 JavaScript\u4ee3\u7801\u3002"}),"\n",(0,l.jsx)(s.li,{children:"\u7f16\u8bd1\u4e3a Wasm \u5e76\u521b\u5efa JavaScript\u3002"}),"\n"]}),"\n",(0,l.jsx)(s.h2,{id:"\u521b\u5efa-html-\u548c-javascript",children:"\u521b\u5efa HTML \u548c JavaScript"}),"\n",(0,l.jsx)(s.p,{children:"\u8fd9\u662f\u6211\u4eec\u5c06\u8981\u7814\u7a76\u7684\u6700\u7b80\u5355\u7684\u60c5\u51b5\uff0c\u901a\u8fc7\u5b83\uff0c\u4f60\u53ef\u4ee5\u8ba9 emscripten \u751f\u6210\u5728\u6d4f\u89c8\u5668\u4e2d\u8fd0\u884c\u4ee3\u7801\u6240\u9700\u7684\u4e00\u5207\uff0c\u4f5c\u4e3a WebAssembly\u3002"}),"\n",(0,l.jsxs)(s.ol,{children:["\n",(0,l.jsx)(s.li,{children:"\u9996\u5148\uff0c\u6211\u4eec\u9700\u8981\u4e00\u4e2a\u793a\u4f8b\u6765\u7f16\u8bd1\u3002\u590d\u5236\u4ee5\u4e0b\u7b80\u5355\u7684 C \u793a\u4f8b\uff0c\u5e76\u5c06\u5176\u4fdd\u5b58\u5728\u672c\u5730\u9a71\u52a8\u5668\u4e0a\u65b0\u76ee\u5f55\u4e2d\u8c03\u7528 hello.c \u7684\u6587\u4ef6\u4e2d\uff1a"}),"\n"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-c++",children:'#include <stdio.h>\n\nint main() {\n    printf("Hello World\\n");\n    return 0;\n}\n\n'})}),"\n",(0,l.jsxs)(s.ol,{start:"2",children:["\n",(0,l.jsx)(s.li,{children:"\u73b0\u5728\uff0c\u4f7f\u7528\u7528\u4e8e\u8fdb\u5165 Emscripten \u7f16\u8bd1\u5668\u73af\u5883\u7684\u7ec8\u7aef\u7a97\u53e3\uff0c\u5bfc\u822a\u5230 hello.c \u4e0e\u6587\u4ef6\u76f8\u540c\u7684\u76ee\u5f55\uff0c\u7136\u540e\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"}),"\n"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"emcc hello.c -o hello.html\n"})}),"\n",(0,l.jsx)(s.p,{children:"\u6211\u4eec\u968f\u547d\u4ee4\u4f20\u5165\u7684\u9009\u9879\u5982\u4e0b\uff1a"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:[(0,l.jsx)(s.code,{children:"-o hello.html"})," \u2014 \u6307\u5b9a\u6211\u4eec\u5e0c\u671b Emscripten \u751f\u6210\u4e00\u4e2a HTML \u9875\u9762\u6765\u8fd0\u884c\u6211\u4eec\u7684\u4ee3\u7801\uff08\u4ee5\u53ca\u8981\u4f7f\u7528\u7684\u6587\u4ef6\u540d\uff09\uff0c\u4ee5\u53ca Wasm \u6a21\u5757\u548c JavaScript\u201c\u80f6\u6c34\u201d\u4ee3\u7801\u6765\u7f16\u8bd1\u548c\u5b9e\u4f8b\u5316 Wasm\uff0c\u4ee5\u4fbf\u5b83\u53ef\u4ee5\u5728 Web \u73af\u5883\u4e2d\u4f7f\u7528\u3002"]}),"\n"]}),"\n",(0,l.jsx)(s.p,{children:"\u6b64\u65f6\uff0c\u5728\u6e90\u76ee\u5f55\u4e2d\uff0c\u60a8\u5e94\u8be5\u5177\u6709\uff1a"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["\u4e8c\u8fdb\u5236 Wasm \u6a21\u5757\u4ee3\u7801 \uff08 ",(0,l.jsx)(s.code,{children:"hello.wasm"})," \uff09"]}),"\n",(0,l.jsxs)(s.li,{children:["\u4e00\u4e2a JavaScript \u6587\u4ef6\uff0c\u5176\u4e2d\u5305\u542b\u7528\u4e8e\u5728\u672c\u673a C \u51fd\u6570\u548c JavaScript/Wasm \u4e4b\u95f4\u8f6c\u6362\u7684\u7c98\u9644\u4ee3\u7801 \uff08 ",(0,l.jsx)(s.code,{children:"hello.js"})," \uff09"]}),"\n",(0,l.jsxs)(s.li,{children:["\u4e00\u4e2a HTML \u6587\u4ef6\uff0c\u7528\u4e8e\u52a0\u8f7d\u3001\u7f16\u8bd1\u548c\u5b9e\u4f8b\u5316 Wasm \u4ee3\u7801\uff0c\u5e76\u5728\u6d4f\u89c8\u5668\u4e2d\u663e\u793a\u5176\u8f93\u51fa \uff08 ",(0,l.jsx)(s.code,{children:"hello.html"})," \uff09"]}),"\n"]}),"\n",(0,l.jsx)(s.h1,{id:"\u4f7f\u7528\u81ea\u5b9a\u4e49-html-\u6a21\u677f",children:"\u4f7f\u7528\u81ea\u5b9a\u4e49 HTML \u6a21\u677f"}),"\n",(0,l.jsx)(s.p,{children:"\u6709\u65f6\uff0c\u60a8\u9700\u8981\u4f7f\u7528\u81ea\u5b9a\u4e49 HTML \u6a21\u677f\u3002\u8ba9\u6211\u4eec\u770b\u770b\u5982\u4f55\u505a\u5230\u8fd9\u4e00\u70b9\u3002"}),"\n",(0,l.jsxs)(s.ol,{children:["\n",(0,l.jsx)(s.li,{children:"\u9996\u5148\uff0c\u5c06\u4ee5\u4e0b C \u4ee3\u7801\u4fdd\u5b58\u5728\u540d\u4e3a hello2.c \u7684\u6587\u4ef6\u4e2d\uff0c\u5728\u65b0\u76ee\u5f55\u4e2d\uff1a"}),"\n"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-cpp",children:'#include <stdio.h>\n\nint main() {\n    printf("Hello World\\n");\n    return 0;\n}\n\n'})}),"\n",(0,l.jsxs)(s.ol,{start:"2",children:["\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:["\u5728 emsdk \u5b58\u50a8\u5e93\u4e2d\u641c\u7d22\u8be5\u6587\u4ef6 ",(0,l.jsx)(s.code,{children:"shell_minimal.html"})," \u3002\u5c06\u5176\u590d\u5236\u5230\u4e0a\u4e00\u4e2a\u65b0\u76ee\u5f55\u4e2d\u8c03\u7528 ",(0,l.jsx)(s.code,{children:"html_template"})," \u7684\u5b50\u76ee\u5f55\u4e2d\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsx)(s.p,{children:"\u73b0\u5728\u5bfc\u822a\u5230\u60a8\u7684\u65b0\u76ee\u5f55\uff08\u540c\u6837\uff0c\u5728\u60a8\u7684 Emscripten \u7f16\u8bd1\u5668\u73af\u5883\u7ec8\u7aef\u7a97\u53e3\u4e2d\uff09\uff0c\u5e76\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(s.pre,{children:(0,l.jsx)(s.code,{className:"language-bash",children:"emcc -o hello2.html hello2.c -O3 --shell-file html_template/shell_minimal.html\n"})}),"\n",(0,l.jsx)(s.p,{children:"\u8fd9\u6b21\u6211\u4eec\u4f20\u9012\u7684\u9009\u9879\u7565\u6709\u4e0d\u540c\uff1a"}),"\n",(0,l.jsxs)(s.ul,{children:["\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:["\u6211\u4eec\u5df2\u7ecf\u6307\u5b9a ",(0,l.jsx)(s.code,{children:"-o hello2.html"})," \u4e86 \uff0c\u8fd9\u610f\u5473\u7740\u7f16\u8bd1\u5668\u4ecd\u5c06\u8f93\u51fa JavaScript \u80f6\u6c34\u4ee3\u7801\u548c ",(0,l.jsx)(s.code,{children:".html"})," ."]}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:["\u6211\u4eec\u6307\u5b9a ",(0,l.jsx)(s.code,{children:"-O3"})," \u4e86 \uff0c\u7528\u4e8e\u4f18\u5316\u4ee3\u7801\u3002Emcc \u5177\u6709\u4e0e\u4efb\u4f55\u5176\u4ed6 C \u7f16\u8bd1\u5668\u4e00\u6837\u7684\u4f18\u5316\u7ea7\u522b\uff0c\u5305\u62ec\uff1a ",(0,l.jsx)(s.code,{children:"-O0"})," \uff08\u65e0\u4f18\u5316\uff09\u3001 ",(0,l.jsx)(s.code,{children:"-O1"})," \u3001\u3001 ",(0,l.jsx)(s.code,{children:"-Os"})," \u3001 ",(0,l.jsx)(s.code,{children:"-Oz -Og -O2"})," \u3001\u548c ",(0,l.jsx)(s.code,{children:"-O3"})," \u3002 ",(0,l.jsx)(s.code,{children:"-O3"})," \u662f\u53d1\u5e03\u7248\u672c\u7684\u826f\u597d\u8bbe\u7f6e\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(s.li,{children:["\n",(0,l.jsxs)(s.p,{children:["\u6211\u4eec\u8fd8\u6307\u5b9a ",(0,l.jsx)(s.code,{children:"--shell-file html_template/shell_minimal.html"})," \u4e86 \u2014 \u8fd9\u63d0\u4f9b\u4e86\u8981\u7528\u4e8e\u521b\u5efa\u5c06\u8fd0\u884c\u793a\u4f8b\u7684 HTML \u7684 HTML \u6a21\u677f\u7684\u8def\u5f84\u3002"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(s.ol,{start:"4",children:["\n",(0,l.jsxs)(s.li,{children:["\u73b0\u5728\u8ba9\u6211\u4eec\u8fd0\u884c\u8fd9\u4e2a\u4f8b\u5b50\u3002\u4e0a\u9762\u7684\u547d\u4ee4\u5c06\u751f\u6210 ",(0,l.jsx)(s.code,{children:"hello2.html"})," \uff0c\u5b83\u5c06\u5177\u6709\u4e0e\u6a21\u677f\u5927\u81f4\u76f8\u540c\u7684\u5185\u5bb9\uff0c\u5e76\u6dfb\u52a0\u4e00\u4e9b\u80f6\u6c34\u4ee3\u7801\u4ee5\u52a0\u8f7d\u751f\u6210\u7684 Wasm\u3001\u8fd0\u884c\u5b83\u7b49\u3002\u5728\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00\u5b83\uff0c\u60a8\u5c06\u770b\u5230\u4e0e\u4e0a\u4e00\u4e2a\u793a\u4f8b\u5927\u81f4\u76f8\u540c\u7684\u8f93\u51fa\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(s.p,{children:["\u539f\u6587\uff1a",(0,l.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/WebAssembly/C_to_wasm",children:"https://developer.mozilla.org/en-US/docs/WebAssembly/C_to_wasm"})]})]})}function a(e={}){const{wrapper:s}={...(0,c.R)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},9528:(e,s,n)=>{n.d(s,{A:()=>l});const l=n.p+"assets/images/image-2c0fd156ecf6f94cf9e92835b552cd9f.png"},8453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>t});var l=n(6540);const c={},i=l.createContext(c);function r(e){const s=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),l.createElement(i.Provider,{value:s},e.children)}}}]);