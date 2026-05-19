const http=require("http")
const fs=require("fs")
const myServer=http.createServer((req,res)=>{                       //this runs first  👉 This creates the server object.
                                                                    // 👉 The callback function is just registered, not executed.
    const log=`${Date.now()}: ${req.url} request received\n`;
    fs.appendFile("log.txt",log,(err,data)=>{ 
        console.log("data")
        res.end("Hello From Server");
    })
});

myServer.listen(8000,()=>console.log("server started"));           // runs second  // 👉 The server starts listening on port 8000.
                                                                     //User sends request
                                                                      //Callback runs