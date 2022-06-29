const {EventEmitter} = require("events");

class CustomEmitter extends EventEmitter{
    //pass
}

const testEmitter = new CustomEmitter();

function testOneListenerTwo(){
    console.log("test one listener two ...")
}

testEmitter.on("testOneEvent", function testOneListenerOne(){
    console.log("test one listener one ...")
})

testEmitter.on("testOneEvent", testOneListenerTwo)

testEmitter.once("testOneEvent", function welcomeBanner(){
    console.log("Welcome banner");
})

testEmitter.emit("testOneEvent");

testEmitter.off("testOneEvent", testOneListenerTwo)

testEmitter.emit("testOneEvent");

// ---------------------------------------------------------------------------------------

function testTwoListenerTwo(){
    console.log("test two listener two ...")
}

testEmitter.addListener("testTwoEvent", function testTwoListenerOne(){
    console.log("test two listener one ...")
})

testEmitter.addListener("testTwoEvent", testTwoListenerTwo)

testEmitter.prependListener("testTwoEvent", function testTwoListenerZero(){
    console.log("test two listener zero")
})

testEmitter.prependOnceListener("testTwoEvent", function testTwoListenerZero(event){
    console.log("test two listener zero")
})

testEmitter.emit("testTwoEvent")

testEmitter.removeListener("testTwoEvent", testTwoListenerTwo)

testEmitter.emit("testTwoEvent")

testEmitter.removeAllListeners("testTwoEvent")

testEmitter.emit("testTwoEvent")

// ----------------------------------------------------------------------------------------

