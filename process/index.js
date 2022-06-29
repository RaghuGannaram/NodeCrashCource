process

process.on("beforeExit",(code)=>{
    console.log("Exited with code ", code)
})

console.log("Welcome....!")
process.exit(100);