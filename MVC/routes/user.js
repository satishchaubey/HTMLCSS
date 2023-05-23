const express=require('express');
const userController=require('../controllers/users');

const router =express.Router();


router
.get('/',userController.getUser)
.get('/:id',userController.getAllUser)
.post('/:id',userController.createUser)
.put('/:id',userController.replaceUser)
.patch('/:id',userController.updateUser)
.delete('/:id',userController.deleteUser);

exports.router=router;