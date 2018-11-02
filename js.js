$(document).ready(function() {
  $(".Login").click(function() {
    console.log("work");
    $(".Form").fadeOut();
    $("#wrapall").fadeIn();
  });

  $(".logout_button").click(function() {
    $("#wrapall").fadeOut();
    $(".Form").fadeIn();
  });

  $(".row1").click(function() {
    $(".mail2").slideUp();
    $(".mail3").slideUp();
    $(".mail1").slideToggle();
  });
  $(".row2").click(function() {
    $(".mail1").slideUp();
    $(".mail3").slideUp();
    $(".mail2").slideToggle();
  });
  $(".row3").click(function() {
    $(".mail2").slideUp();
    $(".mail1").slideUp();
    $(".mail3").slideToggle();
  });

  $(".compose_button").click(function() {
    $("#modal").fadeIn();
  });

  $("#modal").click(function() {
    $("#modal").fadeOut();
  });

  $("#modalbody").click(function() {
    return false;
  });

  $(".sendmail").click(function() {
    $("#modal").fadeOut();
  });
});
