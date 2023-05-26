const express=require('express');
const userController=require('../controllers/users');

const router =express.Router();


router
.get('/',userController.getAllUser)
.post('/',userController.createUser)
.get('/:id',userController.getUser)
.put('/:id',userController.replaceUser)
.patch('/:id',userController.updateUser)
.delete('/:id',userController.deleteUser);

exports.router=router;