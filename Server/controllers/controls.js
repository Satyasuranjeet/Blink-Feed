const User=require("../models/user")
const bcrypt=require('bcrypt')
const postData=async (req,res)=>{
	const { name, email, password, phone } = req.body;
	const data={
		name:name,
		email:email,
		password:password,
		phone:phone

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
	const{name,password}=req.body
	try {
		
		
		const user =await User.findOne({name:name});
		let auth=await bcrypt.compare(password,user.password)
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