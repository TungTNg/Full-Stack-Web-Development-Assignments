var express             = require('express'),
    app                 = express(),
    bodyParser          = require('body-parser'),
    mongoose            = require('mongoose');

// APP CONFIG
mongoose.connect("mongodb://localhost:27017/auth_demo_app", { useNewUrlParser: true });
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.set("useFindAndModify", false);

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/secret", function(req, res) {
    res.render("secret");
});

// RUN CONFIG
app.listen(3080, function() {
    console.log("Auth Server Has Started!");
})