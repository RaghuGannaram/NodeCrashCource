const os = require("os");

console.log("Version : ", os.version());
console.log("Type : ", os.type());
console.log("Platform : ", os.platform());
console.log("Architecture : ", os.arch());
console.log("Free Memory : ", os.freemem());
console.log("Total Memory : ", os.totalmem());
console.log("Up time: ", os.uptime());
console.log("CPU core info : ", os.cpus());

console.log("User Info: ", os.userInfo());
console.log("Home directory: ", os.homedir());
console.log("Temporary directory: ", os.tmpdir());
console.log("Null Device: ", os.devNull);

console.log("Hostname: ", os.hostname());
console.log("Network Interfaces: ", os.networkInterfaces());

console.log("Get Process priority: ", os.getPriority(process.pid));
// console.log("Set Process priority: ", os.setPriority(process.pid,0 ));

console.log("Constants: ", os.constants);
