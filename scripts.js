jQuery.easing.def = "easeOutQuad";
$(".myBox").click(function() {
  window.location = $(this).find("a").attr("href");
  return false;
});


// Page navigation
var isWorkCurrentPage = true;
var isAboutCurrentPage = false;

$("#logoDetailView").click(function() {
  window.location = "../../index.html";
});

$("#workPage, #logo").click(function() {
  if (!isWorkCurrentPage) {
    isWorkCurrentPage = true;
    isAboutCurrentPage = false;
    $("#workPage").attr("class", "currentPage");
    $("#aboutPage").removeClass("currentPage");

    $("#about").fadeOut(500, function() {
      $("#work").fadeIn(500);
    });
  }
});

$("#aboutPage").click(function() {
  if (!isAboutCurrentPage) {
    isAboutCurrentPage = true;
    isWorkCurrentPage = false;
    $("#aboutPage").attr("class", "currentPage");
    $("#workPage").removeClass("currentPage");
  }
  $("#work").fadeOut(500, function() {
      $("#about").fadeIn(500);
  });
});
