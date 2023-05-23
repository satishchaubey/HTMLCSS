const fs=require('fs');
const index=fs.readFileSync('index.html','utf-8');
const data=JSON.parse(fs.readFileSync('data.json','utf-8'));
const album=data.albums;


exports.getAlbum = (req,res) => {
    res.json(album)
}

exports.getAllAlbum = (req,res) => {
    const id=req.params.id;
    const albumFind=album.find( p=> p.id === (+id));
    res.json(albumFind);
}

exports.createAlbum = (req,res)=>{
    console.log(req.body);
    album.push(req.body);
    res.json(req.body);
}  

exports.replaceAlbum = (req,res)=>{
    const id=req.params.id;
    const albumIndex=album.findIndex( p => p.id === (+id));
    const albumOld=album[albumIndex];
    album.splice(albumIndex,1,{...req.body,id:id})
    res.json(albumOld);
}

exports.updateAlbum = (req,res)=>{
    const id=req.params.id;
    const albumIndex=album.findIndex( p => p.id === (+id));
    const albumOld=album[albumIndex];
    album.splice(albumIndex,1,{...albumOld,...req.body})
    res.json(albumOld);
}

exports.deleteAlbum = (req,res)=>{
    const id=req.params.id;
    const albumIndex=album.findIndex( p => p.id === (+id));
    const albumOld=album[albumIndex];
    album.splice(albumIndex,1)
    res.json(albumOld);
}
