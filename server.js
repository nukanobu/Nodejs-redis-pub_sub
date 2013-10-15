//server  
var express = require('express');
//listen
var server = express();
server.listen(10080, function(){
	console.log('createServer');
});

//HTTP get method 
server.get('/', function(req,res){
	console.log('/');
   	res.sendfile('./manage.html');
});

//HTTP get
server.get('/jquery-1.2.6.min.js', function(req,res){
	console.log('/jquery-1.2.6.min.js');
	res.sendfile('./jquery-1.2.6.min.js');
});
server.get('/socket.io/socket.io.js', function(req,res){
	console.log('/socket.io/socket.io.js');
	res.sendfile('node_modules/socket.io/lib/socket.io.js');
});

//socketio Listen
var io = require('socket.io').listen(18080);

io.sockets.on('connection',function(socket){
	//http GET for load test
	server.get('/hi', function(req,res){
   		var url = require('url').parse(req.url);
		var ql = require('querystring').parse(url.query);
		if(ql.msg){
     			if(ql.msg.length>1){
          			msg = ql.msg[0];
     			}else{
        			msg = ql.msg;
    			}	
        		socket.broadcast.emit('svr msg',msg);
		}	
    		res.setHeader("Content-Type","text/html");
    		res.statusCode=200;
    		res.end();
	});

	socket.on('client msg',function(msg){

		//msg to loga
		console.log('msg = ' + msg );
		//clietnip to log
		var ip = socket.handshake.address.address;
		console.log('ip = ' + ip);
		//check
		if(msg == '[管理者]' || msg == '[]'){
			return 0;
		}
		//mesage length check
		if(msg.length > 125){
			msg = msg.substring(0,124);
		}
		//edit mesage
		var DD = new Date();
 		var HH = ("0"+DD.getHours()).slice(-2);
 		var MM = ("0"+DD.getMinutes()).slice(-2);
 		var SS = ("0"+DD.getSeconds()).slice(-2);
 		msg = "[" + HH + ":" + MM +"." + SS +"]#   " + msg;
		console.log('msg = " + msg');
		//send message
		socket.emit('svr msg',msg);
		socket.broadcast.emit('svr msg',msg);
	});

});



