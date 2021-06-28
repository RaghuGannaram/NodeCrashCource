const fs = require("fs");
const path=require("path");


fs.mkdir(path.join(__dirname, "documents"), {}, (err) => {
  if (err) throw err;
  console.log("folder created successfully");
});

fs.writeFile(
  path.join(__dirname, "documents", "hello.txt"),
  "Hello world...",
  (err) => {
    if (err) throw err;
    console.log("File written to");
  }
);

fs.appendFile(
  path.join(__dirname, "documents", "hello.txt"),
  "\nHow are you...",
  (err) => {
    if (err) throw err;
    console.log("File appended to");
  }
);
fs.readFile(
  path.join(__dirname, "documents", "hello.txt"),
  "utf-8",
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
);
