// Apply styling to character count
$(document).ready(function() {
  $("textarea").keypress(function () {
    const max = 140;
    const value = $(this).val().length;
    $(this).siblings(".counter").text(max - value);
    if ($(this).val().length > max) {
    	$(".counter").css('color', 'red');
    }
  });
});

