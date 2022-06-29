setTimeout(()=> console.log("s1"), 0);
console.log("c1");
Promise.resolve().then(()=>console.log("p1"));
setTimeout(()=> Promise.resolve().then(()=>console.log("sp1")))
setTimeout(()=> console.log("s2"), 0);
console.log("c2");
Promise.resolve().then(()=>console.log("p2"));
setTimeout(()=> Promise.resolve().then(()=>console.log("sp2")))