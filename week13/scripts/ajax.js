// ---------------- AJAX -------------- //

$("document").ready(function(){
	
	//change Access depending on theme clicked
	var apiAccess = false;

 $("#theme3").on("click", function(event){
       apiAccess = true;
       checkStatus();
    });

 $("#theme2").on("click", function(){
   apiAcces = false;
    checkStatus();
 });

// core function
 function checkStatus(){

if(apiAccess){
$("#searchBtn").on("click", function(event){

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
$(".container_12").html(showHTML);

};// showPhotos function

//GetJSON method
$.getJSON(url, showPhotos);


}); //searchBtn click event
}
}

}); //document.ready function
