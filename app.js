var express = require("express"),
	app = express(),
	server = require("http").createServer(app),
	io = require("socket.io").listen(server);

server.listen(process.env.PORT || 3000, () => {
	console.log("Server's working on " + 3000)
});

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

io.sockets.on("connection", (socket) => {
	console.log("Connected");
	//Send Message
	socket.on("send-message", (data) => {
		io.sockets.emit("new-message", {
			msg: data
		});
	});
});