function taskListOne() {
    setTimeout(() => console.log("#1 s1"), 0);
    Promise.resolve().then(() => console.log("#1 p1"));
    setTimeout(() => console.log("#1 s2"), 0);
    Promise.resolve().then(() => console.log("#1 p2"));
    setTimeout(() => console.log("#1 s3"), 0);
    setTimeout(() => {
      Promise.resolve().then(() => console.log("#1 p3"));
      setTimeout(() => Promise.resolve().then(() => console.log("#1 p4")), 0);
      Promise.resolve().then(() => Promise.resolve().then(() => console.log("#1 p5")));
      Promise.resolve().then(() => setTimeout(() => console.log("#1 s4"), 0));
    }, 0);
    Promise.resolve().then(() => console.log("#1 p6"));
    setTimeout(() => console.log("#1 s5"), 0);
    console.log("#1 Hello")
  }
  
function taskListTwo() {
    setTimeout(() => console.log("#2 s1"), 0);
    Promise.resolve().then(() => console.log("#2 p1"));
    setTimeout(() => console.log("#2 s2"), 0);
    Promise.resolve().then(() => console.log("#2 p2"));
    setTimeout(() => console.log("#2 s3"), 0);
    setTimeout(() => {
        Promise.resolve().then(() => console.log("#2 p3"));
        setTimeout(() => Promise.resolve().then(() => console.log("#2 p4")), 0);
        Promise.resolve().then(() => Promise.resolve().then(() => console.log("#2 p5")));
        Promise.resolve().then(() => setTimeout(() => console.log("#2 s4"), 0));
    }, 0);
    Promise.resolve().then(() => console.log("#2 p6"));
    setTimeout(() => console.log("#2 s5"), 0);
    console.log("#2 Hello")
}


const btnOne = document.getElementById("btn1");
const btnTwo = document.getElementById("btn2");
const btn = document.getElementById("btn");

btn.addEventListener("click", taskListOne);
btn.addEventListener("click", taskListTwo);