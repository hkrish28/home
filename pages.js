const ghpages = require("gh-pages");
const pathname = `${__dirname}/build`;
const repoURL = "https://github.com/hkrish28/hkrish28.github.io.git";

ghpages.publish(
  pathname,
  {
    branch: "gh-pages",
    repo: repoURL,
  },
  (err) => {
    if (err) console.log("ERROR: ", err);
    else console.log("PUBLISHED");
  }
);
