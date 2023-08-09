const User=require("../models/user")
const bcrypt=require('bcrypt')
const postData=async (req,res)=>{
	const { user, email, password } = req.body;
	const data={
		user:user,
		email:email,
		password:password,
}
try {
	let salt=await bcrypt.genSalt()
	let hashpassword=await bcrypt.hash(data.password,salt)
	data.password=hashpassword
	const user=new User(data);
	await user.save() 
	res.json({message:"success",user:user});
} catch (error) {
	// res.send("Not added Successfully !") 
	console.log(error);
	res.json({message:"failure"});
}

}

const authData=async(req,res)=>{
	const{user,password}=req.body
	// console.log(req.body);
	try {
		
		
		const UserData =await User.findOne({user:user});
		// console.log(UserData);
		let auth=await bcrypt.compare(password,UserData.password)
		// console.log(auth);
		if(user){

			if(!auth){
				 res.json({message:"Wrong Credentials !"}); 
			}
			else	
			res.json({message:"authorized"});
					
		}
			

} 
catch (error) {
	console.log(error);
	res.status(500).send("something went wrong!")
}

}

module.exports={postData,authData}