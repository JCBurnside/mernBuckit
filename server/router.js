var Auth=require('./controllers/auth.js'),
	PS=require('./services/passport'),
	passport=require('passport'),
	requirAuth=passport.authenticate('jwt',{session:false});
module.exports=app=>{
	app.get('/',requirAuth,(req,res)=>{
		res.send('Hello Homepage');
	})
	app.post('/signup',Auth.signup);
}