var express = require("express");
var cors = require("cors");

// Express
var app = express();

// Express Middleware
app.use(cors());
app.use(express.static("client"));

// Connections
var port = process.env.PORT || 8450;
app.listen(port, function() {
	console.log("listening on port: ", port);
});