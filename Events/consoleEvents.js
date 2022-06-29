const EventEmitter = require('events');

class CustomEmitter extends EventEmitter{
    //pass
}

const consoleEmitter = new CustomEmitter();


consoleEmitter.on('log-greeting', ()=>{
    console.log("Hello World");
})

consoleEmitter.on('log-signoff', ()=>{
    console.log("Signing Off...!")
})

consoleEmitter.emit('log-greeting')
consoleEmitter.emit('log-greeting')
consoleEmitter.emit('log-signoff')
console.log(consoleEmitter.emit('log-signoff'))
console.log(consoleEmitter.emit('log-signout'))
