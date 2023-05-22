const fs=require('fs');
 const index=fs.readFileSync('index.html','utf-8');
 const data=JSON.parse(fs.readFileSync('data.json','utf-8'))

 const post=data.posts;


 const express=require('express');
 //middleWare
 const morgan=require('morgan');

//server Making
 const server=express();
 //bodyParsers
 server.use(express.json());
 server.use(morgan('default'));
 server.use(express.static('public'));


//Get Read Rest Api
//Get Are Two Types Iska Return type Array 
//Read All Data
server.get('/post',(req,res)=>{
    res.json(post)
})
//Get Are Two Types Iska Return type Object
//Read Perticular data
server.get('/post/:id',(req,res)=>{
    const id=+req.params.id;
    const posts =post.find(p=>p.id==id);
    res.json(posts) 
})

//Post Create Rest Api
server.post('/post',(req,res)=>{
    console.log(req.body)
    post.push(req.body)
    res.json(req.body)
})

//Put Update Rest API
server.put('/post/:id',(req,res)=>{
    const id=req.params.id;
    const postIndex=post.findIndex(p=>p.id === (+id));
    post.splice(postIndex,1,{...req.body,id:id});

    res.status(201).json({type:"Data Is Updated"});
})

//Patch Update Rest API
server.patch('/post/:id',(req,res)=>{
    const id=req.params.id;
    const postIndex=post.findIndex(p=>p.id===(+id));
    const postOld=post[postIndex];
    post.splice(postIndex,1,{...postOld,...req.body})
    res.status(201).json(postOld);
})

//delete Delete Rest API
server.delete('/post/:id',(req,res)=>{
   const id=+req.params.id;
   const postIndex=post.findIndex(p=>p.id===id);
   const postOld=post[postIndex];
   post.splice(postIndex,1);
   res.status(301).json(postOld);
})




 server.listen(9000,()=>{
    console.log("Server started on Port 9000");
 })