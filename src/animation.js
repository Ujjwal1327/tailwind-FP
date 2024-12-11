const tl = gsap.timeline()



tl.to(".slider #line1", {
    x: 0,
    yoyo: true,
    ease: "ease.out", // Makes the animation smooth
    scrollTrigger: {
        trigger: '.slider #line1',
        scroller: 'body', // Default scroller
        markers: false, // For debugging, can be removed later
        start: "top 100%", // Adjust based on when you want the animation to start
        end: "top 0%", // Optional, for smoother control
        scrub: true // Smooth animation based on scroll
    }
});
tl.to(".slider #line2", {
    x: -600,
    yoyo: true,
    ease: "ease.out", // Makes the animation smooth
    scrollTrigger: {
        trigger: '.slider #line1',
        scroller: 'body', // Default scroller
        markers: false, // For debugging, can be removed later
        start: "top 100%", // Adjust based on when you want the animation to start
        end: "top 0%", // Optional, for smoother control
        scrub: true // Smooth animation based on scroll
    }
});
tl.to(".slider #line3", {
    x: 100,
    yoyo: true,
    ease: "ease.out", // Makes the animation smooth
    scrollTrigger: {
        trigger: '.slider #line1',
        scroller: 'body', // Default scroller
        markers: false, // For debugging, can be removed later
        start: "top 100%", // Adjust based on when you want the animation to start
        end: "top 0%", // Optional, for smoother control
        scrub: true // Smooth animation based on scroll
    }
});
tl.from("#step1 #right", {
    x: 300,
    stagger: 2,
    // yoyo: true,
    opacity: 0,
    ease: "ease.out", // Makes the animation smooth
    scrollTrigger: {
        trigger: '#step1 #right',
        scroller: 'body', // Default scroller
        markers: false, // For debugging, can be removed later
        start: "top 90%", // Adjust based on when you want the animation to start
        end: "top 5%", // Optional, for smoother control
        scrub: true // Smooth animation based on scroll
    }
});
tl.from("#step2 #right", {
    x: 300,
    stagger: 1,
    // yoyo: true,
    opacity: 0,
    ease: "ease.out", // Makes the animation smooth
    scrollTrigger: {
        trigger: '#step2 #right',
        scroller: 'body', // Default scroller
        markers: false, // For debugging, can be removed later
        start: "top 60%", // Adjust based on when you want the animation to start
        end: "top 50%", // Optional, for smoother control
        scrub: true // Smooth animation based on scroll
    }
});
tl.from("#step2 #right #code-row> p", {
    y: -10,
    opacity: 0,
    stagger: 1,
    // yoyo: true,
    ease: "ease.out", // Makes the animation smooth
    scrollTrigger: {
        trigger: '#step2 #right #code-row',
        scroller: 'body', // Default scroller
        markers: false, // For debugging, can be removed later
        start: "top 60%", // Adjust based on when you want the animation to start
        end: "top 30%", // Optional, for smoother control
        scrub: true // Smooth animation based on scroll
    }
})
tl.to("#slidingText", {
    x: '-70%',
    stagger: 1,
    // yoyo: true,
    ease: "ease.out", // Makes the animation smooth
    scrollTrigger: {
        trigger: '#slidingText',
        scroller: 'body', // Default scroller
        markers: true, // For debugging, can be removed later
        start: "top 101%", // Adjust based on when you want the animation to start
        end: "top -20%", // Optional, for smoother control
        scrub: true // Smooth animation based on scroll
    }
})



