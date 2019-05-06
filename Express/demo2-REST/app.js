var express=require('express');

var app=express();

app.set('port',process.env.PORT||3000);

//set app router
app.get('/',function(req,res){
	res.type('text/plain');
	res.send('Meadowlark Travel');
});

app.get('/about',function(req,res){
	res.type('text/plain');
	res.send('About Meadowlark Travel');
});

//set 404 page
app.use(function(req,res,next){
	res.type('text/plain');
	res.status(404);
	res.send('404 - NOT FOUND');
})

//set 500 page
app.use(function(res,req){
	res.type('text/plain');
	res.status(500);
	res.send('500 - Internal Error');
})

app.listen(app.get('port'),function(res,req){
	console.log('Express started on http://localhost:'+app.get('port')+';')
});