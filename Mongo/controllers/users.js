const fs=require('fs');
// const index=fs.readFileSync('index.html','utf-8');
// const data=JSON.parse(fs.readFileSync('data.json','utf-8'));
const model = require('../models/user');
const User=model.User;


//Create
exports.createUser = async(req,res)=>{
    //making
        const user= new User(req.body);
       
        const use= await user.save()    
        console.log(use)
    
        res.status(201).json(req.body);
        // console.log(req.body);
        // user.push(req.body);
        // res.json(req.body);
    }  


exports.getUser =async (req,res) => {
    // const id=req.params.id;
    // const userFind=user.find( p=> p.id === (+id));
    // res.json(userFind);
    const id=req.params.id;
    console.log({id})
    const userFind=await User.findById(id)
    console.log(userFind)
    res.status(201).json(userFind);
}


//Read All
exports.getAllUser =async (req,res) => {
    const users=await User.find();//iske andr conditions bi lGA skte h
    console.log(users)
    res.json(users)
}




exports.replaceUser =async (req,res)=>{
    const id=req.params.id;
    // const userIndex=user.findIndex( p => p.id === (+id));
    // const userOld=user[userIndex];
    // user.splice(userIndex,1,{...req.body,id:id})
    // res.json(userOld);
    try{
        const user=await User.findOneAndReplace({_id:id},req.body,{new:true})
        console.log(user);
        res.status(201).json(user)
    }catch(err)
    {
        console.log(err)
        res.status(400).json(err)
    }


}

exports.updateUser =async (req,res)=>{
    const id=req.params.id;
    // const userIndex=user.findIndex( p => p.id === (+id));
    // const userOld=user[userIndex];
    // user.splice(userIndex,1,{...userOld,...req.body})
    // res.json(userOld);
    try{
        const updateUser=await User.findOneAndUpdate({_id:id},req.body,{new:true});
        console.log(updateUser)
        res.status(201).json(updateUser);
    }catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}

exports.deleteUser =async (req,res)=>{
    const id=req.params.id;
    // const userIndex=user.findIndex( p => p.id === (+id));
    // const userOld=user[userIndex];
    // user.splice(userIndex,1)
    // res.json(userOld);
    try{
        const deleteUser=await User.findOneAndDelete({_id:id});
        res.status(301).json(deleteUser)
    }
    catch(err){
        console.log(err)
        res.status(400).json(err)
    }
}
