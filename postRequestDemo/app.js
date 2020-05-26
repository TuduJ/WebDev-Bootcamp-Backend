var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var friends = ["Nitu", "Sarwan", "Panju", "Nitin"];

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");


app.get("/", function(req, res){
	res.render("home");	
});

app.post("/addFriend", function(req, res){
	var newFriend = (req.body.newfriend);
	friends.push(newFriend);
	// res.send("You have reached the post route!!");
	res.redirect("friends");
});

app.get("/friends", function(req, res){
	res.render("friends", {frnd: friends});
});

app.listen(process.env.PORT || 3000, process.env.IP, function(){
	console.log("Server started!!");
});
