const express=require('express')
const {postData, authData}=require('../controllers/controls')
	const router=express.Router()
	router.post('/',postData);
	router.post('/auth',authData)

	module.exports=router