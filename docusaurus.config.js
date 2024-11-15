// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Joris.codes',
  tagline: 'A public second brain',
  favicon: 'img/mrgreen.png',

  // Set the production url of your site here
  url: 'https://jorisvandijk.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/joriscodes/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'jorisvandijk', // Usually your GitHub org/user name.
  projectName: 'joriscodes', // Usually your repo name.
  deploymentBranch: 'main',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://codeberg.org/jorisvandijk/joriscodes/src/branch/main/',
          showLastUpdateAuthor: true, // Show the author's name
          showLastUpdateTime: true,  // Show the last update timestamp
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://codeberg.org/jorisvandijk/joriscodes/src/branch/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/mrgreen.png',
      navbar: {
        title: 'Joris.codes',
        logo: {
          alt: 'Joris.codes Logo',
          src: 'img/mrgreen.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Documentation',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            label: 'Submit an issue',
            href: 'https://codeberg.org/jorisvandijk/joriscodes/issues',
          },
          {
            label: 'Source',
            href: 'https://codeberg.org/jorisvandijk/joriscodes',
          },
          {
            label: 'Licensed under CC BY-SA 4.0',
            href: 'https://creativecommons.org/licenses/by-sa/4.0/',
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Joris van Dijk`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        // Find more at: https://prismjs.com/#supported-languages
        additionalLanguages: ['markdown', 'cpp', 'c', 'bash', 'css'],
      },
    }),
};

export default config;
