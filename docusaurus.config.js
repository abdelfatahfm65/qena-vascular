// @ts-check
import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Vascular Surgery Library",
  tagline: "A focused medical learning library",
  favicon: "img/Favcon.png",

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

  // ✅ PWA Plugin
  plugins: [
    [
      "@docusaurus/plugin-pwa",
      {
        debug: false,
        offlineModeActivationStrategies: ["appInstalled", "standalone", "queryString"],
        pwaHead: [
          { tagName: "link", rel: "icon", href: "/img/Favcon.png" },
          { tagName: "link", rel: "manifest", href: "/manifest.json" },
          { tagName: "meta", name: "theme-color", content: "#2e7d32" },
          { tagName: "meta", name: "apple-mobile-web-app-capable", content: "yes" },
          { tagName: "meta", name: "apple-mobile-web-app-status-bar-style", content: "default" },
        ],
      },
    ],
  ],

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
        src: "img/Qena-vasc-logo.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Library",
        },
        {
          to: "/exam",
          label: "Comperhensive Exam",
          position: "left",
        },
        {
          type: "doc",
          docId: "vascular-image-gallery",
          label: "Gallery",
          position: "left",
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
      links: [],
      copyright: `
        © ${new Date().getFullYear()} Vascular Surgery Library   
        - Developed by Dr. Abdelfatah Fathy
      `,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
