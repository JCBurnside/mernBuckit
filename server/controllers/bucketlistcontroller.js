var BucketList=require('../models/bucketlist.js');
exports.addBucketList=function(req,res,next){
	console.log(req);
	var title=req.body.title||req.body.props.title,
		topic=req.body.topic||req.body.props.topic,
		url=req.body.url||req.body.props.url,
		content=req.body.content||req.body.props.content,
		specificUser=req.body.user||req.user._id,
		bucketList=new BucketList({
			title:title,
			topic:topic,
			url:url,
			content:content,
			specificUser:specificUser
		});
		bucketList.save(function(err){
			if(err)
				return next(err);
			res.json(bucketList);
		});
}
exports.fetchBucketLists=function(req,res){
	var specificUser=req.user._id;
	BucketList.find({specificUser:specificUser})
	.then(
		function(data){
			res.json(data);
		},
		function(err){
			res.satus(500).send(err.message);
		}
	);
}