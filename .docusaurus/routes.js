import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/joriscodes/__docusaurus/debug',
    component: ComponentCreator('/joriscodes/__docusaurus/debug', 'cbf'),
    exact: true
  },
  {
    path: '/joriscodes/__docusaurus/debug/config',
    component: ComponentCreator('/joriscodes/__docusaurus/debug/config', 'ac5'),
    exact: true
  },
  {
    path: '/joriscodes/__docusaurus/debug/content',
    component: ComponentCreator('/joriscodes/__docusaurus/debug/content', '9f6'),
    exact: true
  },
  {
    path: '/joriscodes/__docusaurus/debug/globalData',
    component: ComponentCreator('/joriscodes/__docusaurus/debug/globalData', '4e8'),
    exact: true
  },
  {
    path: '/joriscodes/__docusaurus/debug/metadata',
    component: ComponentCreator('/joriscodes/__docusaurus/debug/metadata', '5c6'),
    exact: true
  },
  {
    path: '/joriscodes/__docusaurus/debug/registry',
    component: ComponentCreator('/joriscodes/__docusaurus/debug/registry', '916'),
    exact: true
  },
  {
    path: '/joriscodes/__docusaurus/debug/routes',
    component: ComponentCreator('/joriscodes/__docusaurus/debug/routes', 'aaf'),
    exact: true
  },
  {
    path: '/joriscodes/blog',
    component: ComponentCreator('/joriscodes/blog', '656'),
    exact: true
  },
  {
    path: '/joriscodes/blog/archive',
    component: ComponentCreator('/joriscodes/blog/archive', '22b'),
    exact: true
  },
  {
    path: '/joriscodes/blog/authors',
    component: ComponentCreator('/joriscodes/blog/authors', '1ff'),
    exact: true
  },
  {
    path: '/joriscodes/blog/authors/joris',
    component: ComponentCreator('/joriscodes/blog/authors/joris', '90c'),
    exact: true
  },
  {
    path: '/joriscodes/blog/hello-world',
    component: ComponentCreator('/joriscodes/blog/hello-world', 'abf'),
    exact: true
  },
  {
    path: '/joriscodes/blog/tags',
    component: ComponentCreator('/joriscodes/blog/tags', 'd03'),
    exact: true
  },
  {
    path: '/joriscodes/blog/tags/docusaurus',
    component: ComponentCreator('/joriscodes/blog/tags/docusaurus', 'e1a'),
    exact: true
  },
  {
    path: '/joriscodes/',
    component: ComponentCreator('/joriscodes/', '937'),
    routes: [
      {
        path: '/joriscodes/',
        component: ComponentCreator('/joriscodes/', '231'),
        routes: [
          {
            path: '/joriscodes/',
            component: ComponentCreator('/joriscodes/', '4c3'),
            routes: [
              {
                path: '/joriscodes/category/linux',
                component: ComponentCreator('/joriscodes/category/linux', '19f'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/joriscodes/category/programming',
                component: ComponentCreator('/joriscodes/category/programming', '302'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/joriscodes/category/software',
                component: ComponentCreator('/joriscodes/category/software', '087'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/joriscodes/linux/Scripting/arch-maintanence',
                component: ComponentCreator('/joriscodes/linux/Scripting/arch-maintanence', '982'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/joriscodes/linux/thunar-text-file',
                component: ComponentCreator('/joriscodes/linux/thunar-text-file', 'bc4'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/joriscodes/programming/intro',
                component: ComponentCreator('/joriscodes/programming/intro', '890'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/joriscodes/software/Firefox/extensions',
                component: ComponentCreator('/joriscodes/software/Firefox/extensions', '165'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/joriscodes/software/Firefox/userChrome',
                component: ComponentCreator('/joriscodes/software/Firefox/userChrome', '7c1'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/joriscodes/software/Git/http-to-ssg',
                component: ComponentCreator('/joriscodes/software/Git/http-to-ssg', '7b0'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/joriscodes/',
                component: ComponentCreator('/joriscodes/', '4d1'),
                exact: true,
                sidebar: "docsSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
