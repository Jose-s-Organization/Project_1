// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
  $("#nbox").on("click", function () {
    $("newsletter").prop("checked", true);
    $("nbox").html("<p>&#10004;</p>");
  });
});
