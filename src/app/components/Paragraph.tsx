"use client";
import { useGSAP } from "@gsap/react";
import React from "react";
import { ParagraphAnimation } from "@/animations/ParagraphAnimations";

const Paragraph = () => {
  useGSAP(() => {
    ParagraphAnimation();
  });

  return (
    <div className="text-white text_section min-h-screen z-0 relative flex justify-center pt-20 h-[300vh]">
      <div className=" text-white flex items-center justify-center  max-w-[80rem]">
      <h1 className="text-5xl font-bold reveal-text flex flex-wrap items-center">
  {` is taken by companies and used to train the next wave of AI models and build the world's top products and services. Yet it often happens without any earnings being distributed back to you.`
    .split(" ")
    .map((word, i) => (
      <React.Fragment key={`first-${i}`}>
        {/* Normal word */}
        <span className="word rounded-full my-3 inline-block mr-2 whitespace-nowrap">
          <span className="inline-block ">{word}</span>
        </span>

        {/* Inject special span after 20th word */}
        {i === 0 && (
          <span className=" word p-3 rounded-xl flex items-center justify-center mr-2 whitespace-nowrap">
            Your data
          </span>
        )}
       
      </React.Fragment>
    ))}

  <div className="w-full h-5" />

  {`Now it's time for a change. With Navigate you join a decentralized intelligence platform that puts the power back in your hands and rewards you for the data you contribute.`
    .split(" ")
    .map((word, i) => (
      <React.Fragment key={`second-${i}`}>
        <span className="word rounded-full my-3 inline-block mr-2 whitespace-nowrap">
          <span className="inline-block">{word}</span>
        </span>
      </React.Fragment>
    ))}
</h1>

      </div>
    </div>
  );
};

export default Paragraph;
