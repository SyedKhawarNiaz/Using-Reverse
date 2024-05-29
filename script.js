let cross = document.querySelector(".fa-xmark");

function nav() {
  const tl = gsap.timeline({ paused: true });

  tl.to(".common", {
    x: 100,
    opacity: 0,
    duration: 1,
  })
  .to(".fa-xmark", {
    rotate: 180,
    duration: 0.6,
  }, 0) // Starts at the same time as the previous animation
  .to(".notcommon", {
    x: 300,
    duration: 2,
  }, 0); // Starts at the same time as the previous animation

  cross.addEventListener("click", () => {
    if (tl.reversed()) {
      tl.play();
    } else {
      tl.reverse();
    }
  });
}

nav();

gsap.from("ul li", {
  y: -40,
  opacity: 0,
  duration: 0.9,
  delay: 0.3,
  stagger: 0.3,
});
