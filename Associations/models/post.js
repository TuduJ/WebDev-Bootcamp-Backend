var mongoose = require("mongoose");

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);


// POST - title, content
var postSchema = new mongoose.Schema({
	title: String,
	content: String
});

module.exports = mongoose.model("Post", postSchema);