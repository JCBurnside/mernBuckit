module.exports=app=>{
	app.get('/',(req,res,next)=>{
		res.send("HELLO HOMEPAGE");
	});
	app.get('/signup',(req,res,next)=>{
		res.send("SIGNUP");
	})
}