function route(handler,pathname,request,response){
	console.log("Request route pathname:"+pathname);
	
	if(typeof handler[pathname] ==='function'){
		return handler[pathname](request,response);
	}else{
		console.log("no request handler found for "+ pathname);
		 response.writeHead(404, {"Content-Type": "text/plain"});
		response.write("404 Not found");
		response.end();
	}
}
exports.route = route;