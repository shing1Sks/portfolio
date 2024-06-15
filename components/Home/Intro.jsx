"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import React from "react";
import { Meteors } from "../ui/meteors";
import About from "./Intro/About";
function Intro() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        <div className="">
          <div className=" w-full relative">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
              
              <div className="bg-slate-800 p-4 rounded-xl">
                <p className="w-full text-lg sm:text-2xl text-slate-400 font-semibold">
                  Keeping the problem-solving spirit of engineering alive
                  through web development, I humbly introduce myself: Shreyash
                  Kumar Singh.{" "}
                </p>
                <p className="pt-3 px-2 text-sm pb-5 sm:text-lg font-normal text-slate-500">
                  I am a passionate coder and full-stack web developer dedicated
                  to creating impactful projects that improve the lives of
                  millions. Inspired and quick to learn, with desire to deliver
                  the best in everything I do.
                </p>
                <div className="flex flex-row text-lg items-center">
                  <div className="avatar">
                    <div className="w-24 mask mask-hexagon">
                      <img src="./profile-pic.png" />
                    </div>
                  </div>
                  <About />
                </div>
              </div>
              <Meteors number={20} />
            </div>
          </div>
        </div>
      </motion.h1>
    </HeroHighlight>
  );
}

export default Intro;
