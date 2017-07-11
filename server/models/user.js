var mongoose=require('mongoose'),
	Schema=mongoose.Schema,
	userSchema=new Schema({
		email:{
			type:String,
			unique:true,
			lowercase:true
		},
		password:String
	}),
	bcrypt=require('bcrypt-nodejs');
	userSchema.pre('save',next=>{
		var user=this;
		bcrypt.genSalt(10,(err,salt)=>{
			if(err)return next(err);
			bcrypt.hash(user.password,salt,null,(err,hash)=>{
				if(err)return next(err);
				user.password=hash;
				next();
			})
		})
	})
module.exports=mongoose.model('user',userSchema);