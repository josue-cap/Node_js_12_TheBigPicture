const fs = require("./fs");
const files = ["./1-loop.js", "./2-try.js"];

files.forEach((file) => {
  const data = fs.readFileSync(file);
  console.log("file data is", data);
});
