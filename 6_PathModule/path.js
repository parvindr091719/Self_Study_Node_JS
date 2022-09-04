// path Module 
const path = require("path")

// path details
// console.log(path.dirname("D:/SE/Node Assigments/NodeJS/PathModule/path.js"))

// which file ex:html,css,js
// console.log(path.extname("D:/SE/Node Assigments/NodeJS/PathModule/path.js"))

// check file name
// console.log(path.basename("D:/SE/Node Assigments/NodeJS/PathModule/path.js"))


// console.log(path.parse("D:/SE/Node Assigments/NodeJS/PathModule/path.js"))
// Outpur : {
//     root: 'D:/',
//     dir: 'D:/SE/Node Assigments/NodeJS/PathModule',
//     base: 'path.js',
//     ext: '.js',
//     name: 'path'
//   }

const myPath = path.parse("D:/SE/Node Assigments/NodeJS/PathModule/path.js")
console.log(myPath.name)
console.log(myPath.root)
