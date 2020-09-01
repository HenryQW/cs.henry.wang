const fs = require("fs");
const path = require("path");
const glob = require("glob");
const dayjs = require("dayjs");

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

const createNewMeeting = (weekday = 2, time = "11:00") => {
  const list = getChildren("site", "degree/phd/meeting")[0].split("/");
  const index = +list[list.length - 1].match(/[0-9]*\.?[0-9]+/g)[0] + 1;
  const date = dayjs().day(weekday);
  const nextDate = date.add(7, "day");

  const content = `# Meeting ${index}

<Meeting index="${index}" members="Bob, Mohammed, Wang" date="${date.format(
    "D MMM YYYY"
  )} ${time}" nextDate="${nextDate.format("D MMM YYYY")} ${time}">

::: slot topic

- 
- 
- 
- 
- 

:::

::: slot prog

- 
- 
- 
- 
- 

:::

::: slot todo

Survey:

- [ ]
- [ ]
- [ ]
- [ ]
- [ ]

Letter-space Vis:

- [ ]
- [ ]
- [ ]
- [ ]
- [ ]

:::

</Meeting>
`;

  fs.writeFileSync(
    path.resolve(__dirname, `../../degree/phd/meeting/${index}.md`),
    content,
    { encoding: "utf8", flag: "wx" }
  );
};

module.exports = {
  createNewMeeting,
  getChildren,
};
