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
  ]
};

export default sidebars;
