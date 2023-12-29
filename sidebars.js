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
  ],
};

export default sidebars;
