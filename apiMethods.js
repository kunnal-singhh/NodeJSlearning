const express=require('express');
const users=require('./MOCK_DATA.json');
const PORT=8000;
const app=express();

//routes
app.get('/users',(req,res)=>{ 
    res.json(users);
});


app.listen(PORT,()=>console.log(`server started at port ${PORT}`))