const mongoose =require ("mongoose")
const Schema = new mongoose.Schema({
	name:{
		type :String ,
		required:[true,"Please add an username"],
		unique:true
			
	},
	email:{
		type :String ,
		required:[true,"Please add an Email"],
		unique:true
			
	},
	password: {
		type: String,
		required:[true,"Please add a name"]
	},
	phone: {
		type: Number,
		required:[true,"Please add a Phone Number"]
	},
});

module.exports=mongoose.model("User",Schema);
			