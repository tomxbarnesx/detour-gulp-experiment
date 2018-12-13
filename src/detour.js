// var imageClicker = document.getElementById("detour-img");

// imageClicker.addEventListener("click", function() {
//     console.log("I was clicked");
//     console.log(imageClicker.src);
//     if (imageClicker.src == "http://localhost:8889/src/images/propaganda.jpg") {
//         imageClicker.src = "http://localhost:8889/src/images/propaganda2.jpg";
//     } else {
//         imageClicker.src = "http://localhost:8889/src/images/propaganda.jpg";
//     }
// })

let detourTrigger = document.getElementById("detour-trigger");
let detourVid = document.getElementById("detour-vid");
let detourReturn = document.getElementById("detour-return")

detourTrigger.addEventListener("click", function() {
    detourVid.play();
})

detourReturn.addEventListener("click", function(){
    detourVid.pause();
})

