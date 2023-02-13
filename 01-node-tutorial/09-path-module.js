const path = require('path')  //here path is a built in module which give us authority to access any file path

console.log(path.sep) //print system based path saparable

const filePath = path.join('/content/', 'subfolder', 'test.txt') // it joins the path using path seperable 

console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)
