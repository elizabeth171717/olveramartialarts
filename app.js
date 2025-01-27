gsap.registerPlugin(ScrollTrigger);

//gsap
gsap.from(".fa-star",
   {
    opacity: 0,
     scale: .20,
      stagger:{each: 0.5},
      ScrollTrigger:".fa-star",
    });



//text slide
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



const openModal = document.getElementById("open-modal");
 const modal = document.getElementById("modal");
 const closeModal = document.getElementById("close-modal");


 openModal.addEventListener("click", event =>{
  modal.style.display= "block";
 });

 
 closeModal.addEventListener("click", event =>{
  modal.style.display= "none";
 });
