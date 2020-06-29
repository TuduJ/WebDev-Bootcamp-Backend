var mongoose = require("mongoose");


mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost/blog_demo_2");


var Post = require("./models/post");
var User = require("./models/user");



// //Create a user
// User.create({
// 	email: "t.jason@edu",
// 	name: "Jason"
// });


// Create a posts
Post.create({
	title: "Sample post 3",
	content: "Sample content 3"
}, function(err, post){
	User.findOne({email: "t.jason@edu"}, function(err, foundUser){
		if(err){
			console.log(err);
		}else{
			foundUser.posts.push(post);
			foundUser.save(function(err, data){
				if(err){
					console.log(err);
				}else{
					console.log(data);
				}
			});
		}
	});
});




// Find the user
// Find post for that user

// User.findOne({email: "t.jason@edu"}).populate("posts").exec(function(err, user){
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log(user);
// 	}
// });