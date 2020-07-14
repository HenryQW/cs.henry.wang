const { getChildren } = require("../util/helper");

module.exports = {
  locales: {
    lang: "zh-CN",
    title: "",
    description: "研究助理，计算机系，诺丁汉大学",
  },
  themeConfig: {
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
        title: "👨‍🎓 关于我",
        path: "/zh/",
      },
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
    ],
  },
};
