import React from "react";

import ScrollTrigger from "gsap/ScrollTrigger";
import { customEase } from "../../utils/animationUtils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const ParagraphAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".reveal-text").forEach((el) => {
    const targets = (el as HTMLElement).querySelectorAll(".word");

    const txtTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".reveal-text",
        start: "center 60%",
        end: "center+=100",
        //   end: "center top",
        scrub: true,
        pin: true,
      },
    });

    txtTl.fromTo(
      targets,
      {
        opacity: 0,
        backgroundColor: "#191919",
        color: "transparent",
      },
      {
        opacity: 1,
        keyframes: [
          {
            backgroundColor: (i, target) => {
                return i === 1 ? "#FEC700" : i === 59 ? "red" :"transparent"
            },
            padding: (i, target) => {
                return i === 59 && "0 5px"
            },
            duration: 1, // backgroundColor animates first
          },
          {
            color: (i, target) => {
                return i === 1 ? "black" : "white"
            },
            duration: 0.5, // then text color animates after
          },
        ],
        ease: "power2.out",
        stagger: 0.03,
      }
    );
  });
};
