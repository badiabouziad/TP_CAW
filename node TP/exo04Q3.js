var fs = require("fs");
const readline = require("readline");

const type = (title, text) => {
  fs.writeFileSync(`${title}` + ".txt", `${text}`);
};
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("enter title ", (title) => {
  rl.question("entre text ", (text) => {
    type(title, text);
    rl.close();
    console.log(text);
  });
});
