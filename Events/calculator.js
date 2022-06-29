const { EventEmitter, errorMonitor } = require("events");

class CustomEmitter extends EventEmitter {
  //pass
}

const calculate = new CustomEmitter();

let result;

calculate.on("add", function addition(a, b) {
  result = a + b;
});

calculate.on("sub", function subtraction(a, b) {
  result = a - b;
});

calculate.on("mul", function multiplication(a, b) {
  result = a * b;
});

calculate.on("div", function division(a, b) {
  result = a / b;
});

calculate.on("flush", function flush() {
  result = null;
});

calculate.on(errorMonitor, (err) => {
  console.log(err);
});

calculate.on("error", function errorHandler(err) {
  console.log(err);
});

calculate.emit("add", 6, 2);
console.log(result);

calculate.emit("sub", 6, 2);
console.log(result);

calculate.emit("mul", 6, 2);
console.log(result);

calculate.emit("div", 6, 2);
console.log(result);

calculate.emit("flush");
console.log(result);

calculate.emit("error", new Error("oops..!"));


console.log(calculate.eventNames())
console.log(calculate.getMaxListeners())
console.log(calculate.listenerCount("add"))
console.log(calculate.listenerCount("add"))
console.log(calculate.listeners("add"))


console.log(calculate);
console.log(calculate._eventsCount);
console.log(calculate._events);
console.log(Object.keys(calculate._events));
console.log(Object.values(calculate._events));
