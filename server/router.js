var Auth=require('./controllers/auth.js'),
	User=require('./models/user');
module.exports=app=>{
	app.post('/signup',Auth.signup);
}