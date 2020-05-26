var express = require("express");
var app = express();

// Route for "/" should print "Hi there, welcome to my assignment!"

app.get("/", function(req, res){
	res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res){
	
	var sounds = {
		dog : "Woof! Woof!",
		cat : "Meow!",
		cow : "Moo!",
		pig : "Oink! Oink!",
		goat : "Bleat!"
	}
	var animal = req.params.animal.toLowerCase();
	var sound = sounds[animal];
	res.send("The " + animal + " says '" + sound + "'");
});


app.get("/repeat/:word/:n", function(req, res){
	var str = req.params.word;
	var n = Number(req.params.n);
	var result = "";
	for (var i = 0; i < n; i++){
		result += str + " ";
	}
	res.send(result);
	
});

app.get("*", function(req, res){
	res.send("Sorry, page not found... What are you doing with your life?");
});


// Tell express to listen for request (Start Server)

app.listen(process.env.PORT || 3000, process.env.IP, function(){
	console.log("Server Connected...!");
});