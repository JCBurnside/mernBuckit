var passport=require('passport'),
	User=require('../models/user'),
	config=require('../config'),
	JWTStrat=require('passport-jwt').Strategy,
	ExtractJWT=require('passport-jwt').ExtractJwt,
	jwtOptions={
		jwtFromRequest:ExtractJWT.fromHeader('authorization'),
		secretOrKey:config.secret
	};
var jwtLogin=new JWTStrat(jwtOptions,(payload,done)=>{
	User.findById(payload.sub,(err,user)=>{
		if(err) return done(err,false);
		if(user) return done(null,user);
		done(null,false);
	});
});
passport.use(jwtLogin);