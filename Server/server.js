const express=require("express")
const connect=require("./controllers/connect")
const routes=require("./routes/route")
const cors=require('cors')
const app=express() 
app.use(cors({ 
	origin:'*'
})) 
app.use(express.json()) 
app.use(express.urlencoded({extended:true}))
const run=async()=>connect();
run()
app.get('/',(req,res)=>{
	res.json({message:"hello"}) 
})
app.use('/login',routes)

app.listen(80,()=>{console.log(`Server started @ http:/localhost`);})