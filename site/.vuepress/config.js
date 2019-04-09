module.exports = {
  plugins: {
    // "@vuepress/google-analytics": {
    //   ga: ""
    // },
    "@vuepress/pwa": {
      serviceWorker: true,
      updatePopup: {
        "/zh": {
          message: "发现新内容可用",
          buttonText: "刷新"
        },
        "/": {
          message: "New content is available",
          buttonText: "Refresh"
        }
      }
    },
    "@vuepress/back-to-top": true,
    dehydrate: {
      noSSR: "404.html"
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
    sidebarDepth: 2,
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
            title: "会议纪要",
            children: ["/zh/degree/phd", "/zh/degree/msc"]
          },
          "/zh/contact"
        ]
      },
      "/": {
        lang: "en-GB",
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
            title: "Minutes of Meeting",
            children: ["degree/phd", "degree/msc"]
          },
          "contact"
        ]
      }
    }
  }
};
