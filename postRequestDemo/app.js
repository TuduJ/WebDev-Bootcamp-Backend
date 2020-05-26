var express = require("express");
var app = express();

app.set("view engine", "ejs");


app.get("/", function(req, res){
	res.render("home");	
});

app.post("/addFriend", function(req, res){
	res.send("You have reached the post route!!");
});

app.get("/friends", function(req, res){
	var friends = ["Nitu", "Sarwan", "Panju", "Nitin"];
	res.render("friends", {frnd: friends});
});

app.listen(process.env.PORT || 3000, process.env.IP, function(){
	console.log("Server started!!");
});
