var express                 = require('express'),
    app                     = express(),
    passport                = require("passport"),
    bodyParser              = require('body-parser'),
    User                    = require("./models/user"),
    LocalStrategy           = require("passport-local"),
    passportLocalMongoose   = require("passport-local-mongoose"),
    mongoose                = require('mongoose');

// APP CONFIG
mongoose.connect("mongodb://localhost:27017/auth_demo_app", { useNewUrlParser: true });
app.set("view engine", "ejs");

app.use(require("express-session")({
    secret: "This is my secret key",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.urlencoded({ extended: true }));
mongoose.set("useFindAndModify", false);

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

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