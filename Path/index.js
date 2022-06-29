const path = require("path");

console.log("filename: ",__filename);
console.log("dirname: ",__dirname);

console.log("extname: ",path.extname(__filename));
console.log("basename: ",path.basename(__filename));
console.log("dirname: ",path.dirname(__filename));

console.log("extname: ",path.extname(__dirname));
console.log("basename: ",path.basename(__dirname));
console.log("dirname: ",path.dirname(__dirname));

console.log("Separator: ",path.sep);
console.log("Separator usecase: ",__filename.split(path.sep));
console.log("Delimiter: ",path.delimiter);
console.log("Delimiter usecase: ",process.env.PATH.split(path.delimiter));

console.log("Create path string from path object: ",path.format(path.parse(__filename)));
console.log("Is path obsolute: ",path.isAbsolute(__filename));
console.log("Is path obsolute: ",path.isAbsolute("NodeCrashCourse\\Path"));
console.log("Normalize: ",path.normalize(""));
console.log("Normalize: ",path.normalize(" C://\\Users/\/\\Raghu Gannaram "));
console.log("Relative path: ",path.relative("C:\\Users\\Raghu Gannaram\\Desktop\\Programming\\CrashCourses\\NodeCrashCource\Path", "C:\\Users\\Raghu Gannaram\\Desktop\\Programming\\CrashCourses\\NodeCrashCource\\os"));
console.log("Resolving path: ",path.resolve("a\\b\\c", "..\\e"));
