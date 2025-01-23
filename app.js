const slides = document.querySelectorAll(".slide");
let slideIndex2 = 0;
let intervalId2 = null;


//initializesSlider

document.addEventListener("DOMContentLoaded", initializeSlider);

 function initializeSlider(){
   if(slides.length > 0){
    slides[slideIndex2].classList.add("displaySlide");
    intervalId2= setInterval(nextSlide,1000)
   }
 }

 function showSlide(index){

  if(index >= slides.length){
    slideIndex2 = 0;
  } else if( index < 0){
    slideIndex2 = slides.length - 1;
  }
   
slides.forEach(slide => {
    slide.classList.remove("displaySlide");
});

slides[slideIndex2].classList.add("displaySlide");
 }

 function prevSlide(){
slideIndex2--;
showSlide(slideIndex2);
 }

 function nextSlide(){
slideIndex2++;
showSlide(slideIndex2);
 }
