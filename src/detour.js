var imageClicker = document.getElementById("detour-img");

imageClicker.addEventListener("click", function() {
    console.log("I was clicked");
    console.log(imageClicker.src);
    if (imageClicker.src == "http://localhost:8889/src/images/propaganda.jpg") {
        imageClicker.src = "http://localhost:8889/src/images/propaganda2.jpg";
    } else {
        imageClicker.src = "http://localhost:8889/src/images/propaganda.jpg";
    }
})