//responsive nav
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navbar-collapse") {
        x.className += " responsive";
    } else {
        x.className = "navbar-collapse";
    }
}



$("#pay-btn").click(function(){
var donation = $("#donate-amount").val();
if (donation == 1000000) {
$("#display-result").text("You've made the first step toward ending human suffering, congratulations! Please continue to donate to make a meaningful contribution to the organization and the world!").css("color", "black");
} else if (donation == 100000){
$("#display-result").text("Getting warmer... but did you really think this was enough?").css("color", "red");
} else if (donation == 10000){
$("#display-result").text("That's very cute, but please select a real amount").css("color", "red");
} else {
$("#display-result").text("Please select an amount.");
}
});
