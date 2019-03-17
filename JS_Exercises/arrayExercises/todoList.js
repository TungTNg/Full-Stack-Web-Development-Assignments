
var todo = ["study for exam"];

window.setTimeout(function(){
    var input = prompt("What would you like to do?");
    
    while (input !== "quit") {
    if (input == "new") {
        newTodo();
        listTodo();
    } else if (input == "delete") {
        deleteTodo();
        listTodo();
    } else if (input == "list") {
        listTodo();
    }
    
    input = prompt("What would you like to do?");
}
    console.log('Ookaay! YOU\'VE QUIT THE AWESOME APP!!!');
    
    function newTodo(){
        var newTodo = prompt("Please enter a new todo:");
        todo.push(newTodo);
        console.log("\"" + newTodo + "\" " + "has been added to your todo list!");
    }
    
    function listTodo() {
        console.log ("*******YOUR TODO LIST*******");
        for (var i = 0; i < todo.length; i++) {
            console.log(i + ": " + todo[i]);
        }
        console.log ("****************************");
    }
    
    function deleteTodo() {
        var deleteTodo = prompt("Please enter the index of todo that you want to delete:");
        console.log("\"" + todo[deleteTodo] + "\" " + "has been removed from your todo list!");
        todo.pop(deleteTodo);
    }
    
    
}, 1000);



