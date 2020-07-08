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

console.log(getChildren("site", "degree/phd/meeting"));
