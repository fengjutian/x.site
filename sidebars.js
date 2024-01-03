// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        'tutorial-basics/create-a-document',
      ],
    },
  ],
  'actixSidebar': [
    'actix/basics/Welcom',
    {
      type: 'category',
      label: '基础',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        'actix/basics/GettingStared',
        'actix/basics/Application',
        'actix/basics/Server',
        'actix/basics/Extraction',
        'actix/basics/Handlers'
      ],
    },
    {
      type: 'category',
      label: '进阶',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        'actix/advanced/Errors',
        'actix/advanced/URL-Dispatch',
        'actix/advanced/Requests',
        'actix/advanced/Responses',
        'actix/advanced/Testing',
        'actix/advanced/Middleware',
        'actix/advanced/Static-Files'
      ],
    },
  ],
  'SeaORMSidebar' : [
    'SeaORM/introduction',
  ],
  'javaSidebar' : [
    'java/intro',
  ],
  'SpringBootSidebar' : [
    'SpringBoot/intro',
  ],
  'WebAssemblySidebar' : [
    {
      type: 'category',
      label: '编译模块',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        'WebAssembly/compileModule/cpp',
        'WebAssembly/compileModule/compileExiste',
      ],
    },
    'WebAssembly/intro',
  ],
  'C2C++Sidebar' : [
    'C2C++/intro',
  ],
  'WebGLSidebar' : [
    'WebGL/intro',
  ],
  'PythonSidebar' : [
    'python/intro',
  ],
  'DeepLearnSidebar' : [
    'deeplearn/intro',
  ],
  'TypeScriptSidebar' : [
    'TypeScript/intro',
  ],
  'NextJsSidebar': [
    {
      type: 'category',
      label: '开始',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        'nextjs/GettingStared/Installation',
        'nextjs/GettingStared/ProjectStructure'
      ],
    },
    'nextjs/intro'
  ]
};

export default sidebars;
