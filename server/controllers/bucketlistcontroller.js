var BucketList=require('../models/bucketlist.js');
exports.addBucketList=function(req,res,next){
	var title=req.body.title||req.body.props.title,
		topic=req.body.topic||req.body.props.topic||req.body.props.category,
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
exports.fetchBucketList=function(req,res){
	var specificBucketList=req.params.id;
	BucketList.findOne({_id:specificBucketList})
	.then(data=>{
			res.json(data);
		},err=>{
			res.status(500).send(err.message);
		}
	);
}
exports.deleteBucketList=function(req,res) {
	var specificBucketList=req.params.id;
	BucketList.remove({_id:specificBucketList})
	.then(data=>{
			res.json(data);
		},err=>{
			res.status(500).send(err.message);
		}
	);
}
exports.updateBucketList=function(req,res){
	var specificBucketList=req.params.id;
	BucketList.findById(specificBucketList,function(err,bucketlistUpdate){
		if(err){
			res.status(500).send(err.message);
		}else{
			bucketlistUpdate.title=req.body.props.title;
			bucketlistUpdate.topic=req.body.props.topic;
			bucketlistUpdate.url=req.body.props.url;
			bucketlistUpdate.content=req.body.props.content;
			bucketlistUpdate.save(function(err,bucketlist){
				if(err)
					res.status(500).send(err.message)
				else
					res.send(bucketlist);
			})
		}
	})
}