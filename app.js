var http = require("http");
var colors = require("colors");

colors.setTheme({
  stripes: "zebra",
  warning: "red",
  attention: "underline"
});

function onRequest(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World!!");
  response.end();
};

http.createServer(onRequest).listen(8888);

console.log("Server has started on 8888".stripes.warning.attention);