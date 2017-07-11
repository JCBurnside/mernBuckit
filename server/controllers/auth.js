var User=require('../models/user');
exports.signup = (req,res,next)=>{
	var email=req.body.email.toLowerCase(),
		password=req.body.password;
	if(!email||!password)
		return res.status(418).send({error:"Email or password not provided"});
	User.findOne({email:email},(err,existingUser)=>{
		if(err)
			return next(err);
		if(existingUser)
			return res.status(418).send("Email is in use");
		var user=new User({
			email:email,
			password:password
		});
		user.save(err=>{
			if(err)
				return next(err);
			res.json({success:true});
		});
	})
};