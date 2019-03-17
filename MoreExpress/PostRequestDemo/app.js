var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

var friends = ["Tony", "Mirada", "Justin", "Pierre", "Lily"];

app.get("/", function(req, res) {
    res.render("home");
});

app.post("/addfriend", function(req, res) {
    var newfriend = req.body.newfriend;
    friends.push(newfriend);
    res.redirect("friends");
});

app.get("/friends", function(req, res) {
    res.render("friends", { friends: friends });
});

app.listen(8080, function() {
    console.log("Server started!!!");
});
