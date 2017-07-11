var express=require('express'),
	http=require('http'),
	bodyParser=require('body-parser'),
	port=process.env.PORT||3000,
	app=express(),
	router=require('./router');
app.use(bodyParser.json({type:'*/*'}));
router(app);

var server=http.createServer(app);
server.listen(port,()=>{
	console.log('Listening on port :',port)
});