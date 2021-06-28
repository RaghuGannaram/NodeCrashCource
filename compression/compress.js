const fs = require("fs");
const path = require("path");
const readStream = fs.createReadStream(
  path.join(__dirname, "uncompressed.txt")
);
const writeStream = fs.createWriteStream(path.join(__dirname,"compressed.txt"));
const readCompressedStream=fs.createReadStream(path.join(__dirname,"compressed.txt"))
const writeUncompressedStream=fs.createWriteStream(path.join(__dirname,"decompressed.txt"));
const zlib = require("zlib");
const gzip = zlib.createGzip();
const gunzip = zlib.createGunzip();


//To compress a file
readStream.pipe(gzip).pipe(writeStream);

//To decompress a file
// readCompressedStream.pipe(gunzip).pipe(writeUncompressedStream);