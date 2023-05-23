const express=require('express');
const morgan=require('morgan');
const routers=require('./routes/user')
const albums=require('./routes/albums')


const server=express();

server.use(express.json());
server.use(morgan('default'));
server.use(express.static('public'));
server.use('/api/v2/user',routers.router)
server.use('/api/v2/albums',albums.router)



server.listen(9000,()=>{
    console.log("Server Started on Port:9000");
})