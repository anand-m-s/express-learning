// const os = require("os");
// console.log(os.type());
// console.log(os.platform());

// Node learning

//  const interval = setInterval(()=>{
//     console.log("Running");
//  },1000)

// setTimeout(function(){
//         clearInterval(interval)
// },5000)


// let name1 = "my name is \"anand\""

// console.log(name1);

// console.log(__filename);
// console.log(__dirname);


// const path = require("Path");
// console.log(path);
// const path = require("path");

// console.log(path.parse(__filename).ext);


// const greet = (name)=>{
//     console.log(`Hey  there ${name}`);
// }
// greet("anand")
// greet('thousiff')

// console.log(global);
// global.setTimeout(() => {
//     console.log('in the timeout');
//     clearInterval(test);
// },3000);
// const test = setInterval(()=>{
//     console.log("Hiiii :) "); 
// },1000)

// const people = ['anand','deechu','jyoo','harii'];
// const ages = [1,2,3,4,5,6];
// console.log(people);

// module.exports = {
//     people,ages,
// }







//file sysytem

//reading files

const fs = require('fs')

fs.readFile('./blogs/blog.txt',(err,data)=>{
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});
console.log('last line');

//writing files

