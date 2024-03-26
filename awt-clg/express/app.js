const express= require('express');

const app= express();

app.get('/',(req,res)=>{

res.send("Welcome to MCA");

});

app.listen(4000,()=>{

console.log("listening to port 4000")

});