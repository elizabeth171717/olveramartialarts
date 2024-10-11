gsap.registerPlugin(ScrollTrigger);

gsap.to(".text-banner",{
  opacity: 1,
  duration:1,
  scale:1,
 scrollTrigger:{
  trigger:".text-banner"
 }
});


gsap.to(".animated-pic",{
  opacity: 1,
  scale:1,
 duration:1,
 
 scrollTrigger:{
  trigger:".animated-pic"

 }
});



gsap.to(".second-animated-pic",{

  scale:1,
 duration:1,
 scrollTrigger:{
  trigger:".second-animated-pic"
 }
})


gsap.to(".third-animated-pic",{

  scale:1,
 duration:1,
 scrollTrigger:{
  trigger:".third-animated-pic"
 }
});



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
