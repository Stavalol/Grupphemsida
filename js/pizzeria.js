
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

function buttonMargin(){
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
}

//Open phone menu

function phoneMenu(){
  //Create variables
  var mpCont = document.getElementById("mp-cont"); //mpCont(Mobile Phone Container) = ID "mp-dp-cont"
  var mpOpenBtn = document.getElementsByClassName("mp-dp-open"); //mpOpenBtn (Mobile Phone Open Button) = ID "mp-dp-open"
  var mpCloseBtn = document.getElementById("mp-dp-close"); //mpCloseBtn (Mobile Phone Close Button) = ID "mp-dp-close"

  mpCont.classList.toggle("d-block");

}


