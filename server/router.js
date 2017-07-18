var Auth=require('./controllers/auth.js'),
	PS=require('./services/passport'),
	passport=require('passport'),
	BucketList=require('./controllers/bucketlistcontroller.js')
	requireSignin=passport.authenticate('local',{session:false}),
	requireAuth=passport.authenticate('jwt',{session:false});
module.exports=app=>{
	app.get('/',requireAuth,(req,res)=>{
		res.send({message:'hey'});
	})
	// app.use((req,res,next)=>{
	// 	res.header('access-control-allow-origin','*');//allow all cross-origin request
	// 	res.header('access-control-allow-methods','GET,POST,PUT,DELETE');
	// 	res.header('access-control-allow-headers','Origin,X-Requested-With,Content-Type,Accept,Authorization');
	// 	next();
	// });
	app.post('/signup',Auth.signup);
	app.post('/signin',requireSignin,Auth.signin);
	app.post('/newitem',requireAuth,BucketList.addBucketList);
	app.get('/items',requireAuth,BucketList.fetchBucketLists);
}