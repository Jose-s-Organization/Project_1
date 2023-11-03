// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
  $("#nbox").on("click", function () {
    $("#newsletter").prop("checked", true);
    $("#nbox").html("<p>&#10004;</p>");
  });
  $("#ubox").on("click", function () {
    $("#updates").prop("checked", true);
    $("#ubox").html("<p>&#10004;</p>");
  });
  $("#dbox").on("click", function () {
    $("#dev").prop("checked", true);
    $("#dbox").html("<p>&#10004;</p>");
  });
});
