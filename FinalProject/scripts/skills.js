

$("document").ready(function(){


$("#skills-btn").on("click", function(){

	$("#skills").fadeIn(1000);

$("#html5-container .progress-bar").animate({width: '95%'}, 3000);
$("#css3-container .progress-bar").animate({width: '70%'}, 3000);
$("#bootstrap4-container .progress-bar").animate({width: '65%'}, 3000);
$("#sass-container .progress-bar").animate({width: '65%'}, 3000);
$("#javascript-container .progress-bar").animate({width: '70%'}, 3000);
$("#jquery-container .progress-bar").animate({width: '90%'}, 3000);
$("#react-container .progress-bar").animate({width: '50%'}, 3000);

});


$("#exitBtn").on("click", function(){

$("#skills").css("display", "none");
$(".progress-bar").stop();
$(".progress-bar").css("width", "0%");

});

});
