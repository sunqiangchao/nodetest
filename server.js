var http = require("http");
var url = require("url");
function start(route,handler){
	http.createServer(function(req,res){
	console.log("request received");
	//var postData = "";
	var pathname = url.parse(req.url).pathname;
	console.log("pathname："+pathname);
	
	
	 //req.setEncoding("utf8");

    //req.addListener("data", function(postDataChunk) {
     // postData += postDataChunk;
     // console.log("Received POST data chunk '"+postDataChunk + "'.");
    //});

   // req.addListener("end", function() {
   //   route(handler, pathname,req, res, postData);
   // });
	
	route(handler,pathname,req,res);
	
	
}).listen(8888);

console.log("server has started");
	
}
exports.start = start;