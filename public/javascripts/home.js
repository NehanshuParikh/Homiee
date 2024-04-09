function customMouse() {
    var main = document.querySelector("#main");
var customScroller = document.querySelector("#cursor");

gsap.from(customScroller,{
    scale:0,
    duration: 1,
})

main.addEventListener("mousemove",(dets)=>{
    gsap.to(customScroller,{
        left: dets.x,
        top: dets.y
    })
})

main.addEventListener("mouseenter",()=>{
    gsap.to(customScroller,{
        scale: 1,
        opacity: 1
    })
})
main.addEventListener("mouseleave",()=>{
    gsap.to(customScroller,{
        scale: 0,
        opacity: 0
    })
})


}
customMouse();


gsap.to("#page1 h1",{
    transform: "translateX(-100%)",
    fontWeight: "100",
    scrollTrigger: {
        trigger: "#page1",
        scroller: "body",
        // markers: true,
        start: "top 0%",
        end: "top -200%",
        scrub: 4,
        pin: true
    }
})
gsap.from("#page2 #nav #logo, #page2 #nav #menu, #page2 #nav #tagline",{
    y: 15,
    opacity: 0,
    stagger: .1,
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        // markers: true,
        start: "top 50%",
        end: "top 35%",
    }
})
gsap.from("#page2 #main-content #first",{
    opacity: 0,
    scale: 0,
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        // markers: true,
        start: "top 25%",
        end: "top 10%",
        scrub: 2
    }
})
gsap.from("#page2 #main-content #second",{
    x: 500,
    opacity: 0,
    scale: 0,
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        // markers: true,
        start: "top 25%",
        end: "top 10%",
        scrub: 2
    }
})
gsap.from("#page2 #main-content #third",{
    x: -200,
    opacity: 0,
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        // markers: true,
        start: "top 20%",
        end: "top 15%",
        scrub: 2
    }
})
gsap.from("#page2 #main-content #fourth",{
    x: 200,
    opacity: 0,
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        // markers: true,
        start: "top 20%",
        end: "top 15%",
        scrub: 2
    }
})
gsap.from("#page2 #main-content #fifth",{
    x: 200,
    scale: 0,
    opacity: 0,
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        // markers: true,
        start: "top 5%",
        end: "top -5%",
        scrub: 2
    }
})
gsap.from("#page2 #main-content #sixth",{
    x: -200,
    scale: 0,
    opacity: 0,
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        // markers: true,
        start: "top 5%",
        end: "top -5%",
        scrub: 2
    }
})
gsap.from("#page2 #main-content img",{
    x: 500,
    opacity: 0,
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        // markers: true,
        start: "top 5%",
        end: "top -5%",
        scrub: 2,
        stagger: true
    }
})
gsap.from("#page3 #robot-container img",{
    x: 500,
    scale: 0,
    scrollTrigger: {
        trigger: "#page3",
        scroller: "body",
        start: "top 30%",
        end: "top 15%",
        scrub: 2,
        // markers: true,
        stagger: true
    }
})
gsap.from("#page3 #text-container #heading",{
    scale: 0,
    opacity: 0,
    scrollTrigger: {
        trigger: "#page3",
        scroller: "body",
        start: "top 10%",
        end: "top 0%",
        scrub: 2,
        // markers: true,
        stagger: true
    }
})
gsap.to("#page3 #text-container #line",{
    width: "75%",
    scrollTrigger: {
        trigger: "#page3",
        scroller: "body",
        start: "top 5%",
        end: "top 0%",
        scrub: 2,
        // markers: true,
        stagger: true
    }
})
gsap.from("#page3 #text-container #description #first , #page3 #text-container #description #second , #page3 #text-container #description #third",{
    x: 1000,
    stagger: .1,
    scrollTrigger: {
        trigger: "#page3",
        scroller: "body",
        start: "top 10%",
        end: "top 0%",
        scrub: 2,
        // markers: true,
        stagger: true
    }
})
gsap.from("#page3 #text-container #description a",{
    x: -1000,
    rotate: "360deg",
    scrollTrigger: {
        trigger: "#page3",
        scroller: "body",
        start: "top 10%",
        end: "top 0%",
        scrub: 5,
        // markers: true,
        stagger: true
    }
})
gsap.from("#page4 .container",{
    scale: 0,
    scrollTrigger: {
        trigger: "#page4 .container",
        scroller: "body",
        start: "top 50%",
        end: "top 20%",
        // markers: true,
        scrub:3
    }
})

gsap.from("#page5 footer",{
    scale: 0,
    scrollTrigger: {
        trigger: "#page5 footer",
        scroller: "body",
        start: "top 80%",
        end: "top 70%",
        // markers: true,
        scrub: 1
    }
})