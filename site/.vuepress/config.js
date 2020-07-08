const glob = require("glob");

// function for loading all MD files in a directory
const getChildren = (parent_path, dir) =>
  glob
    .sync(parent_path + "/" + dir + "/*.md")
    .map((path) => {
      path = path.slice(parent_path.length + 1, -3);
      // remove README
      if (path.endsWith("README")) {
        path = path.slice(0, -6);
      }
      return path;
    })
    .sort()
    .reverse();

module.exports = {
  dest: "./dist",
  theme: "book",
  evergreen: true,
  plugins: {
    // "@vuepress/google-analytics": {
    //   ga: ""
    // },
    "@vuepress/back-to-top": true,
  },
  markdown: {
    extendMarkdown: (md) => {
      md.use(require("markdown-it-task-lists"))
        .use(require("markdown-it-footnote"))
        .use(require("markdown-it-imsize"));
    },
  },
  locales: {
    "/zh/": {
      lang: "zh-CN",
      title: "",
      description: "研究助理，计算机系，诺丁汉大学",
    },
    "/": {
      lang: "en-US",
      title: "",
      description:
        "Research Associate, Computer Science, University of Nottingham",
    },
  },
  themeConfig: {
    docsDir: "site",
    sidebar: "auto",
    sidebarDepth: 1,
    logo: "/assets/img/logo.svg",
    locales: {
      "/": {
        lang: "en-US",
        selectText: "🌏 中文",
        label: "🌍 English",
        lastUpdated: "🔄 Last Updated",
        nav: [
          {
            text: "🏠 Home",
            link: "/",
          },
        ],
        sidebar: [
          {
            title: "PhD",
            children: [
              {
                title: "📋 Minutes of Meeting",
                children: getChildren("site", "degree/phd/meeting"),
              },
              {
                title: "📝 Summary",
                children: getChildren("site", "degree/phd/summary"),
              },
            ],
          },
          {
            title: "MSc",
            children: ["degree/msc/meeting"],
          },
          {
            title: "👨‍🎓 About Me",
            path: "/",
          },
        ],
      },
      "/zh/": {
        lang: "zh-CN",
        selectText: "🌍 English",
        label: "🌏 中文",
        lastUpdated: "🔄 上次更新",
        nav: [
          {
            text: "🏠 首页",
            link: "/zh/",
          },
        ],
        sidebar: [
          {
            title: "PhD",
            children: [
              {
                title: "📋 会议纪要",
                children: getChildren("site", "zh/degree/phd/meeting"),
              },
              {
                title: "📝 摘要",
                children: getChildren("site", "zh/degree/phd/summary"),
              },
            ],
          },
          {
            title: "MSc",
            children: ["/zh/degree/msc/meeting"],
          },
          {
            title: "👨‍🎓 关于我",
            path: "/zh/",
          },
        ],
      },
    },
  },
};
