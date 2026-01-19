// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Vascular Surgery Library',
  tagline: 'A focused medical learning library',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'abdelfatahfm65',
  projectName: 'vascular-surgery-library',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',

          // لو تحب تخلي المكتبة تفتح من الصفحة الرئيسية بدل /docs
          // routeBasePath: '/',

          // شيل روابط "Edit this page"
          editUrl: undefined,
        },

        // اقفل الـ Blog بالكامل عشان يختفي من الموبايل والنافبار
        blog: false,

        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig: ({
    image: 'img/docusaurus-social-card.jpg',

    colorMode: {
      respectPrefersColorScheme: true,
      disableSwitch: false, // خلي زر الـ Dark/Light موجود (مفيد للقراءة)
    },

    navbar: {
      title: 'Vascular Library',
      logo: {
        alt: 'Vascular Library',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Library',
        },
        // شيلنا Blog و GitHub من هنا
      ],
    },

    // Footer: نظّفه وخليه بسيط (مكتبة مش موقع تسويق)
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Library',
          items: [
            { label: 'Introduction', to: '/docs/intro' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Vascular Surgery Library`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  }),
};

export default config;
