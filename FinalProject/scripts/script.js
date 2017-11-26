
// ------------------- HEADER ----------------- //

//var declarations
var intro = document.getElementById("intro");
var spans = intro.getElementsByTagName("span");

//wrap letter into spans
function createString(){
var string = "Welcome to William's Portfolio!";

//color William with Neon

var split = string.split("");
console.log(split);

for(var i = 0; i<split.length; i++){
	intro.innerHTML += "<span>" + split[i] + "</span>";
}
}

// animate Letters on screen load function
window.addEventListener("load", function(){
createString();		
var counter = -1;
var animate = setInterval(function(){
counter++;
if(counter < spans.length){
	spans[counter].className = "animateLetter";
}
}, 60);
});



// --------- Contact Btn event handler ------------ //
var form = document.getElementById("contact-form-main");
var contactText = document.getElementById("contact-text-container");
var contactBtn = document.getElementById("contactBtn");
var contactIcon = document.getElementById("contact-icon");
var body = document.getElementsByTagName("body")[0];

body.addEventListener("click", function(event){

if(event.target == contactBtn || event.target == contactIcon){

if(form.style.display == "none"){
	form.style.display = "block";
}else{
	form.style.display = "none";
}
}
});
