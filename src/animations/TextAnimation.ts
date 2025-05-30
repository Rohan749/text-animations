import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

export const TextAnimation = () => {
  gsap.registerPlugin(ScrollTrigger, SplitText);

  const split = new SplitText(".text_section", {
    type: "lines"
  });

  // Optional: Apply perspective to the parent for a 3D effect
  gsap.set(".text_section", {
    perspective: 1000
  });

  split.lines.forEach((line) => {
    gsap.fromTo(
      line,
      {
        opacity: 0,
        rotateX: -120,
        transformOrigin: "top center"
      },
      {
        opacity: 1,
        rotateX: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: line,
          start: "top 90%", 
          end: "top 50%",
          scrub: true
        }
      }
    );
  });
};
