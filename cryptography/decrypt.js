const fs=require("fs");
const path=require("path");
const readStrem=fs.createReadStream(path.join(__dirname,"test.encrypted"));
const writeStream=fs.createWriteStream(path.join(__dirname,"test.decrypted"));
const crypto=require("crypto");
const password="12345";
const aes=crypto.createDecipher("aes-256-cbc",password);

readStrem
    .pipe(aes)
    .pipe(writeStream)
    .on("finish",()=>{
        console.log("done decryption");
    })