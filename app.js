//gsap animation

gsap.registerPlugin(ScrollTrigger);

let scrollTL1 = gsap.timeline({
    scrollTrigger: {
      trigger:".content",
      toggleActions:"play pause resume reverse"
    }
  });
  scrollTL1.from(".logo", {y:"50vh" , scale:4});
  
  



let scrollTL = gsap.timeline({
  scrollTrigger:{
    trigger: ".contact-box",
    toggleActions:"play pause resume reverse",
  }
});

scrollTL.from("h1", {opacity:0, scale:0, duration:1})


let scrollTL2 = gsap.timeline({
  scrollTrigger:{
    trigger: ".animate",
    toggleActions:"play pause resume reverse",
  }
});

scrollTL2.from(".animate", { scale:0, stagger:{each:0.5} ,duratio:1});

let scrollTL3 = gsap.timeline({
  scrollTrigger:{
    trigger: ".hours-animation",
    toggleActions:"play pause resume reverse",
  }
});

scrollTL3.from(".hours-animation", { scale:0, y: "2rem",duratio:1});



 const slides2 = document.querySelectorAll(".slide2");
  let slideIndex2 = 0;
  let intervalId2 = null;
  
  
  //initializesSlider
  
  document.addEventListener("DOMContentLoaded", initializeSlider);
  
   function initializeSlider(){
     if(slides2.length > 0){
      slides2[slideIndex2].classList.add("displaySlide");
      intervalId2= setInterval(nextSlide,1000)
     }
   }
  
   function showSlide(index){
  
    if(index >= slides2.length){
      slideIndex2 = 0;
    } else if( index < 0){
      slideIndex2 = slides2.length - 1;
    }
     
  slides2.forEach(slide => {
      slide.classList.remove("displaySlide");
  });
  
  slides2[slideIndex2].classList.add("displaySlide");
   }
  
   function prevSlide(){
  slideIndex2--;
  showSlide(slideIndex2);
   }
  
   function nextSlide(){
  slideIndex2++;
  showSlide(slideIndex2);
   }
  
