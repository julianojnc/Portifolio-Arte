// Animation
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

//Scroll smooth
ScrollSmoother.create({
    smooth: 1.5,
    effects: true
});

// Footer animation
gsap.from("footer", {
    y: -300,
    immediateRender: false,
    scrollTrigger: {
        trigger: "footer",
        markers: false,
        scrub: true,
        invalidateOnRefresh: true,
        end: "100% 100%"
    }
})