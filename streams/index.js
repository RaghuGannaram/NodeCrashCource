const fs = require("fs");
const path = require("path");
const readStream = fs.createReadStream(path.join(__dirname, "test1.txt"));
const writeStream = fs.createWriteStream(path.join(__dirname, "test2.txt"));
const zlib = require("zlib");
const gzip = zlib.createGzip();
const gunzip = zlib.createGunzip();

// reading the data simply from a file
// fs.readFile(path.join(__dirname, "test1.txt"), "utf-8", (err, data) => {
//   fs.writeFile(path.join(__dirname, "test2.txt"), data, (err) => {
//     if (err) console.log(err);
//   });
// });

// streaming the data from a file
// readStream.on("data", (chunk) => {
//   writeStream.write(chunk);
// });

// streaming using pipe
// readStream.pipe(writeStream);

// compressing a file
// readStream
//   .pipe(gzip)
//   .pipe(gunzip)
//   .pipe(writeStream)
//   .on("finish", () => {
//     console.log("file successfuly compressed and streamed ");
//   });

// pausing an dresuming streams
readStream.on("data",(chunk)=>{
  console.log("Received %d of data",chunk.length);
  readStream.pause();
  console.log("Stops this execution for 4 seconds");
  setTimeout( () => {
  readStream.resume();
  console.log("Now the execution is resumed ");
  },4000);

});


var data="";
console.log("Execution started");
readStream.on("data",(chunk) => {
  data+=chunk;
  console.log(chunk);
  console.log("Initial chunk"+chunk);
  setTimeout(()=>{
  console.log("After two seconds chunk"+chunk);
  },0);
});
readStream.on("end",()=>{
  console.log(data);
})
console.log("Execution completed");