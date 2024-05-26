//gsap animation

gsap.registerPlugin(ScrollTrigger);

let masks = gsap.utils.toArray(".img-mask");

gsap.to(masks[1], {
  height: "0%",
  ease: "none",
  scrollTrigger: {
    trigger: ".revealer",
    start: "top top",
    pin: true,
    end: "+=100%",
    scrub: 0.5
  }
});




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

