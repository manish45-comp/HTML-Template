document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  const fadeInProperties = {
    opacity: 1,
    y: 0,
    duration: 0.1,
    stagger: 1,
    ease: "power4.in",
  };

  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#demo",
      start: "top 50%",
      end: "top 50%",
      toggleActions: "play none play reverse",
    },
  });

  tl2
    .to("#animateElement1", fadeInProperties)
    .to("#animateElement2", fadeInProperties)
    .to("#animateElement3", fadeInProperties)
    .to("#animateElement4", fadeInProperties)
    .to("#animateElement5", fadeInProperties)
    .to("#animateElement6", fadeInProperties)
    .to("#animateElement7", fadeInProperties)
    .to("#animateElement8", fadeInProperties)
    .to("#animateElement9", fadeInProperties);

  const pillBox1 = document.querySelector(".pill-box-1");
  const pillBox2 = document.querySelector(".pill-box-2");
  const pillBox3 = document.querySelector(".pill-box-3");

  const pillBoxWidth1 = pillBox1.offsetWidth;
  const pillBoxWidth2 = pillBox2.offsetWidth;
  const pillBoxWidth3 = pillBox3.offsetWidth;

  const pillContainerWidth = window.innerWidth;

  gsap.fromTo(
    pillBox1,
    { x: 0 },
    {
      x: pillBoxWidth1 - pillContainerWidth,
      duration: 20,
      repeat: -1,
      ease: "linear",
      yoyo: true,
    }
  );
  gsap.fromTo(
    pillBox2,
    { x: 0 },
    {
      x: -(pillBoxWidth1 - pillContainerWidth),
      duration: 20,
      repeat: -1,
      ease: "linear",
      yoyo: true,
    }
  );
  gsap.fromTo(
    pillBox3,
    { x: 0 },
    {
      x: pillBoxWidth1 - pillContainerWidth,
      duration: 20,
      repeat: -1,
      ease: "linear",
      yoyo: true,
    }
  );

  var l1 = gsap.timeline();

  l1.from(".logo", {
    y: -100,
    opacity: 0,
    duration: 0.5,
    ease: "power4.out",
  })
    .from(
      ".link1",
      {
        x: -10,
        y: -100,
        opacity: 0,
        duration: 0.5,
        ease: "power4.out",
      },
      "-=0.3"
    )
    .from(
      ".link2",
      {
        x: -10,
        y: -100,
        opacity: 0,
        duration: 0.5,
        ease: "power4.out",
      },
      "-=0.3"
    );

  l1.from(".fadeUp", {
    opacity: 0,
    y: 20,
    duration: 0.4,
    ease: "power2.out",
  })
    .from(
      ".fadeUp2",
      {
        opacity: 0,
        y: 20,
        duration: 0.4,
        ease: "power2.out",
      },
      "-=0.3"
    )
    .from(
      ".fadeUp3",
      {
        opacity: 0,
        y: 20,
        duration: 0.4,
        ease: "power2.out",
      },
      "-=0.3"
    )
    .from(
      ".fadeUp4",
      {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      },
      "-=0.3"
    )
    .l1.to(
      ".fadeUp4",
      {
        opacity: 1,
        duration: 0,
        ease: "power2.out",
      },
      "-=0.3"
    );
});
