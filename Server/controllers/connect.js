const mongoose =require ("mongoose")
const connect=async ()=>{
	try {
		await mongoose.connect("mongodb://localhost:27017/Testing");
		console.log("MongoDb connected !!");
	} catch (error) {
				console.log("MongoDb Unable to Connect ");
	}
}

module.exports=connect
