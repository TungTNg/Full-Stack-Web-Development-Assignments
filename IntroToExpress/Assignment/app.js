var express = require("express"),
    app = express();

app.get("/", function(req, res) {
    res.send("Hi there, welcome to my assignment!"); 
});

app.get("/speak/:animal", function(req, res) {
    var animal = req.params.animal;
    switch (animal) {
        case 'pig':
            res.send("The pig says 'Oink'");
            break;
        
        case 'cow':
            res.send("The cow says 'Moo'");
            break;
        
        case 'dog':
            res.send("The dog says 'Woof Woof!'");
            break;
        
        case 'cat':
            res.send("The cat says 'Meeeoww!'");
            break;
        
        default:
            res.send(`The ${animal} says hello!!!!`);
    }
});

app.get("/repeat/:word/:number", function(req, res) {
    var word = req.params.word,
        number = req.params.number,
        listWord = [];
    for(var i = 0; i < number; i++) {
        listWord += word + " ";
    }
    res.send(listWord);
});

app.get("*", function(req, res) {
    res.send("Sorry, page not found...What are you doing with your life?");
});

app.listen(8080, function(){
    console.log("Sever is running and listening to 8080");
})