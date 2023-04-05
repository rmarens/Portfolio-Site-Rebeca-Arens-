console.log("Hi! Welcome to my portfolio site. Take a look around--I hope you enjoy checking out my work!");

function menuToggle() {
    var x = document.getElementById("myNavtoggle");
    if (x.className === "navtoggle") {
        x.className += " responsive";
    } else {
        x.className = "navtoggle";
    }
}

AOS.init();
