"use client"


import { TextAnimation } from "@/animations/TextAnimation";
import { useGSAP } from "@gsap/react";
import React from "react";

const Text = () => {

    useGSAP(() => {
        TextAnimation()
    }, [])

  return (
    <section className="text-center element text-9xl font-bold text-white mt-10 text_section overflow-x-hidden">
      I'M ROHAN KUMAR PANDEY. A FRONTEND DEVELOPER WITH STRONG INTEREST IN
      FRONTEND DEVELOPMENT AND ANIMATIONS. SUBSCRIBE TO MY CHANNEL NAMED RCODE!
       ENJOY!!!
    </section>
  );
};

export default Text;
