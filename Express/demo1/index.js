var http = require('http'),
	fs=require('fs');

function serveStaticFile(res,path,contnetType,responseCode){// __dirname 全局变量定义到当前js文件位置
	if(!responseCode) responseCode=200;
	fs.readFile(__dirname+path,function(err,data){
		if(err){
			res.writeHead(500,{'Content-Type':'text/plain'});
			res.end('500 - Internal Error');
		}
		else
		{
			res.writeHead(responseCode,{'Content-Type':'ContentType'});
			res.end(data);
		}
	});
}

http.createServer(function(req, res){
	//规范化url,去掉查询字符串，可选的反斜杠
	var path=req.url.replace(/\/?(?:\?.*)?$/,'').toLowerCase();//表示/和可选的转移/ 组扑获(?:扑获后不显示)
	switch(path){
		case '/index':
			serveStaticFile(res,'/public/home.html','text/html');
			break;
		case '/about':
			serveStaticFile(res,'/public/about.html','text/html');
			break;
		case '/img/logo.jpg':
			serveStaticFile(res,'/public/img/logo.jpg','image/jepg');
			break;
		default:
			serveStaticFile(res,'/public/404.html','text/html',404);
			break;
		}
}).listen(3000);

console.log('Server started on localhost:3000')