var mongoose = require("mongoose");

// USER - email, name
var userSchema = new mongoose.Schema({
	email: String,
	name: String,
	posts: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Post"
		}
	]
});

module.export = mongoose.model("User", userSchema);