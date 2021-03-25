"use strict";
gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#the_section",
        scrub: true,
        markers: true,
        start: "top 95%",
        end: "top 5%"
    }
})

tl.to("#my-paragraph, #my-img", {
    opacity: 0,
    duration: 0
})
.to("#my-paragraph, #my-img", {
    opacity: 1,
    duration: 2
})
.to("#my-paragraph, #my-img", {
    scale: 1.1,
    duration: 5
})
.to("#my-paragraph, #my-img", {
    opacity: 0,
    duration: 2
})


// tl.to("#my-img", {
//     opacity: 1,
//     duration: 1
// })
// .to("#my-img", {
//     scale: 1.1,
//     duration: 5
// })
// .to("#my-img", {
//     opacity: 0,
//     duration: 1
// })

// let tl2 = gsap.timeline({
//     scrollTrigger: {
//         trigger: "#the_section2",
//         scrub: true,
//         markers: false,
//         start: "top 85%",
//         end: "top 15%"
//     }
// })
// tl2.to("#my-img2", {
//     opacity: 1,
//     duration: 2
// })
// .to("#my-img2", {
//     scale: 1.1,
//     duration: 5
// })
// .to("#my-img2", {
//     opacity: 0,
//     duration: 2
// })