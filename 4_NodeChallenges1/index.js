// Challenge Time

// 1: Create a folder namded id Thapa
// 2: Create a file in it named bio.txt and data into it.BiquadFilterNod
// 3: Add more data into the file at the end of the existing data.
// 4: Read the data without getting the buffer data at first.
// file encoding
// 5: Rename the file name to mybio.txt
// 6: now delete both the file and the folder

const fs = require("fs");

// 1:
// fs.mkdir("Arvind1", (err)=>{
//     console.log("folder created");
// })

// 2: 
// fs.writeFile("./Arvind1/bio.txt", "My name is Arvind Sharma", (err)=>{
//     console.log("file created");
// })

// 3: 
// fs.appendFile("./Arvind1/bio.txt", " please like and share my name", (err)=>{
//     console.log("file data appended")
// })

// 4:
// fs.readFile("./Arvind1/bio.txt", "utf-8", (err, data)=>{
//     console.log(data);
// })

// 5: 
// fs.rename("./Arvind1/bio.txt", "./Arvind1/myBio.txt", (err)=>{
//     console.log("rename done")
// })  

// 6:
// fs.unlink("./Arvind1/myBio.txt", (err)=>{
//     console.log("file deleted")
// })

// 7:
// fs.rmdir("./Arvind1", (err)=>{
//     console.log("Folder deleted")
// })