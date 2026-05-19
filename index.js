// const {add,sub}=require("./math")
// console.log('Hello, World!');
// console.log("sum is",add(2,3)) 

const fs=require('fs')
const express=require("express");
const users=require('./MOCK_DATA.json');     // loded data once server starts in RAM
const PORT=8000;
const app=express();


//middleware
app.use(express.urlencoded({extended:false}))
//routes
app.get('/api/users',(req,res)=>{ 
     console.log(req.headers); // check full headers
    const t=req.get('X-kunal-age');
    console.log(t)
    res.json(users);
});
// app.get('/api/users',(req,res)=>{ 
//     const t=req.headers['x-kunal-age'];
//     console.log(t)
//     res.json(users);
// });

app.get('/users',(req,res)=>{ 
   const html=`<ul>
       ${users.map((user)=>`<li>${user.first_name}</li>`).join("")}
      
   </ul>`;
    res.send(html);
})

app.get("/api/users/:id",(req,res)=>{ 
    const id=Number(req.params.id);
    const user=users.find((user)=>user.id===id);
    res.json(user);
})

app.post("/api/users",(req,res)=>{ 
    const body =req.body;
    console.log(body)
    users.push({id:users.length+1,...body})      //  modify the data fetched in RAM
    //  at server start above
    fs.appendFile('./MOCK_DATA.json',JSON.stringify(body),(err,data)=>{                // just to save fie permanently
        return res.json({status:"pending"})
    });

})


app.listen(PORT,()=>console.log(`server started at port ${PORT}`));