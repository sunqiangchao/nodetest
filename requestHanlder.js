var exec = require("child_process").exec;
var querystring = require("querystring");
var fs = require("fs");
var formidable = require('formidable');
var util = require('util');
function start(request,response){
	
	console.log("Request Handler From start");
	//function sleep(milliSecond){
	//	var startTime = new Date().getTime();
	//	while(new Date().getTime() < startTime+milliSecond);
	//}
	//sleep(10000);
	//return "Hello Start";
	
	 ////exec("ls -lah", function (error, stdout, stderr) {
    //response.writeHead(200, {"Content-Type": "text/plain"});
    //response.write(stdout);
    //response.end();
  //});
 var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" enctype="multipart/form-data" '+
    'method="post">'+
    '<input type="file" name="upload" multiple="multiple">'+
    '<input type="submit" value="Upload file" />'+
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();

  
}

function upload(request,response){
	
	console.log("Request handler 'upload' was called.");
  //response.writeHead(200, {"Content-Type": "text/plain"});
  //response.write("You've sent: " + querystring.parse(postData).text);//querystring.parse(postData).text
  //response.end();
   var form = new formidable.IncomingForm();
  console.log("about to parse");
  form.parse(request, function(error, fields, files) {
    console.log("parsing done");
    fs.renameSync(files.upload.path, "/tmp/test.jpg");
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("received image:<br/>");
    response.write("<img src='/show' />");
    response.end();
  });
}


function show(request,response) {
  console.log("Request handler 'show' was called.");
  fs.readFile("c:/tmp/test.jpg", "binary", function(error, file) {
    if(error) {
      response.writeHead(500, {"Content-Type": "text/plain"});
      response.write(error + "\n");
      response.end();
    } else {
      response.writeHead(200, {"Content-Type": "image/jpeg"});
      response.write(file, "binary");
      response.end();
    }
  });
}


exports.start = start;
exports.upload = upload;
exports.show = show;