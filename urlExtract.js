const http=require("http")
const fs=require("fs")
const url=require("url")


const myServer=http.createServer((req,res)=>{ 
    
    const log=`${Date.now()} : request from ${req.url}\n`
    const myUrl = url.parse(req.url,true);   // here query property is true
    console.log(myUrl);
    
    fs.appendFile("log.txt",log,(err)=>{ 
      switch(myUrl.pathname){ 
        case "/":
            res.end("Home Page");
            break;
        case "/about":
            const username=myUrl.query.name      //If true, the query property will always be set to an object returned by the querystring module's parse() method. If false, 
            //  query property on the returned URL object will be an unparsed, undecoded string. Default: false.
            res.end(`Hi,This is ${username}`);
            break;
        case "/contact":
            res.end("contact : 9879890");
            break;
        default:
            res.end("404 page not found");
            break;
      }
    })
}); 

myServer.listen(8000,()=> console.log("server listens"))