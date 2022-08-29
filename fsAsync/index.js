const fs = require("fs");

// create file async and callback
// fs.writeFile("read.txt", "Today is awesome", (err)=>{
//     console.log("File is created")
//     console.log(err)
// });

// We pass them a function as an argument -a callback -
// that gets called when that task completed.
// The callback has an argument that tells you whether
// the operation completed successfully.
// Nod we need to say what to do when fs.writeFile
// has completed (even if it's nothing), and start
// checking for errors.

//Update
// fs.appendFile("read.txt", " Hello World Are You Happy!", (err)=>{
//     console.log("Completed")
//     console.log(err)
// });


//Read (bufferd data show)
// fs.readFile("read.txt", (err, data)=>{
//     console.log(data);
// })
// Output :=: <Buffer 54 6f 64 61 79 20 69 73 20 61 77 65 73 6f 6d 65 20 48 65 6c 6c 6f 20 57 6f 72 6c 64 20 41 72 65 20 59 6f 75 20 48 61 70 70 79 21>

//Read Actual Data Show
// fs.readFile("read.txt", "utf8", (err, data)=>{
//     console.log(data);
// })

