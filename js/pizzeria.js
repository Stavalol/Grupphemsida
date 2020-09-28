
//Slideshow

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


//Button margins


//On window load set margin
var welcomebox = document.querySelector('#welcomebox'); //Select welcomebox
var compStyles = window.getComputedStyle(welcomebox); //Select style from welcomebox

var marginRight = compStyles.getPropertyValue('margin-right'); //Select specific style

document.getElementById("buttons").style.marginRight = marginRight; //Set margin of buttons


//On resize margin change
window.addEventListener("resize",function(){ //On window change

  var marginRight = compStyles.getPropertyValue('margin-right'); //Select specific style

  document.getElementById("buttons").style.marginRight = marginRight; //Set margin of buttons


});