const fs=require("fs");
const path=require("path");
const readStream=fs.createReadStream(path.join(__dirname,"test.txt"));
const writeStream=fs.createWriteStream(path.join(__dirname,"test.encrypted"));
const crypt=require("crypto");
const password="12345";
var aes=crypt.createCipher("aes-256-cbc",password);
// var aes=crypt.createCipheriv("aes-256-ccm",password,"hello")


readStream
    .pipe(aes)
    .pipe(writeStream)
    .on("finish",()=>{
        console.log("done encrypting");
    })