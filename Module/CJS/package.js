const builtin = require("node:module").builtinModules;

console.log(
  "Builtin modules, need not use node: prefix while requiring: ",
  builtin
);
console.log("Module: ", module);
console.log("id: ", module.id);
console.log("filename: ", module.filename);
console.log("path: ", module.path);
console.log("paths: ", module.paths);

console.log("parent: ", module.parent);
console.log("children: ", module.children);
console.log("exports: ", module.exports);

module.exports.firstName = "John";
module.exports.lastName = "Doe";
module.exports.age = 25;

const address = {
  doorNumber: 23,
  floorNumber: 10,
  buildingName: "Hemadurga Towers",
  city: "Hyderabad",
  state: "Telangana",
  country: "India",
};

module.exports.address = address;

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greeting = function () {
    return `My name is ${this.name}, I'm ${this.age} years old...`
  };
}

module.exports.Person = Person;
