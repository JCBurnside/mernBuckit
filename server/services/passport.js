var passport=require('passport'),
	User=require('../models/user'),
	config=require('../config'),
	JWTStrat=require('passport-jwt').Strategy,
	ExtractJWT=require('passport-jwt').ExtractJwt,
	LocalStrategy=require('passport-local'),
	jwtOptions={
		jwtFromRequest:ExtractJWT.fromHeader('authorization'),
		secretOrKey:config.secret
	},
	localOptions={usernameField:'email'}
	localLogin=new LocalStrategy(localOptions,(email,password,done)=>{
		User.findOne({email:email},(err,user)=>{
			if(err)return done(err);
			if(!user)return done(null,false);
			user.comparePassword(password,(err,isMatch)=>{
				if(err)return done(err);
				if(!isMatch)return done(null,false);
				return done(null,user);
			});
		});
	}),
	jwtLogin=new JWTStrat(jwtOptions,(payload,done)=>{
		User.findById(payload.sub,(err,user)=>{
			if(err) return done(err,false);
			if(user) return done(null,user);
			done(null,false);
		});
	});
passport.use(jwtLogin);
passport.use(localLogin);