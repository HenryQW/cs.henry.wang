const { getChildren } = require("../util/helper");

module.exports = {
  locales: {
    lang: "en-US",
    title: "",
    description:
      "Research Associate, Computer Science, University of Nottingham",
  },
  themeConfig: {
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
        title: "👨‍🎓 About Me",
        path: "/",
      },
      {
        title: "PhD",
        children: [
          {
            title: "📋 Minutes of Meeting",
            children: getChildren("site", "degree/phd/meeting"),
          },
          {
            title: "📝 Paper Summary",
            children: getChildren("site", "degree/phd/summary"),
          },
        ],
      },
      {
        title: "MSc",
        children: ["degree/msc/meeting"],
      },
    ],
  },
};
