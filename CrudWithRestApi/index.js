const fs=require('fs');


const index=fs.readFileSync('index.html','utf-8');
const data=JSON.parse(fs.readFileSync('data.json','utf-8'))
const todo=data.todos;

const express=require('express');
const morgan=require('morgan');

const server=express();

//bodyParsers
server.use(express.json());
server.use(morgan('default'));
server.use(express.static('public'));


//Read Array Of Data
server.get('/todo',(req,res)=>{
    //console.log(req.params)
    res.json(todo)
    console.log("SuccessFully Read The Data")
})

//Read Perticular Data
server.get('/todo/:id',(req,res)=>{
    //console.log(req.params);
    const id=req.params.id;
    const todoFind=todo.find( p => p.id === (+id));
    res.json(todoFind);
})

//post Create Data 
server.post('/todo',(req,res) => {
    console.log(req.body)
    todo.push(req.body)
    res.json(req.body)
})

//put Update All Data
server.put('/todo/:id',(req,res)=>{
    //console.log(req.params.id)
    const id = req.params.id;
    const todoIndex=todo.findIndex( p => p.id === (+id));
    todo.splice(todoIndex,1,{...req.body,id:id})
    res.status(201).json();
})

//patch Udpate Perticular data
server.patch('/todo/:id',(req,res)=>{
    const id = req.params.id;
    const todoIndex=todo.findIndex( p => p.id === (+id));
    const todoOld=todo[todoIndex];
    todo.splice(todoIndex,1,{...todoOld,...req.body})
    res.json(todoOld);
})

//delete Delete 
server.delete('/todo/:id',(req,res)=>{
    const id = req.params.id;
    const todoIndex=todo.findIndex( para => para.id === (+id));
    const oldData=todo[todoIndex];
    todo.splice(todoIndex,1);
    res.status(301).json(oldData);
})


server.listen(8000,()=>{
    console.log("Server Starts On Port Number 8000");
})