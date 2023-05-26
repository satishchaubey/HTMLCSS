//dotenv ko import kr liya jo security feature create krte h.x
require('dotenv').config();
//connections
const express=require('express');
const morgan=require('morgan');
const mongoose=require('mongoose');


const user=require('./routes/user')
const albums=require('./routes/albums')


//server making
const server=express();

//mongoose se connection
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/user');//locally Save krne pe
    console.log('Database Connected...')
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}







//bodyParser
server.use(express.json());
server.use(morgan('default'));
server.use(express.static(process.env.PUBLIC_DIR));
server.use('/users',user.router)
server.use('/albums',albums.router)



server.listen(process.env.PORT,()=>{
    console.log("Server Started on Port:9000");
})