var express = require("express");
var app = express();

// Defining our first route
// "/" => "Hi there!"
app.get("/",function(req, res){
	res.send("Hi there!");
});

// "/bye" => "GoodBye"
app.get("/bye", function(req, res){
	res.send("Goodbye!");
});

// "/cat" => "Err!"
app.get("/cat", function(req, res){
	res.send("Err!");
});

app.get("/r", function(req, res){
	res.send("WELCOME TO THE REDDIT PAGE!")
});

app.get("/r/:subredditName", function(req, res){
	subreddit = req.params.subredditName;
	console.log(req.params);
	console.log("Someone requested " + subreddit + " subreddit");
	res.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBREDDIT !")
});

app.get("/r/:subredditName/comments/:id/:title", function(req, res){
	subreddit = req.params.subredditName;
	console.log(req.params);
	console.log("Someone requested comment section of '" + subreddit + "' subreddit");
	res.send("WELCOME TO THE COMMENT SECTION OF " + subreddit.toUpperCase() + " SUBREDDIT !")
});





// Tell Express to listen for request (Start Server)

// app.listen(3000, function() { 
//   console.log('Server listening on port 3000'); 
// });

// OR

app.listen(process.env.PORT || 3000, process.env.IP, function(){
	console.log("server has started!");
});	