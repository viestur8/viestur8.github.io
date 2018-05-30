function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navbar-collapse") {
        x.className += " responsive";
    } else {
        x.className = "navbar-collapse";
    }
}
