btnOne.addEventListener("click", taskListOne);
btnTwo.addEventListener("click", taskListTwo);


/*
==> CallStack = []
==> MicroTask = []
==> Task = []
==> #1 Hello, "#1 p1", "#1 p2", "#1 p6", "#1 s1", "#1 s2", "#1 s3", "#1 p3", "#1 p5", "#1 s5", "#1 p4", "#1 s4"
*/

/*
==> CallStack = []
==> MicroTask = []
==> Task = []
==> "#1 Hello", "#1 p1", "#1 p2", "#1 p6", "#2 Hello", "#2 p1", "#2 p2", "#2 p6", "#1 s1", "#1 s2", "#1 s3", "#1 p3","#1 p5","#1 s5", 
    "#2 s1", "#2 s2", "#2 s3", "#2 p3",  "#2 p5", "#2 s5", "#1 p4", "#1 s4", "#2 p4",  "#2 s4"

*/