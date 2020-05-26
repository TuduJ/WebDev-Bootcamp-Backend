var express = require("express");
var app = express();

app.use(express.static("public"));
// app.set("view engine", "ejs");				---> This will allow us to use the name of ejs file without using the extenion.
//													 eg:- instead of using 'res.render("index.ejs")' we can use 'res.render("index")'

app.get("/", function(req, res){
	res.render("home.ejs");
	// res.send("Connected...!!");
});

app.get("/love/:animal", function(req, res){
	var animal = req.params.animal.toUpperCase();
	res.render("love.ejs", {varAni : animal});
});

app.get("/fav/:animal", function(req, res){
	var favAni = req.params.animal.toUpperCase();
	res.render("fav.ejs", {pet : favAni});
});

app.get("/feed", function(req, res){
	var post = [
		{title : "Hi! there", author : "john"},
		{title : "This bootcamp is awesome", author : "Tudu_J"},
		{title : "Need to study Academics", author : "Tudu_J"}
	];
	res.render("feed.ejs", {posts : post})
	// res.send("Welcome to the seed!");
});

app.listen(process.env.PORT || 3002, process.env.IP, function(){
	console.log("Server connected...!");
});