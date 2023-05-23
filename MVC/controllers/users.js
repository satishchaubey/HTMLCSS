const fs=require('fs');
const index=fs.readFileSync('index.html','utf-8');
const data=JSON.parse(fs.readFileSync('data.json','utf-8'));
const user=data.users;


exports.getUser = (req,res) => {
    res.json(user)
}

exports.getAllUser = (req,res) => {
    const id=req.params.id;
    const userFind=user.find( p=> p.id === (+id));
    res.json(userFind);
}

exports.createUser = (req,res)=>{
    console.log(req.body);
    user.push(req.body);
    res.json(req.body);
}  

exports.replaceUser = (req,res)=>{
    const id=req.params.id;
    const userIndex=user.findIndex( p => p.id === (+id));
    const userOld=user[userIndex];
    user.splice(userIndex,1,{...req.body,id:id})
    res.json(userOld);
}

exports.updateUser = (req,res)=>{
    const id=req.params.id;
    const userIndex=user.findIndex( p => p.id === (+id));
    const userOld=user[userIndex];
    user.splice(userIndex,1,{...userOld,...req.body})
    res.json(userOld);
}

exports.deleteUser = (req,res)=>{
    const id=req.params.id;
    const userIndex=user.findIndex( p => p.id === (+id));
    const userOld=user[userIndex];
    user.splice(userIndex,1)
    res.json(userOld);
}
