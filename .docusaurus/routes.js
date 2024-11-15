import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '321'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/joris',
    component: ComponentCreator('/blog/authors/joris', '8f9'),
    exact: true
  },
  {
    path: '/blog/hello-world',
    component: ComponentCreator('/blog/hello-world', '69f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '478'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '5de'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '116'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'de4'),
        routes: [
          {
            path: '/tags',
            component: ComponentCreator('/tags', 'ce1'),
            exact: true
          },
          {
            path: '/tags/arch',
            component: ComponentCreator('/tags/arch', '2a3'),
            exact: true
          },
          {
            path: '/tags/c',
            component: ComponentCreator('/tags/c', '681'),
            exact: true
          },
          {
            path: '/tags/dotfiles',
            component: ComponentCreator('/tags/dotfiles', '696'),
            exact: true
          },
          {
            path: '/tags/firefox',
            component: ComponentCreator('/tags/firefox', '1b1'),
            exact: true
          },
          {
            path: '/tags/fzf',
            component: ComponentCreator('/tags/fzf', '15a'),
            exact: true
          },
          {
            path: '/tags/git',
            component: ComponentCreator('/tags/git', 'ff3'),
            exact: true
          },
          {
            path: '/tags/kitty',
            component: ComponentCreator('/tags/kitty', '904'),
            exact: true
          },
          {
            path: '/tags/linux',
            component: ComponentCreator('/tags/linux', '371'),
            exact: true
          },
          {
            path: '/tags/micro',
            component: ComponentCreator('/tags/micro', '21f'),
            exact: true
          },
          {
            path: '/tags/mpv',
            component: ComponentCreator('/tags/mpv', '912'),
            exact: true
          },
          {
            path: '/tags/newsboat',
            component: ComponentCreator('/tags/newsboat', '968'),
            exact: true
          },
          {
            path: '/tags/programming',
            component: ComponentCreator('/tags/programming', '4c2'),
            exact: true
          },
          {
            path: '/tags/scripting',
            component: ComponentCreator('/tags/scripting', '247'),
            exact: true
          },
          {
            path: '/tags/sxhkd',
            component: ComponentCreator('/tags/sxhkd', 'a27'),
            exact: true
          },
          {
            path: '/tags/thunar',
            component: ComponentCreator('/tags/thunar', 'dea'),
            exact: true
          },
          {
            path: '/tags/you-tube',
            component: ComponentCreator('/tags/you-tube', '574'),
            exact: true
          },
          {
            path: '/',
            component: ComponentCreator('/', '39e'),
            routes: [
              {
                path: '/category/linux',
                component: ComponentCreator('/category/linux', '942'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/category/programming',
                component: ComponentCreator('/category/programming', '93f'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/category/software',
                component: ComponentCreator('/category/software', 'fc4'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/linux/automounting',
                component: ComponentCreator('/linux/automounting', '000'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/linux/compose-key',
                component: ComponentCreator('/linux/compose-key', 'c09'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/linux/distraction-free-youtube',
                component: ComponentCreator('/linux/distraction-free-youtube', 'b7e'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/linux/fzf-and-arch-software-install',
                component: ComponentCreator('/linux/fzf-and-arch-software-install', '955'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/linux/global-playback-control',
                component: ComponentCreator('/linux/global-playback-control', 'e6b'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/linux/managing-dotfiles',
                component: ComponentCreator('/linux/managing-dotfiles', '7e9'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/linux/Scripting/ArchMaintenance',
                component: ComponentCreator('/linux/Scripting/ArchMaintenance', '639'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/linux/Scripting/ScreenShot',
                component: ComponentCreator('/linux/Scripting/ScreenShot', 'e6d'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/linux/sorting-movie-directory',
                component: ComponentCreator('/linux/sorting-movie-directory', 'd9c'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/linux/thunar-text-file',
                component: ComponentCreator('/linux/thunar-text-file', 'fd8'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/programming/cpp-version',
                component: ComponentCreator('/programming/cpp-version', 'f98'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/software/Firefox/extensions',
                component: ComponentCreator('/software/Firefox/extensions', 'cd7'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/software/Firefox/userChrome',
                component: ComponentCreator('/software/Firefox/userChrome', 'a7c'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/software/Git/http-to-ssg',
                component: ComponentCreator('/software/Git/http-to-ssg', '1d8'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', '8f3'),
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
