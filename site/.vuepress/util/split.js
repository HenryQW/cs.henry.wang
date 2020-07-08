const fs = require("fs");
const path = require("path");

fs.readFile(
  path.resolve(__dirname, "../../degree/phd/meeting.md"),
  "utf8",
  (err, contents) => {
    const list = contents.split(/<\/Meeting>\n\n<Meeting /gm);
    list.forEach((l) => {
      const index = l.match(/(?<=index=").*(?=" members)/g)[0];

      let content = `# Meeting ${index}`;
      content += "\n\n<Meeting " + l + "</Meeting>\n";

      fs.writeFileSync(
        path.resolve(__dirname, `../../degree/phd/meeting/${index}.md`),
        content,
        { encoding: "utf8", flag: "w" }
      );
    });
  }
);
