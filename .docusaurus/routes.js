import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
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
    component: ComponentCreator('/', 'f9c'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'ac5'),
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
            path: '/tags/server',
            component: ComponentCreator('/tags/server', 'e9e'),
            exact: true
          },
          {
            path: '/tags/ssh',
            component: ComponentCreator('/tags/ssh', '079'),
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
            component: ComponentCreator('/', '906'),
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
                component: ComponentCreator('/linux/automounting', '591'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/linux/compose-key',
                component: ComponentCreator('/linux/compose-key', '340'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/linux/distraction-free-youtube',
                component: ComponentCreator('/linux/distraction-free-youtube', '2a2'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/linux/fzf-and-arch-software-install',
                component: ComponentCreator('/linux/fzf-and-arch-software-install', 'f73'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/linux/global-playback-control',
                component: ComponentCreator('/linux/global-playback-control', '397'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/linux/managing-dotfiles',
                component: ComponentCreator('/linux/managing-dotfiles', 'ffb'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/linux/passkey-ssh',
                component: ComponentCreator('/linux/passkey-ssh', '3b2'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/linux/Scripting/ArchMaintenance',
                component: ComponentCreator('/linux/Scripting/ArchMaintenance', 'fdd'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/linux/Scripting/barless',
                component: ComponentCreator('/linux/Scripting/barless', 'a51'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/linux/Scripting/ScreenShot',
                component: ComponentCreator('/linux/Scripting/ScreenShot', 'b04'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/linux/sorting-movie-directory',
                component: ComponentCreator('/linux/sorting-movie-directory', 'c1a'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/linux/thunar-text-file',
                component: ComponentCreator('/linux/thunar-text-file', '6a3'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/programming/cpp-version',
                component: ComponentCreator('/programming/cpp-version', '29e'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/programming/ST32-F303RE/GPIO',
                component: ComponentCreator('/programming/ST32-F303RE/GPIO', 'fb9'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/software/Firefox/extensions',
                component: ComponentCreator('/software/Firefox/extensions', '01a'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/software/Firefox/userChrome',
                component: ComponentCreator('/software/Firefox/userChrome', 'e01'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/software/Git/http-to-ssg',
                component: ComponentCreator('/software/Git/http-to-ssg', 'c21'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/software/Git/tips',
                component: ComponentCreator('/software/Git/tips', '449'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', 'ac8'),
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
