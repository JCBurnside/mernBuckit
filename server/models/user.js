var mongoose=require('mongoose'),
	Schema=mongoose.Schema,
	userSchema=new Schema({
		email:{
			type:String,
			unique:true,
			lowercase:true
		},
		password:String
	});
module.exports=mongoose.model('user',userSchema);