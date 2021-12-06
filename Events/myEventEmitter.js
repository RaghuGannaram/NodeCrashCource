const EventEmitter = require('events');

class MyEmitter extends EventEmitter{
    //pass
}

const myEmitter = new MyEmitter();


myEmitter.on('custom-event', ()=>{
    console.log("custom-event is triggered");
})
myEmitter.emit('custom-event');

myEmitter.on('param-event', (x, y)=>{
    let m = x*y;
    console.log(x,y)
    console.log("Result : ", m)
})
myEmitter.emit('param-event', 2, 3, 4);
myEmitter.emit('ping');