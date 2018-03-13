// Toggle dropdown for nav-bar
// Ensures each nav-menu is hidden before opening a new menu
$(document).ready(function(){
    $("#about").on('click', function() {
      if ($(".mark-fowler").is(":hidden") && $(".connect").is(":hidden")) {
        $(".about-dropdown").slideToggle(700);
      }
      else {
        $(".mark-fowler").css("display", "none");
        $(".connect").css("display", "none");
        $(".about-dropdown").slideToggle(700);
      }
    });
    $("#mark-fowler").on('click', function() {
      if ($(".about-dropdown").is(":hidden") && $(".connect").is(":hidden")) {
        $(".mark-fowler").slideToggle(700);
      }
      else {
        $(".about-dropdown").css("display", "none");
        $(".connect").css("display", "none");
        $(".mark-fowler").slideToggle(700);
      }
      });
    $("#connect").on('click', function() {
      if ($(".about-dropdown").is(":hidden") && $(".mark-fowler").is(":hidden")) {
        $(".connect").slideToggle(700);
      }
      else {
        $(".about-dropdown").css("display", "none");
        $(".mark-fowler").css("display", "none");
        $(".connect").slideToggle(700);
      }
    });

    // Add same functionality to arrow icon
    $("#arrow").on('click', function() {
      $(".about-dropdown, .connect, .mark-fowler").slideUp(700);
    });
});
