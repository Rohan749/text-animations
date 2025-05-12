"use client";

import { useHeroAnimation } from "@/animations/HeroAnimation";
import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import s1 from "../../../public/s1.png";
import s2 from "../../../public/s2.png";
import s3 from "../../../public/s3.png";
import s4 from "../../../public/s4.png";
import s5 from "../../../public/s5.png";
import s6 from "../../../public/s6.png";
import s7 from "../../../public/s1.png";
import s8 from "../../../public/s2.png";
import t1 from "../../../public/t1.png";
import t2 from "../../../public/t2.png";
import t3 from "../../../public/t3.png";
import t4 from "../../../public/t4.png";
import t5 from "../../../public/t5.png";
import bot from "../../../public/bot.gif";
import r1 from "../../../public/r1.png";
import Image from "next/image";
import triangle from "../../../public/tri-char.gif";

const Zitter = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (headingRef.current) {
      useHeroAnimation(headingRef.current);
    }
  });

  return (
    <section className="w-full h-[100vh] flex items-center justify-center">
      <div className="flex flex-col items-center justify-between gap-8">
        <div />
        <div className="bg-gray-300 px-3 py-1.5 rounded-full text-black flex items-center text-xs gap-2 new opacity-0">
          <span>NEW: Infinite Canvas</span>{" "}
          <span className="text-purple-500">{` `} Learn more</span>
        </div>
        <div className="title flex text-center flex-col items-center text-8xl text-white font-extrabold gap-0">
          <h1
            ref={headingRef}
            className="flex items-center gap-x-6 heading opacity-0"
          >
            {`Super fast motion`
              .trim()
              .split(" ")
              .map((word, i) => (
                <span key={i}>
                  <span className="word flex items-center mr-2 whitespace-nowrap">
                    {word.split("").map((letter, j) => (
                      <span
                        key={`letter-${i}-${j}`}
                        className="letter inline-block"
                      >
                        {i === 0 && j === 0 ? (
                          <span className="relative inline-block min-w-14 h-30  overflow-visible">
                            {[s1, s2, s3, s4, s5, s6, s7, s8, s1, s2, s3].map(
                              (n) => (
                                <Image
                                  key={`img-${Math.random()}`}
                                  src={n} // your image paths
                                  className={`first-letter-img absolute  left-0 w-full h-full object-contain opacity-0 pt-4`}
                                  // data-img={`img-${n}`}
                                  alt={`img`}
                                />
                              )
                            )}
                            <span className="first-letter-text absolute bottom-0 left-0 w-full h-full flex justify-center items-center opacity-0 pt-4">
                              {letter}
                            </span>
                          </span>
                        ) : i === 0 && j === 3 ? (
                          <span className="relative ">
                            <Image
                              src={bot}
                              alt=""
                              className="bot absolute top-[-1rem] left-0"
                              height={200}
                              width={200}
                            />
                            <span className="letter-e">{letter}</span>
                          </span>
                        ) : i === 1 && j === 1 ? (
                          <span className="relative ">
                            <span className=" w-[3.4rem] overflow-hidden bottom-0 pb-4 left-0 h-full flex justify-center items-center pt-4">
                              <span className="letter-a">
                                {letter}
                                {letter}
                                {letter}
                                {letter}
                                {letter}
                                {letter}
                                {letter}
                                {letter}
                                {letter}
                                {letter}
                                {letter}
                                {letter}
                                {letter}
                                {letter}
                                {letter}
                              </span>
                            </span>
                          </span>
                        ) : i === 2 && j === 2 ? (
                          <span className="relative inline-block min-w-10 h-30  overflow-visible">
                            {[t1, t2, t3, t4, t5, t1, t3].map((n) => (
                              <Image
                                key={`img-${Math.random()}`}
                                src={n} // your image paths
                                className={`t-letter-img absolute  left-0 w-14 overflow-visible h-full object-contain opacity-0 pt-4`}
                                // data-img={`img-${n}`}
                                alt={`img`}
                              />
                            ))}
                            <span className="t-letter-text absolute bottom-0 left-0 w-full h-full flex justify-center items-center opacity-0 pt-4">
                              {letter}
                            </span>
                          </span>
                        ) : (
                          letter
                        )}
                      </span>
                    ))}
                  </span>
                </span>
              ))}
          </h1>
          <h1 className="flex items-center gap-x-6 heading opacity-0 mt-[-35px]">
            {`for every team`
              .trim()
              .split(" ")
              .map((word, i) => (
                <>
                  <span className="word whitespace-nowrap flex items-center relative">
                    {word.split("").map((letter, j) => (
                      <span key={`letter-${i}-${j}`} className="inline-block">
                        {i === 2 && j === 2 ? (
                          <span className=" ">
                            <span className=" w-[3.4rem] overflow-hidden bottom-0 pb-4 left-0 h-full flex justify-center items-center pt-4 team-a">
                              <span className="letterA">{letter}</span>
                            </span>
                            <Image
                              src={triangle}
                              alt=""
                              className="triangle absolute overflow-visible h-[4rem] w-[6rem] bottom-6 left-17"
                            />
                          </span>
                        ) : i === 0 && j === 2 ? (
                          <span className="relative inline-block min-w-14 h-30  overflow-visible">
                            <Image
                              src={r1}
                              width={60}
                              alt=""
                              className="img-r absolute bottom-3 left-1"
                            />

                            <span className="letter-r absolute bottom-0.3 left-0 w-full h-full flex justify-center items-center opacity-0 pt-4">
                              {letter}
                            </span>
                          </span>
                        ) : (
                          letter
                        )}
                      </span>
                    ))}
                  </span>
                </>
              ))}
          </h1>
        </div>
        <div>
          <button className="btn_tertiary opacity-0">
            Try Jitter for free
          </button>
        </div>
        <div className="sponsors opacity-0">
          --------------- Over 20,000 creative teams use Jitter to create
          stunning animations online. ---------------
        </div>
      </div>
    </section>
  );
};

export default Zitter;
