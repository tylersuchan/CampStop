var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
   
   {name: "Salmon Creek", image: "https://img.hipcamp.com/image/upload/c_fill,f_auto,g_auto,h_504,q_60,w_770/v1445485223/campground-photos/fnqqusfbuyxsyrizknsj.jpg"},
   {name: "Fake Site 1", image: "https://img.hipcamp.com/image/upload/v1440984333/journal/dsktfmznlzs3unxwkdnr.jpg"},
   {name: "Fake Site 2", image:"https://static.starsinsider.com/1920/na_5ae755461e7f7.jpg"},
   {name: "Fake Site 2", image:"https://static.starsinsider.com/1920/na_5ae755461e7f7.jpg"},
   {name: "Fake Site 2", image:"https://static.starsinsider.com/1920/na_5ae755461e7f7.jpg"},
   {name: "Fake Site 2", image:"https://static.starsinsider.com/1920/na_5ae755461e7f7.jpg"},
   {name: "Fake Site 2", image:"https://static.starsinsider.com/1920/na_5ae755461e7f7.jpg"},
   {name: "Fake Site 2", image:"https://static.starsinsider.com/1920/na_5ae755461e7f7.jpg"}
   
   ]; 


app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    //redirect back to campgrounds page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
   res.render("new"); 
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Your app has started!");
});