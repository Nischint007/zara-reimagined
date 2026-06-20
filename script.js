window.addEventListener("DOMContentLoaded", () => {

  const lenis = new Lenis()   //Lenis JS Code

  lenis.on('scroll', (e) => {
    console.log(e)
  })

  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })

  gsap.ticker.lagSmoothing(0);

  var swiper = new Swiper(".mySwiper", {   //Swiper JS Code
    slidesPerView: 1,
    spaceBetween: 30,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const tl = gsap.timeline();

  const counter = document.querySelector("#loader-counter");

  let count = { value: 0 };

  tl.to(count, {
    value: 100,
    duration: 2,
    ease: "power4.out",
    onUpdate: () => {
      counter.textContent = `${Math.floor(count.value)}`;
    }
  });
  tl.to("#loader div", {
    y: "-100%",
    transformOrigin: "bottom bottom",
    duration: 1.3,
    stagger: 0.06,
    ease: "expo.out"
  }, "start");
  tl.to("#loader", {
    y: "-150%",
    duration: 1.3,
    ease: "expo.out"
  });

  const split = new SplitText("#heading1", { type: "chars" });
  tl.from(split.chars, {
    y: 150,
    autoAlpha: 0,
    duration: 1.6,
    ease: "expo.out",
    stagger: {
      amount: 0.5,
      from: "start"
    }
  }, "start+=0.5");
  tl.from("#page1-arrow", {
    rotate: -360,
    autoAlpha: 0,
    duration: 1.3,
    ease: "back.out"
  }, "start+=0.8");
  tl.from("#heading2", {
    y: 60,
    scale: 0.5,
    autoAlpha: 0,
    duration: 1.3,
    ease: "back.out"
  }, "start+=1.1");
  tl.from("#heading5", {
    y: -60,
    scale: 0.5,
    autoAlpha: 0,
    duration: 1.3,
    ease: "back.out"
  }, "start+=1");
  tl.from("#page1-img", {
    y: "30%",
    rotate: 10,
    autoAlpha: 0,
    duration: 1.3,
    ease: "back.out"
  }, "start+=0.6");
  tl.from("#page1-img-2", {
    y: "30%",
    rotate: -10,
    autoAlpha: 0,
    duration: 1.3,
    ease: "back.out"
  }, "start+=0.7");
  gsap.set("#heading3", {
    autoAlpha: 0,
  });
  gsap.set("#heading4", {
    autoAlpha: 0,
  });
  gsap.set("#heading6", {
    autoAlpha: 0,
  });
  tl.to("#heading3", {
    y: 140,
    autoAlpha: 1,
    duration: 1.3,
    rotate: 0,
    ease: "bounce.out"
  }, "start+=1.1");
  tl.to("#heading4", {
    y: 165,
    autoAlpha: 1,
    duration: 1.3,
    rotate: 0,
    ease: "bounce.out",
  }, "start+=1.1");
  tl.to("#heading6", {
    y: 140,
    autoAlpha: 1,
    duration: 1.3,
    rotate: 0,
    ease: "bounce.out",
    onComplete: () => {
      gsap.to("#heading3", {
        top: "8%",
        left: "28%",
        duration: 1,
        rotate: "-64deg",
        ease: "back.out"
      });
      gsap.to("#heading4", {
        top: "6%",
        left: "50%",
        duration: 1,
        rotate: 360,
        ease: "back.out"
      });
      gsap.to("#heading6", {
        top: "6%",
        right: "24%",
        duration: 1,
        rotate: -64,
        ease: "back.out"
      });
      gsap.from("#heading2", {
        scale: 0.5,
        rotate: 360,
        duration: 1.3,
        ease: "back.out"
      });
      gsap.from("#heading5", {
        scale: 0.5,
        rotate: 360,
        duration: 1.3,
        ease: "back.out"
      });
    }
  }, "start+=1.2");

  const cursor = document.querySelector("#cursor");

  let cursorVisible = false;
  document.addEventListener("mousemove", (e) => {
    if (!cursorVisible) {
      gsap.set(cursor, {
        x: e.clientX,
        y: e.clientY,
        autoAlpha: 1,
        duration: 1,
        ease: "sine.out"
      });
      cursorVisible = true;
    }
    gsap.to(cursor, {
      x: e.clientX,
      y: e.clientY,
      duration: 1,
      ease: "sine.out"
    })
  });
  gsap.to("#right-part", {
    clipPath: "inset(0% 0% 0% 0%)",
    webkitClipPath: "inset(0% 0% 0% 0%)",
    duration: 1.2,
    ease: "expo.out",
    scrollTrigger: {
      trigger: "#right-part",
      scroller: "body",
      start: "top 80%",
      end: "top -20%",
      scrub: 3,
      once: true
    }
  });
  gsap.to("#right-part-2", {
    clipPath: "inset(0% 0% 0% 0%)",
    webkitClipPath: "inset(0% 0% 0% 0%)",
    duration: 1.2,
    ease: "expo.out",
    scrollTrigger: {
      trigger: "#right-part-2",
      scroller: "body",
      start: "top 80%",
      end: "top -20%",
      scrub: 3,
      once: true
    }
  });
  gsap.to("#right-part-3", {
    clipPath: "inset(0% 0% 0% 0%)",
    webkitClipPath: "inset(0% 0% 0% 0%)",
    duration: 1.2,
    ease: "expo.out",
    scrollTrigger: {
      trigger: "#right-part-3",
      scroller: "body",
      start: "top 80%",
      end: "top -20%",
      scrub: 3,
      once: true
    }
  });
  gsap.to("#right-part-4", {
    clipPath: "inset(0% 0% 0% 0%)",
    webkitClipPath: "inset(0% 0% 0% 0%)",
    duration: 1.2,
    ease: "expo.out",
    scrollTrigger: {
      trigger: "#right-part-4",
      scroller: "body",
      start: "top 80%",
      end: "top -20%",
      scrub: 3,
      once: true
    }
  });

  const hoverImage = document.querySelector("#hover-img");
  const hoverItem = document.querySelectorAll(".hover-item");

  let mouse = { x: 0, y: 0 };
  let pos = { x: 0, y: 0 };

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  function animate() {
    pos.x += (mouse.x - pos.x) * 0.15;
    pos.y += (mouse.y - pos.y) * 0.15;

    hoverImage.style.transform = `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`;

    requestAnimationFrame(animate);
  }
  animate();

  hoverItem.forEach(item => {
    item.addEventListener('mouseenter', () => {
      hoverImage.style.backgroundImage = `url(${item.dataset.img})`;
      hoverImage.style.opacity = 1;
    });
    item.addEventListener('mouseleave', () => {
      hoverImage.style.opacity = 0;
    });
  });

  gsap.to("#page4-img-1", {
    clipPath: "inset(0% 0% 0% 0%)",
    webkitClipPath: "inset(0% 0% 0% 0%)",
    duration: 1.5,
    ease: "power4.inOut",
    scrollTrigger: {
      trigger: "#page4-img-1",
      scroller: "body",
      start: "top 80%",
      end: "top -15%",
      scrub: 2,
      once: true
    }
  });
  gsap.from("#page4-heading-4", {
    x: -20,
    autoAlpha: 0,
    duration: 1.2,
    ease: "expo.out",
    scrollTrigger: {
      trigger: "#page4-img-1",
      scroller: "body",
      start: "top 80%",
      end: "top -20%",
      scrub: 1,
      once: true
    }
  });

  const split2 = new SplitText("#page4-heading-2", { type: "words" });

  gsap.from(split2.words, {
    y: 80,
    duration: 1.3,
    autoAlpha: 0,
    stagger: {
      amount: 0.5,
      from: "start"
    },
    ease: "expo.out",
    scrollTrigger: {
      trigger: "#page4-heading-2",
      scroller: "body",
      start: "top 110%",
      end: "top -40%",
      scrub: 3,
      once: true
    }
  });

  revealTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#page4-heading-3",
      scroller: "body",
      start: "top 80%",
      end: "top -10%",
      scrub: 2,
      once: true
    }
  });
  
  const split3 = new SplitText("#page4-heading-3", { type: "chars" });
  revealTl.from(split3.chars,{
    y: 80,
    autoAlpha: 0,
    duration: 1.3,
    stagger: {
      amount: 0.5,
      from: "start"
    },
    ease: "power4.out"
  },"reveal");

  revealTl.from("#page4-label-1",{
    scale: 0.5,
    autoAlpha: 0,
    duration: 1.2,
    skewY: -20,
    ease: "power4.out"
  },"reveal+=0.5");

    revealTl.from("#page4-label-2",{
    scale: 0.5,
    autoAlpha: 0,
    duration: 1.2,
    skewY: 20,
    ease: "power4.out"
  },"reveal+=0.7");

    revealTl.from("#page4-label-3",{
    scale: 0.5,
    autoAlpha: 0,
    duration: 1.2,
    skewY: -20,
    ease: "power4.out"
  },"reveal+=0.9");

    revealTl.from("#page4-label-4",{
    scale: 0.5,
    skewY: 20,
    autoAlpha: 0,
    duration: 1.2,
    ease: "power4.out"
  },"reveal+=1.1");
  
  gsap.from("#grid-1a",{
    y: 150,
    scale: 0.7,
    autoAlpha: 0,
    rotate: -7,
    duration: 1.2,
    ease: "power4.out",
    scrollTrigger: {
      trigger: "#grid-1a",
      scroller: "body",
      start: "top 90%",
      end: "top 40%",
      scrub: 5,
      once: true
    }
  });

  gsap.from("#grid-1b",{
    y: 150,
    scale: 0.7,
    autoAlpha: 0,
    rotate: 7,
    duration: 1.2,
    ease: "power4.out",
    scrollTrigger: {
      trigger: "#grid-1b",
      scroller: "body",
      start: "top 90%",
      end: "top 40%",
      scrub: 5,
      once: true
    }
  });

    gsap.from("#grid-2a",{
    y: 150,
    scale: 0.7,
    autoAlpha: 0,
    rotate: -7,
    duration: 1.2,
    ease: "power4.out",
    scrollTrigger: {
      trigger: "#grid-2a",
      scroller: "body",
      start: "top 110%",
      end: "top 10%",
      scrub: 5,
      once: true
    }
  });

    gsap.from("#grid-2b",{
    y: 150,
    scale: 0.7,
    autoAlpha: 0,
    rotate: 7,
    duration: 1.2,
    ease: "power4.out",
    scrollTrigger: {
      trigger: "#grid-2b",
      scroller: "body",
      start: "top 110%",
      end: "top 10%",
      scrub: 5,
      once: true
    }
  });

  gsap.from("#grid-3a",{
    y: 150,
    scale: 0.7,
    autoAlpha: 0,
    rotate: -7,
    duration: 1.2,
    ease: "power4.out",
    scrollTrigger: {
      trigger: "#grid-3a",
      scroller: "body",
      start: "top 130%",
      end: "top 10%",
      scrub: 5,
      once: true
    }
  });

  gsap.from("#grid-3b",{
    y: 150,
    scale: 0.7,
    autoAlpha: 0,
    rotate: 7,
    duration: 1.2,
    ease: "power4.out",
    scrollTrigger: {
      trigger: "#grid-3b",
      scroller: "body",
      start: "top 110%",
      end: "top 10%",
      scrub: 5,
      once: true
    }
  });
  
  const split4  = new SplitText("#page3-headings-container",{type: "chars"});

  gsap.from(split4.chars,{
    y: 40,
    autoAlpha: 0,
    duration: 1.3,
    ease: "power4.out",
    stagger: {
      amount: 0.5,
      from: "start"
    },
    scrollTrigger: {
      trigger: "#page3-headings-container",
      scroller: "body",
      start: "top 80%",
      end: "top -30%",
      scrub: 5,
      once: true
    }
  });
  
  gsap.from("#page2-container-1, #page2-container-2, #page2-container-3, #page2-container-4",{
    filter: "blur(5px)",
    duration: 1.3,
    ease: "power4.inOut",
    scrollTrigger: {
      trigger: "#page3",
      scroller: "body",
      start: "top 80%",
      end: "top -30%",
      scrub: 2,
      once: true
    }
  });

  const split5  = new SplitText("#page2-heading-2",{type: "chars"});

    gsap.from(split5.chars,{
    y: 80,
    autoAlpha: 0,
    duration: 1.3,
    ease: "power4.out",
    stagger: {
      amount: 0.5,
      from: "start"
    },
    scrollTrigger: {
      trigger: "#page2-heading-2",
      scroller: "body",
      start: "top 90%",
      end: "top -30%",
      scrub: 2,
      once: true
    }
  });

  const split6  = new SplitText("#page6-bold-heading",{type: "chars"});

  gsap.from(split6.chars,{
    y: 120,
    autoAlpha: 0,
    duration: 1.5,
    ease: "power4.out",
    stagger: {
      amount: 0.5,
      from: "start"
    },
    scrollTrigger: {
      trigger: "#page6-bold-heading",
      scroller: "body",
      start: "top 70%",
      end: "bottom 120%",
      scrub: 10,
      once: true
    }
  });

  const split7  = new SplitText("#page5-heading-1",{type: "chars"});

    gsap.from(split7.chars,{
    y: 80,
    autoAlpha: 0,
    duration: 1.5,
    ease: "power4.out",
    stagger: {
      amount: 0.5,
      from: "start"
    },
    scrollTrigger: {
      trigger: "#page5-heading-1",
      scroller: "body",
      start: "top 90%",
      end: "top -25%",
      scrub: 3.5,
      once: true
    }
  });

  const split8  = new SplitText("#page4-footer",{type: "words"});

  gsap.from(split8.words,{
    y: 80,
    autoAlpha: 0,
    duration: 1.5,
    ease: "power4.out",
    stagger: {
      amount: 0.5,
      from: "start"
    },
    scrollTrigger: {
      trigger: "#page4-footer",
      scroller: "body",
      start: "top 100%",
      end: "top -10%",
      scrub: 2.5,
      once: true
    }
  });
});

