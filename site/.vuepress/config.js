module.exports = {
  plugins: {
    // "@vuepress/google-analytics": {
    //   ga: ""
    // },
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
            title: "PhD",
            children: ["/zh/degree/phd/meeting", "/zh/degree/phd/paper"]
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
            title: "PhD",
            children: ["degree/phd/meeting", "degree/phd/paper"]
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
