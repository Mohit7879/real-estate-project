const express=require('express');
const app=express();
const port=3000;

app.listen(port,(err)=>{
    console.log('server is running on port 3000');
    if(err){
        console.log(err);
    }
})