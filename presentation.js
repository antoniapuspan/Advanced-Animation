"use strict";
gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: "#the_section",
        scrub: true,
        markers: true,
        start: "top 95%",
        end: "bottom 5%"
    }
})

tl.to("#my-paragraph, #my-img", {
    opacity: 0,
    duration: 0
})
.to("#my-paragraph, #my-img", {
    opacity: 1,
    duration: 1
})
.to("#my-paragraph, #my-img", {
    scale: 1.1,
    duration: 5
})
.to("#my-paragraph, #my-img", {
    opacity: 0,
    duration: 1
})


let tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: "#the_section2",
        scrub: true,
        markers: true,
        start: "top 95%",
        end: "bottom 5%"
    }
})

tl2.to("#my-paragraph2, #my-img2", {
    opacity: 0,
    duration: 0
})
.to("#my-paragraph2, #my-img2", {
    opacity: 1,
    duration: 1
})
.to("#my-paragraph2, #my-img2", {
    scale: 1.1,
    duration: 5
})
.to("#my-paragraph2, #my-img2", {
    opacity: 0,
    duration: 1
})

let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: "#the_section3",
        scrub: true,
        markers: true,
        start: "top 95%",
        end: "bottom 5%"
    }
})

tl3.to("#my-paragraph3, #my-img3", {
    opacity: 0,
    duration: 0
})
.to("#my-paragraph3, #my-img3", {
    opacity: 1,
    duration: 1
})
.to("#my-paragraph3, #my-img3", {
    scale: 1.1,
    duration: 5
})
.to("#my-paragraph3, #my-img3", {
    opacity: 0,
    duration: 1
})

let tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: "#the_section4",
        scrub: true,
        markers: true,
        start: "top 95%",
        end: "bottom 5%"
    }
})

tl4.to("#my-paragraph4, #my-img4", {
    opacity: 0,
    duration: 0
})
.to("#my-paragraph4, #my-img4", {
    opacity: 1,
    duration: 1
})
.to("#my-paragraph4, #my-img4", {
    scale: 1.1,
    duration: 5
})
.to("#my-paragraph4, #my-img4", {
    opacity: 0,
    duration: 1
})

let tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: "#the_section5",
        scrub: true,
        markers: true,
        start: "top 95%",
        end: "bottom 5%"
    }
})

tl5.to("#my-paragraph5, #my-img5", {
    opacity: 0,
    duration: 0
})
.to("#my-paragraph5, #my-img5", {
    opacity: 1,
    duration: 1
})
.to("#my-paragraph5, #my-img5", {
    scale: 1.1,
    duration: 5
})
.to("#my-paragraph5, #my-img5", {
    opacity: 0,
    duration: 1
})