var toggle = document.getElementsByTagName("button")[0];

var body = document.getElementsByTagName("body")[0];

// VERSION 1

toggle.addEventListener("click", function() {
    body.classList.toggle("myBody");
});

// VERSION 2

// var isTrue = true;

// toggle.addEventListener("click", function() {
//     if (isTrue == true) {
//         body.style.background = "orange";
//         isTrue = false;
//     } else {
//         body.style.background = "purple";
//         isTrue = true;
//     }
// })