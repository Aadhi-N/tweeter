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




// > db.tweets.update({	"_id" : ObjectId("5ae37ca80e0941567b5ab4c4") },{$set : {"likes":4}})
