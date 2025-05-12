import gsap from "gsap";

export const useHeroAnimation = (heading: HTMLElement) => {
  const letters = heading.querySelectorAll(".letter");
  const images = heading.querySelectorAll(".first-letter-img");
  const images_t = heading.querySelectorAll(".t-letter-img");
  const text = heading.querySelector(".first-letter-text");
  const text_t = heading.querySelector(".t-letter-text");
  const letterE = heading.querySelector(".letter-e");
  const triangleImg = heading.querySelector(".triangle");


    // Title section animation
    gsap.fromTo(
      ".heading",
      {
        opacity: 0,
        scale: 2.5,
      },
      {
        scale: 1,
        opacity: 1,
        ease: "back.out",
        delay: 1,
        stagger: 0.04,
      }
    );
  
  
    // Button animations
    gsap.fromTo(
      ".btn_tertiary",
      {
        opacity: 0,
        scale: 0,
      },
      {
        opacity: 1,
        scale: 1,
        delay: 1.6,
        ease: "back.out",
      }
    );
  
    gsap.fromTo(
      ".new",
      {
        opacity: 0,
        scale: 0,
      },
      {
        opacity: 1,
        scale: 1,
        delay: 1.3,
        ease: "back.out",
      }
    );
  
    gsap.to(".sponsors", {
      opacity: 1,
      delay: 1.6,
      ease: "back.in",
    });


  // Animation for Letter: "S" of "Super"
  const letter_s_tl = gsap.timeline();

  images.forEach((img, index) => {
    letter_s_tl
      .set(img, { opacity: 1 })
      .to({}, { duration: 0.1 })
      .set(img, { opacity: 0, delay: 0.15 });
  });

  letter_s_tl.fromTo(
    text,
    {
      opacity: 0,
      scale: 0,
    },
    {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      ease: "back.out(1.7)",
    }
  );


  // Animation for robot on letter "e" of "super"
  const bot_tl = gsap.timeline();

  bot_tl
    .fromTo(
      ".bot",
      {
        opacity: 0,
        y: -70,
        scale: 1.4,
      },
      {
        opacity: 1,
        y: -20,
        ease: "bounce.out",
        delay: 1.7,
        duration: 2,
        scale: 1.6,
      }
    )
    .to(".letter-e", {
      scale: 0,
    })
    .fromTo(
      ".bot",
      {
        y: 0,
      },
      {
        y: 40,
        ease: "bounce.out",
      }
    );


  // Animation for Letter: "t" of "motion"
  const letter_t_tl = gsap.timeline();

  images_t.forEach((img, index) => {
    letter_t_tl
      .set(img, { opacity: 1 })
      .to({}, { duration: 0.1 })
      .set(img, { opacity: 0, delay: 0.15 });
  });

  letter_t_tl.fromTo(
    text_t,
    {
      opacity: 0,
      scale: 0,
    },
    {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      ease: "back.out(1.7)",
    }
  );


  // Animation for letter "r" of "for"
  const letter_r_tl = gsap.timeline();

  letter_r_tl.set(".img-r", { opacity: 0, delay: 2 }).set(".letter-r", {
    opacity: 1,
    x: -4,
  });


  // Motion animation for letter "a" of "fast"
  gsap.to(".letter-a", {
    x: -266,
    delay: 1,
    duration: 1.5,
    ease: "back.out",
  });


  // Animation for triangle on letter "a" of "team"
  const triangle_tl = gsap.timeline();

  triangle_tl
    .fromTo(
      ".triangle",
      {
        scale: 0,
      },
      {
        scale: 1,
        delay: 1.3,
        duration: 0.2,
        rotate: 6
      }
    ).to(".triangle", {
      rotate: -6,
      x: -4,
    })
    .to(".triangle", {
      scale: 0,
      delay: 1,
    })
    .fromTo(
      ".letterA",
      {
        scale: 0,
        opacity: 0,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.2,
        delay: 0.15,
      },
      "<"
    )
};
