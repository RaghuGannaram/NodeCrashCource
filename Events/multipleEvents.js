const EventEmitter = require("events");

class CustomEmitter extends EventEmitter {
  //pass
}

const customEmitter = new CustomEmitter();

customEmitter.on("custom-event", function firstListener() {
  console.log("Hello from first Listener...!");
});

customEmitter.on("custom-event", function secondListener(num) {
  console.log("Hello from second Listener...!", num);
});

customEmitter.on("custom-event", function thirdListener(a, b) {
  console.log("Hello from third Listener", a + b);
});

customEmitter.once("custom-event",function onlyOnceFasak(){
    console.log("Only once, Fasak 😜😜😜..!")
})

customEmitter.emit("custom-event", 1,1);
customEmitter.emit("custom-event", 1,1);
