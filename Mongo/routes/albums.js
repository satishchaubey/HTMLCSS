const express=require('express');
const albumController=require('../controllers/albums');

const router =express.Router();


router
.get('/',albumController.getAlbum)
.get('/:id',albumController.getAllAlbum)
.post('/:id',albumController.createAlbum)
.put('/:id',albumController.replaceAlbum)
.patch('/:id',albumController.updateAlbum)
.delete('/:id',albumController.deleteAlbum);

exports.router=router;