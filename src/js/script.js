$(document).ready(function(){
  $(".mask").inputmask("99/99/9999");

  var start = $(".promo--video").height();

  $(".promo--video .container").css("min-height", start + "px");
});
