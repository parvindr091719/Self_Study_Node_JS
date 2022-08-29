// Date : 29/08/2022 (Challenges)
#Create+Write+Update+Delete

// const fs = require("fs");

// 1: Create New Folder ("Arvind").
// fs.mkdirSync("Arvind");
// Output :=: Create Arvind Folder

// 2: Create New File ("bio.txt").
// fs.writeFileSync("Arvind/bio.txt", "My Name Arvind Kailash Sharma");
// Output :=: Create Bio.txt File "My Name Arvind Kailash Sharma"

//  3: Add more data into the file at the end of the existing data.
// fs.appendFileSync("Arvind/bio.txt", " I love my family and my goal") 
// Output :=: "My Name Arvind Kailash Sharma I love my family and my goal"

// 4: Read the data without getting the buffer data at first.

//Buffer
// const data = fs.readFileSync("Arvind/bio.txt")
// console.log(data);
// Output :=: <Buffer 4d 79 20 4e 61 6d 65 20 41 72 76 69 6e 64 20 4b 61 69 6c 61 73 68 20 53 68 61 72 6d 61 20 49 20 6c 6f 76 65 20 6d 79 20 66 61 6d 69 6c 79 20 61 6e 64 ... 8 more bytes>

//File Encoding
// const data = fs.readFileSync("Arvind/bio.txt", "utf8")
// console.log(data);
// Output :=: My Name Arvind Kailash Sharma I love my family and my goal

// 5: Rename file name ("Mybio.txt")
// fs.renameSync("Arvind/bio.txt","Arvind/Mybio.txt")

// 6: Now delete both the file and the folder
//File Delete
// fs.unlinkSync("Arvind/Mybio.txt")

//Folder Delete
// fs.rmdirSync("Arvind")