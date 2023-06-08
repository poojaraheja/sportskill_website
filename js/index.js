gsap.registerPlugin(ScrollTrigger);

const a = gsap.timeline();
// var s = n(".phone-img");
// var o = (window.innerWidth,
//     n(".bannerWrap"))

// function n(t) {
//     const e = $(t).position();
//     e.width = $(t).width();
//     e.height = $(t).height();
//     return e
// }

gsap.to(".phone-img", {
	scrollTrigger: {
		trigger: ".bannerWrap",
		animation: a,
		start: "top 0%",
		scrub: 1,
		end: "bottom 100%",
		ease: "power1.out",
	},
	scale: 1,
	ease: "power1.out",
	duration: 1,
	xPercent: -55,
	yPercent: 93,
	rotate: -9,
});
gsap.to(".phone-img2", {
	scrollTrigger: {
		trigger: ".bannerWrap",
		animation: a,
		start: "top 0%",
		scrub: 1,
		end: "bottom 100%",
		ease: "power1.out",
	},
	scale: 1,
	ease: "power1.out",
	duration: 1,
	xPercent: -55,
	yPercent: 93,
});
gsap.to(".phone-img3", {
	scrollTrigger: {
		trigger: ".bannerWrap",
		animation: a,
		start: "top 0%",
		scrub: 1,
		end: "bottom 100%",
		ease: "power1.out",
	},
	scale: 1,
	ease: "power1.out",
	duration: 1,
	xPercent: -55,
	yPercent: 93,
});

gsap.to(".card3", {
	scrollTrigger: {
		trigger: ".bannerWrap",
		animation: a,
		start: "top 0%",
		scrub: 1,
		end: "bottom 100%",
		ease: "power1.out",
	},
	ease: "power1.out",
	scale: 1,
	duration: 1,
	xPercent: -170,
	yPercent: 410,
});

gsap.to(".card2", {
	scrollTrigger: {
		trigger: ".bannerWrap",
		animation: a,
		start: "top 0%",
		scrub: 1,
		end: "bottom 100%",
	},
	ease: "power1.out",
	scale: 1,
	duration: 1,
	xPercent: -247,
	yPercent: 168,
	rotate: -4,
});

gsap.to(".card1", {
	scrollTrigger: {
		trigger: ".bannerWrap",
		animation: a,
		scrub: 1,
		start: "top 0%",
		end: "bottom 100%",
		ease: "power1.out",
	},
	ease: "power1.out",
	scale: 1,
	duration: 1,
	xPercent: -193,
	yPercent: 481,
});
// gsap.to('.content_tab', {
//     scrollTrigger: {
//         trigger: ".bannerWrap",
//         animation: a,
//         scrub: 1,
//         start: "top 0%",
//         end: "bottom 100%",
//         ease:  "power1.out"
//     },
//         ease:  "power1.out",
//         scale: 1,
//     duration: 1,
//     xPercent: -100,
//     yPercent: 302
// })

// const tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: ".bannerWrap",
//         start: "top top",
//         end: "+=1000",
//         markers: true
//     }
//   });
// a.to(".phone-img", {yPercent: 30, duration: 1, xPercent: -50})
