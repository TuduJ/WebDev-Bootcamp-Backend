var bodyParser 			= require("body-parser"),
	methodOverride 		= require("method-override"),
	expressSanitizer 	= require("express-sanitizer"),
	mongoose 			= require("mongoose"),
	express 			= require("express"),
	app					= express();
	


// APP CONFIG
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost/restful_blog_app");
// mongoose.connect("mongodb://localhost:27017/restful_blog_app", {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('useFindAndModify', false);

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.use(methodOverride("_method"));



// MONGOOSE/MODEL CONFIG
var blogSchema = new mongoose.Schema({
	title: String,
	image: String,
	body: String,
	created: 
			{
				type: Date,
				default: Date.now
			}
});

var Blog = mongoose.model("Blog", blogSchema);


// title
// image 
// body
// created


// Blog.create({
// 	title: "Test Blog",
// 	image: "https://images.unsplash.com/photo-1570824104453-508955ab713e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=913&q=80",
// 	body: "Hello this is a blog post"
// });



// RESTFUL Routes


// INDEX ROUTE
app.get("/", function(req, res){
	res.redirect("/blogs");
});


app.get("/blogs", function(req, res){
	Blog.find({}, function(err, blogs){
		if(err){
			console.log(err);
		}else{
			res.render("index", {Blog: blogs});
		}
	})
	
});


// NEW ROUTE
app.get("/blogs/new", function(req, res){
	res.render("new");
});


// CREATE ROUTE
app.post("/blogs", function(req, res){
	// console.log(req.body);
	req.body.blog.body = req.sanitize(req.body.blog.body);
	// console.log("===========");
	// console.log(req.body);
	Blog.create(req.body.blog, function(err, newBlog){
		if(err){
			res.render("new");
		}else{
			res.redirect("/blogs");
		}
	})
});


// SHOW ROUTE
app.get("/blogs/:id", function(req, res){
	Blog.findById(req.params.id, function(err, foundBlog){
		if(err){
			res.redirect("/blogs");
		}else{
			res.render("show", {blog: foundBlog});
		}
	});
});


// EDIT ROUTE
app.get("/blogs/:id/edit", function(req, res){
	Blog.findById(req.params.id, function(err, editBlog){
		if(err){
			res.redirect("/blogs");
			// console.log(err);
		}else{
			res.render("edit", {blog: editBlog});
		}
	});
});


// UPDATE ROUTE
app.put("/blogs/:id", function(req, res){
	req.body.blog.body = req.sanitize(req.body.blog.body);
	Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updatedBlog){
		if(err){
			res.redirect("/blogs");
		}else{
			res.redirect("/blogs/" + req.params.id);
		}
	})
});


// DELETE ROUTE
app.delete("/blogs/:id", function(req, res){
	Blog.findByIdAndRemove(req.params.id, function(err){
		if(err){
			res.redirect("/blogs");
		}else{
			res.redirect("/blogs");
		}
	});
});


app.listen(process.env.PORT || 3000, process.env.IP, function(){
	console.log("Server is Running!!");
});