const zh = require("./lang/zh-CN");
const en = require("./lang/en-US");

const { getChildren } = require("./util/helper");

module.exports = {
  dest: "./dist",
  theme: "book",
  plugins: {
    "vuepress-plugin-smooth-scroll": true,
    "@vuepress/back-to-top": true,
    redirect: {
      redirectors: [
        {
          base: "/degree/phd/meeting",
          storage: true,
          alternative: [
            getChildren("site", "degree/phd/meeting")[0]
              .split("/")
              .pop(),
          ],
        },
      ],
    },
    // "vuepress-plugin-clean-urls": {
    //   normalSuffix: "/",
    //   indexSuffix: "/",
    //   notFoundPath: "/" + getChildren("site", "degree/phd/meeting")[0],
    // },
  },
  markdown: {
    extendMarkdown: (md) => {
      md.use(require("markdown-it-task-lists"))
        .use(require("markdown-it-footnote"))
        .use(require("markdown-it-imsize"));
    },
  },
  locales: {
    "/zh/": zh.locales,
    "/": en.locales,
  },
  themeConfig: {
    docsDir: "site",
    sidebar: "auto",
    sidebarDepth: 1,
    logo: "/assets/img/logo.svg",
    locales: {
      "/": en.themeConfig,
      "/zh/": zh.themeConfig,
    },
  },
};
