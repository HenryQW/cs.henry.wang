const glob = require("glob");

// function for loading all MD files in a directory
const getChildren = function(parent_path, dir) {
  return glob
    .sync(parent_path + "/" + dir + "/*.md")
    .map(path => {
      // remove "parent_path" and ".md"
      // path = path.substring(path.length - 3, 0);
      path = path.slice(parent_path.length + 1, -3);
      // remove README
      if (path.endsWith("README")) {
        path = path.slice(0, -6);
      }
      return path;
    })
    .sort();
};

module.exports = {
  plugins: {
    // "@vuepress/google-analytics": {
    //   ga: ""
    // },
    "@vuepress/back-to-top": true
  },
  markdown: {
    extendMarkdown: md => {
      md.use(require("markdown-it-task-lists"))
        .use(require("markdown-it-footnote"))
        .use(require("markdown-it-imsize"));
    }
  },
  locales: {
    "/zh/": {
      lang: "zh-CN",
      title: "汪琪儒 (Henry)",
      description: "研究助理，计算机系，斯旺西大学"
    },
    "/": {
      lang: "en-GB",
      title: "Qiru Wang (Henry)",
      description: "Research Associate, Computer Science, Swansea University"
    }
  },
  dest: "./dist",
  themeConfig: {
    sidebar: "auto",
    sidebarDepth: 1,
    docsDir: "site",
    locales: {
      "/zh/": {
        lang: "zh-CN",
        selectText: "English",
        label: "中文",
        lastUpdated: "上次更新",
        nav: [
          {
            text: "首页",
            link: "/zh/"
          }
        ],
        sidebar: [
          {
            collapsable: false,
            title: "PhD",
            children: [
              "degree/phd/meeting",
              {
                title: "Summary",
                children: getChildren("site", "degree/phd/paper/summary")
              }
            ]
          },
          {
            collapsable: false,
            title: "MSc",
            children: ["/zh/degree/msc/meeting"]
          },
          "/zh/contact"
        ]
      },
      "/": {
        lang: "en-US",
        selectText: "中文",
        label: "English",
        lastUpdated: "Last Updated",
        nav: [
          {
            text: "Home",
            link: "/"
          }
        ],
        sidebar: [
          {
            collapsable: false,
            title: "PhD",
            children: [
              "degree/phd/meeting",
              "degree/phd/paper/paper",
              {
                title: "Summary",
                children: getChildren("site", "degree/phd/paper/summary")
              }
            ]
          },
          {
            collapsable: false,
            title: "MSc",
            children: ["degree/msc/meeting"]
          },
          "contact"
        ]
      }
    }
  }
};
