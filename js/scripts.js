$(document).ready(function() {
  $(".clickable").click(function() {
    $(".walrus-showing").toggle();
    $(".walrus-hidden").toggle();
  });
  $(".clickHere").click(function() {
    $(".panda-fadeOut").fadeOut();
  });
});
