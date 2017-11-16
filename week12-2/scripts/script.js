
// Variable declaration
var nav = document.getElementById("nav");
var body=document.querySelector("body");
var picsContainer = document.getElementsByClassName("container_12")[0];
var themesDiv = document.getElementById("themes");
var theme1 = document.getElementById("theme1");
var theme2 = document.getElementById("theme2");
var theme3 = document.getElementById("theme3");

//followers/following variables
var followersNum = 54321;
var followingNum = 1038;


// create followers/following elements and append to Navigation
var following = document.createElement("P");
following.innerHTML =  followingNum + "<br> <b> Following </b>";
following.setAttribute("id","following");
nav.appendChild(following);

var followers = document.createElement("P");
followers.innerHTML = followersNum + "<br> <b> Followers </b>";
followers.setAttribute("id", "followers");
nav.appendChild(followers);


//onLoad, following/followers Numbers keep going up
window.addEventListener("load", function(){
setInterval(function(){
followersNum++;
followers.innerHTML = followersNum + "<br> <b> Followers </b>";
}, 10);

setInterval(function(){
followingNum++;
following.innerHTML = followingNum + "<br> <b> Following </b>";
}, 5000);
});

/* ----------- Themes Buttons -------------- */
themesDiv.addEventListener("click", function(event){
if(event.target == theme1){
  picsContainer.classList.add("animateContainer");
  setTimeout(function(){
    picsContainer.classList.remove("animateContainer");
  },3000);	
  nav.style.backgroundColor = "";
  body.style.backgroundColor = "";
  picsContainer.style.backgroundColor = "";
} else if (event.target == theme2){
	picsContainer.classList.add("animateContainer");
	setTimeout(function(){
    picsContainer.classList.remove("animateContainer");
  },3000);	
	nav.style.backgroundColor = "green";
	body.style.backgroundColor = "black";
	picsContainer.style.backgroundColor = "white";
} else if (event.target == theme3){
	picsContainer.classList.add("animateContainer");
	setTimeout(function(){
    picsContainer.classList.remove("animateContainer");
  },3000);	
	nav.style.backgroundColor = "white";
	body.style.backgroundColor = "blue";
	picsContainer.style.backgroundColor = "lightblue";
}


});
