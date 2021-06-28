var net = require("net");
var server = net.createServer( (client) => {
  console.log("client connected");
  client.on("data", function(data) {
    client.write(data);
  });
  client.on("close", function() {
    console.log("client disconnected");
  });
});
server.listen(1234, function() {
  console.log("TCP server started");
});
 
