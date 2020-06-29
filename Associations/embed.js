var mongoose = require("mongoose");


mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost/blog_demo");



// POST - title, content
var postSchema = new mongoose.Schema({
	title: String,
	content: String
});

var Post = mongoose.model("Post", postSchema);



// USER - email, name
var userSchema = new mongoose.Schema({
	email: String,
	name: String,
	posts: [postSchema]
});

var User = mongoose.model("User", userSchema);



// // Create new user
// var newUser = new User({
// 	email: "tudu.jitendra@gmail.com",
// 	name: "Jitendra",
// });

// newUser.posts.push({
// 	title: "Demo title",
// 	content: "This is a demo content"
// });

// // Save the new user in the databse
// newUser.save(function(err, user){
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log(user);
// 	}
// });



User.findOne({name: "Jitendra"}, function(err, user){
	if(err){
		console.log(err);
	}else{
		user.posts.push({
			title: "second post",
			content: "second sample"
		});
		user.save(function(err, user){
			if(err){
				console.log(err);
			}else{
				console.log(user);
			}
		});
	}
});

// var newPost = new Post({
// 	title: "Demo title",
// 	content: "This is a demo content"
// });

// newPost.save(function(err, post){
// 	if(err){
// 		console.log(err);
// 	}else{
// 		console.log(post);
// 	}
// });