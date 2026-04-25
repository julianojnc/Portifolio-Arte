// Animation
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// Opacity first section
gsap.from(".first-section", {
    opacity: 0,
    duration: 2,
});

// Animation Character
gsap.from(".character", {
    y: 100,
    duration: 1.7,
});