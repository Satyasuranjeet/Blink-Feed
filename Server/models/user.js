const mongoose =require ("mongoose")
const Schema = new mongoose.Schema({
	user:{
		type :String ,
		required:[true,"Please add an username"],
		
			
	},
	email:{
		type :String ,
		required:[true,"Please add an Email"],
		unique:true
			
	},
	password: {
		type: String,
		required:[true,"Please add a name"]
	}
});

module.exports=mongoose.model("User",Schema);
			