const fs=require("fs")
 

// sync
// fs.writeFileSync("./test.txt","hey bro this is kunal")


//async 
// fs.writeFile("./test.txt","this is async file",(err)=>{})


// sync rreadc file returns result and throws error in case 
// which is handelled by try catch

// const result=fs.readFileSync("./contacts.txt","utf-8")
// console.log(result);


// where async read file doesn't return any result and takes a callback 
// which returns the data and the error 

// fs.readFile("./contacts.txt","utf-8",(err,data)=>{ 
//     if(data){ 
//         console.log(data);
        
//     }
//     else{ 
//         console.log(err);
        
//     }
// })

//  ---->>  append in file
// fs.appendFileSync("./test.txt","\nraghu")
// ---->  copy file
// fs.cpSync("./test.txt","./copy.txt")
// ---> delete file 
// fs.unlinkSync("./copy.txt")


// --> check status of file
console.log(fs.statSync("./test.txt"));

//  --> make directory
fs.mkdirSync("my-doc")
fs.mkdirSync("my-doccs/a/b",{recursive:true})
