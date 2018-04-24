$(document).ready(function() {
  $("textarea").keypress(function () {
    var max = 140;
    var value = $(this).val().length;
    var value = max - value;
    $(this).siblings(".counter").text(value);
    if ($(this).val().length > max) {
    	$(".counter").css('color', 'red');
    }
  });
});


