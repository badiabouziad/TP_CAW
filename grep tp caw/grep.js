var fs = require("fs");
const arg = process.argv.slice(2);
const expression = arg[0];
var fichiers = [];
for (let i = 1; i < arg.length; i++) {
  //svp madame modifier le path de fichier txt que tu veux le tester :)  ;
  let data = fs.readFileSync(
    "C:\\Users\\pk\\Desktop\\grep tp caw\\" + arg[i] + ".TXT",
    "utf8"
  );
  if (data.includes(expression)) {
    fichiers.push(arg[i]);
  }
}
if (fichiers.length == 0) {
  console.log("no file contains such expression");
} else {
  console.log("the expression is found in the following files");
  console.log(fichiers);
}
