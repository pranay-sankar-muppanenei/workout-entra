const {signUser,loginUser,userList,microsoftLogin} =require('../controllers/authController');
const express=require('express');
const router=express.Router();


router.get('/users',userList);
router.post('/login',loginUser);

router.post('/signup',signUser);

router.get('/microsoft-login', microsoftLogin);

module.exports=router