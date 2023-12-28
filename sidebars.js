// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
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


  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */

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
      ],
    },
  ],
};

export default sidebars;
