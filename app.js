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

const myText = new SplitType(".my-text");
gsap.to(".char", {
  y: 0,
  stagger: 0.1,
  delay: 0.1,
  duration: 0.1,
});


ScrollTrigger.defaults({
  toggleActions: "restart pause resume pause"
});

gsap.to(".heading h1", {
  scrollTrigger: ".inner-wrapper", 
  duration: 1, 
  rotation: 360
});


gsap.to(".left-container", {
  scrollTrigger: {
    trigger: ".left-container",
    toggleActions: "restart pause reverse pause"
  }, 
  duration: 2, 
  backgroundColor: "#000000", 
  ease: "none"
});


