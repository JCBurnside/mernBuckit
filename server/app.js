var express=require('express'),
	http=require('http'),
	bodyParser=require('body-parser'),
	port=process.env.PORT||3000,
	app=express(),
	mongoose=require('mongoose'),
	router=require('./router'),
	cors=require('cors');
mongoose.connect('mongodb://localhost:bucket/bucket');
app.use(cors());
app.use(bodyParser.json({type:'*/*'}));
router(app);

var server=http.createServer(app);
server.listen(port,()=>{
	console.log('Listening on port :',port);
});