var bodyParser 	= require("body-parser"),
	mongoose 	= require("mongoose"),
	express 	= require("express"),
	app			= express();
	

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect("mongodb://localhost/restful_blog_app");
// mongoose.connect("mongodb://localhost:27017/restful_blog_app", {useNewUrlParser: true, useUnifiedTopology: true});

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));

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



app.listen(process.env.PORT || 3000, process.env.IP, function(){
	console.log("Server is Running!!")
})