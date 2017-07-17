var BucketList=require('../models/bucketlist.js');
exports.addBucketList=function(req,res,next){
	var title=req.body.title||req.body.props.title,
		topic=req.body.topic||req.body.props.topic,
		url=req.body.url||req.body.props.url,
		content=req.body.content||req.body.props.content,
		specificUser=req.body.specificUser||req.body.props.user._id,
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