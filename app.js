
//gsap
gsap.from(".title",
   {
    opacity:0,
      y: "6rem",
      duration:1,
      
    });

   

gsap.registerPlugin(ScrollTrigger);

//gsap
gsap.from(".fa-star",
   {
    opacity: 0,
     scale: .20,
      stagger:{each: 0.5},
      scrollTrigger:".fa-star",
    });

gsap.utils.toArray(".class").forEach((card, index) => {
  gsap.from(card, {
    x: index % 2 === 0 ? -150 : 150, // alternate directions
    opacity: 0,
    duration: 1,
    ease: "power3.out",


    scrollTrigger: {
      trigger: card,
      start: "top 80%",
      toggleActions: "play reverse play reverse",
       
    },
  });
});


gsap.from(".instructor-card img", {
  rotationY: 180,
  rotationX: 45,
  scale: 0.5,
  opacity: 0,
  duration: 1.8,
  ease: "back.out(2)",


  scrollTrigger: {
    trigger: ".instructor",
    start: "top 75%",
  }
});


gsap.utils.toArray(".gallery-pic img").forEach((img) => {
  gsap.from(img, {
    scale: 1.3,
    filter: "blur(10px)",
    duration: 1.5,
    ease: "power3.out",


    scrollTrigger: {
      trigger: img,
      start: "top 85%",
      toggleActions: "play reverse play reverse",
    }
  });
});


gsap.from(".gym-info", {
  clipPath: "inset(100% 0% 0% 0%)",
  duration: 1.8,
  ease: "power4.out",


  scrollTrigger: {
    trigger: ".gym-info",
    start: "top 75%",
    toggleActions: "play reverse play reverse",
  }
});


gsap.from(".gym-info > div", {
  opacity: 0,
  y: 200,
  rotationX: -90,
  scale: 0.5,
  transformOrigin: "center top",
  stagger: 0.2,
  duration: 1.5,
  ease: "back.out(2.5)",


  scrollTrigger: {
    trigger: ".gym-info",
    start: "top 70%",
    toggleActions: "play reverse play reverse",
  }
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
