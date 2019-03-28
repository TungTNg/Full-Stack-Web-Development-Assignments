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

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// ==========
// ROUTES
// ==========

app.get("/", function(req, res) {
    res.render("home");
});

app.get("/secret", isLoggedIn, function(req, res) {
    res.render("secret");
});

// Auth Routes

// show sign up form
app.get("/register", function(req, res) {
   res.render("register"); 
});

// handling user sign up
app.post("/register", function(req, res) {
    User.register(new User({ username: req.body.username }), req.body.password, function(err, user) {
        if(err) {
            console.log(err);
            return res.render("register");
        } 
        passport.authenticate("local")(req, res, function() {
            res.redirect("/app/secret"); 
        });
    });
});

// LOGIN ROUTES
// render login form
app.get("/login", function(req, res) {
    res.render("login");
});

// login logic
// middleware
app.post("/login", passport.authenticate("local", {
    successRedirect: "/app/secret",
    failureRedirect: "/app/login"
}), function(req, res) {
});

app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/app");
});

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    res.redirect("/app/login");
}

// RUN CONFIG
app.listen(3080, function() {
    console.log("Auth Server Has Started!");
})