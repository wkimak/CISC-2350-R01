// ---------------- AJAX -------------- //

$("document").ready(function(){
	



// set APItheme button value to "on" so AJAX will work only on API Theme
  $("#themes").click(function(event){   
    if($(event.target).is($("#theme3"))){
       $("#theme3").attr("value","on");
   }else{
    $("#theme3").attr("value", "off");
   }
    });

//SearchBtn event listener
$("#searchBtn").on("click", function(event){
if($("#theme3").val() == "on"){
var searchTerm = $("#search").val();
console.log(searchTerm);

//url requested
var url="https://api.flickr.com/services/feeds/photos_public.gne?tags=" + searchTerm + "&format=json&jsoncallback=?";


//callback function
function showPhotos(data){

	var showHTML = "<ul id='ajaxPhotos'>";
$.each(data.items, function(index,photo){
showHTML += "<li> <a href='" + photo.link + "''>";
showHTML+= "<img src='" + photo.media.m + "'> </a> </li>"; 
}); //each loop
showHTML +="</ul>";
$(".apiContainer").html(showHTML);

};// showPhotos function

//GetJSON method
$.getJSON(url, showPhotos);

}
}); 
}); 
