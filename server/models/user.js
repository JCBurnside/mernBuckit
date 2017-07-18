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
userSchema.pre('save',function(next){
	var user=this;
	console.log("IN PRE-SAVE")
	bcrypt.genSalt(10,(err,salt)=>{
		if(err){
			console.log("GEN SALT ERRORED")
			return next(err);
		}
		bcrypt.hash(user.password,salt,null,(err,hash)=>{
			if(err){
				console.log("HASH FAILED");
				return next(err);
			}
			console.log(hash);
			user.password=hash;
			next();     
		})
	})
});
userSchema.methods.comparePassword=function(candidate,callback) {
	bcrypt.compare(candidate,this.password,(err,isMatch)=>{
		if(err)return callback(err);
		callback(null,isMatch);
	});
};
module.exports=mongoose.model('user',userSchema);