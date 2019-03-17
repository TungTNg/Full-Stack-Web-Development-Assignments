var movieDB = [
    {
        title: "In Brugers",
        rating: 5,
        hasWatched: true
    },
    {   
        title: "Frozen",
        rating: 4.5,
        hasWatched: false        
    },
    {
        title: "Mad Max Fury Road",
        rating: 5,
        hasWatched: true          
    },
    {
        title: "Les Miserables",
        rating: 3.5,
        hasWatched: false          
    }
    ];
    
for (var i = 0; i < movieDB.length; i++) {
    if (movieDB[i].hasWatched === true) {
        console.log("You have watched " + movieDB[i].title + " - " + movieDB[i].rating + " stars");
    } else {
        console.log("You have not watched " + movieDB[i].title + " - " + movieDB[i].rating + " stars");
    }
}