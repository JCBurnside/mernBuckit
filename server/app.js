var express=require('express'),
	http=require('http'),
	bodyParser=require('body-parser'),
	port=process.env.PORT||3000,
	app=express(),
	server=http.createServer(app);
app.use(bodyParser.json({type:'*/*'}));
server.listen(port,()=>{
	console.log('Listening on port :',port)
});