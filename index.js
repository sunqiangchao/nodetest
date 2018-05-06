var server = require("./server");
var route = require("./route");
var requestHandler = require("./requestHanlder");

var handler = {};
handler["/"] = requestHandler.start;
handler["/start"] = requestHandler.start;
handler["/upload"] = requestHandler.upload;
handler["/show"] = requestHandler.show;

server.start(route.route,handler);