var Auth=require('./controllers/auth.js'),
	PS=require('./services/passport'),
	passport=require('passport'),
	requireSignin=passport.authenticate('local',{session:false}),
	requireAuth=passport.authenticate('jwt',{session:false});
module.exports=app=>{
	app.get('/',requireAuth,(req,res)=>{
		res.send('Hello Homepage');
	})
	app.post('/signup',Auth.signup);
	app.post('/signin',requireSignin,Auth.signin);
}