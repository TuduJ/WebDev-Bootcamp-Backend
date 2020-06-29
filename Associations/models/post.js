var mongoose = require("mongoose");


// POST - title, content
var postSchema = new mongoose.Schema({
	title: String,
	content: String
});

module.export = mongoose.model("Post", postSchema);