// Animation
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

//Scroll smooth
ScrollSmoother.create({
    smooth: 1.5,
    effects: true
});

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


// Send Email

// const formEmail = document.getElementById('formEmail');

// formEmail.addEventListener('submit', function(event){
//     event.preventDefault();

//     const formData = new FormData(event.target);
//     const dados = Object.fromEntries(formData);

//     console.log(dados);
//     processarDados(dados);
// });

// function processarDados(data){
//     alert("Nome: " + data.name);
// };
