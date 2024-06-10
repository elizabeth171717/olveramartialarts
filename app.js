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
    trigger: ".main-title",
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

