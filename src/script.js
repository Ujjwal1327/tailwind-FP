const responsiveNav = document.getElementById("responsiveNav");
console.log(responsiveNav);



function handleMenu() {
    console.log(" close menu  pressed");
    responsiveNav.classList.toggle("hidden")
}


// Initialize GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animate the first div (move up and down)
gsap.to("#step1 #right #container1", {
  x: "-10px", // Move 20px up and down
  duration: 5,
  yoyo: true, // Reverse the animation
  repeat: -1, // Infinite loop
  ease: "power1.inOut",
});

// Animate the second div (move left and right)
gsap.to("#step1 #right #container2", {
  y: "-20px", // Move 20px left and right
  duration: 5,
  yoyo: true,
  repeat: -1,
  ease: "power1.inOut",
});

// Animate the third div (move diagonally)
gsap.to("#step1 #right #container3", {
  x: "30px", // Move diagonally (x and y simultaneously)
  y: "20px",
  duration: 5,
  yoyo: true,
  repeat: -1,
  ease: "power1.inOut",
});

// Animate the fourth div (rotate slightly)
gsap.to("#step1 #right #container4", {
  rotate: "-20deg", // Rotate 10 degrees
  duration: 5,
  yoyo: true,
  repeat: -1,
  ease: "power1.inOut",
});
