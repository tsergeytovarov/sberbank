$(document).ready(function(){
  $(".mask").inputmask("99.99.9999");

  $(".tel").inputmask("+7 999 999-99-99");

  var start = $(".promo--video").height();

  $(".promo--video .container").css("min-height", start + "px");
});
