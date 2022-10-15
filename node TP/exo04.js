var fs = require("fs");
const readline = require("readline");

const type = (text) => {
  fs.writeFileSync("newFile.txt", `${text}`);
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("", (text) => {
  rl.close();
  type(text);
});
