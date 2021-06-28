var net = require("net");
var client = net.connect({ port: 1234 }, function () {
  console.log("connected to server!");
  client.write("hello server");
});
client.on("data", function (data) {
  client.write(data);
});
client.on("end", function () {
  client.end();
  console.log("disconnected from server");
});
