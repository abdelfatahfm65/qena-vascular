// @ts-check
import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Vascular Surgery Library",
  tagline: "A focused medical learning library",
  favicon: "img/Faviconn.png",

  future: {
    v4: true,
  },

  // مهم: ده بيتحدد لما تنشر على Vercel/GitHub Pages
  url: "https://your-docusaurus-site.example.com",
  baseUrl: "/",

  organizationName: "abdelfatahfm65",
  projectName: "vascular-surgery-library",

  onBrokenLinks: "throw",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  // ✅ أهم سطر عشان Supabase config يشتغل
  scripts: ["/config.js"],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // routeBasePath: '/', // لو عايز docs يبقى هو الصفحة الرئيسية
          editUrl: undefined,
        },

        blog: false,

        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  themeConfig: {
    image: "img/docusaurus-social-card.jpg",

    colorMode: {
      respectPrefersColorScheme: true,
      disableSwitch: false,
    },

    navbar: {
      title: "Vascular Surgery Library",
      logo: {
        alt: "Vascular Surgery Library",
        src: "img/Qena-vascular-logo.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Library",
        },
        {
          type: "html",
          position: "right",
          value: '<div id="user-menu"></div>',
        },
        
      ],
    },

    footer: {
      style: "dark",
      links: [
        {
          title: "Library",
          items: [{ label: "Introduction", to: "/docs/intro" }],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Vascular Surgery Library`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
