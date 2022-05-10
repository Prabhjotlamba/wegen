$("#content1").fadeIn("slow");

$(".link").click(function (e) {
  e.preventDefault();
  $(".content-container div").fadeOut("slow");
  $("#" + $(this).data("rel")).fadeIn("slow");
});
$("input").click(function () {
  if ($("input").val() === "Contact") {
    $("#div1").show("700");
    $("input").val("hide");
  } else {
    $("#div1").hide("700");
    $("input").val("Contact");
  }
});
