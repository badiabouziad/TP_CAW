var fs = require("fs");

function read() {
  var data = fs.readFileSync("badia.txt");
  console.log(data.toString());
}


read();
