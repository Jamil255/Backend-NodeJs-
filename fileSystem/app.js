const fs = require('node:fs');
// writefile
// fs.copyFile
// fs.rename
// fs.unlink


// fs.writeFile
// fs.writeFile("test.js", "console.log('hello world)", function (err) {
//     if (err) {
//         console.log(error);
//     }
//     else {
//         console.log("done ");
//     }
// })

// appendFile

// fs.appendFile("./copy/app1.js", "console.error('error')", function (error) {
//     if (error) console.log(error);
//     else console.log("done")
// })

// renameFile

// fs.rename("./test.js", "./hello.js", function (error) {
//     if (error) console.log(error);
//     else console.log("done")
// })

// fs.copyFile

// fs.copyFile("test.js", "./copy/app1.js", function (error) {
//     if (error) console.log(error.message);
//     else console.log("done")
// })

// unlink

// fs.unlink("test.js", function (error) {
//     if (error) console.log(error.message);
//     else console.log("done")
// })

// rmidr
// it is by default remove  the empty floder
 
// fs.rmdir("./copy", function (error) {
//     if (error) console.log(error)
//     else console.log("done")
// })


// fs.rmdir("./copy",{recursive:true}, function (error) {
//     if (error) console.log(error)
//     else console.log("removed")
// })

// use rm

// fs.rm("./copy",{recursive:true}, function (error) {
//     if (error) console.log(error)
//     else console.log("removed")
// })

// readfile

// fs.readFile("test.js", "utf8", function (error) {
//     if (error) console.log(error)
//     else console.log("readfile")
    
// })