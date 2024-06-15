"use client";
import React from "react";
import { motion } from "framer-motion";
import { LinkPreview } from "@/components/ui/link-preview";

function Projects() {
  return (
    <div className="w-full flex items-center justify-center flex-col">
      <p className="text-center font-bold text-3xl pt-4 pb-2">The top Projects !</p>
      <div className="w-full flex items-center justify-center gap-4 flex-col sm:flex-row">
        <div className="w-[95%] sm:w-[360px] h-[530px] bg-slate-700 pt-5 rounded-lg border-2 border-slate-400">
          <div className="text-neutral-500 dark:text-neutral-400 text-xl mx-auto mb-5 flex items-center justify-center">
            <LinkPreview
              url="https://quizup-skillup.vercel.app/"
              className="font-bold"
            >
              <img src="./qs-logo-rmbg.png" width={200} height={200} alt="" />
            </LinkPreview>
          </div>
          <p className="text-2xl text-center font-semibold text-neutral-200">Quizup-Skillup</p>
          <p className="p-1 pb-3">To make learning enjoyable and engaging, QuizUp SkillUp aims to transform the learning and testing process into a fun, game-like environment using AI. This application has the potential to instill positive learning habits in millions by making the learning experience enjoyable for all ages. By incorporating game-like scores and leaderboard components, QuizUp SkillUp strives to make learning as fun and rewarding as possible.
          </p>
        </div>
        <div className="w-[95%] sm:w-[360px] h-[530px] bg-slate-700 pt-5 rounded-lg border-2 border-slate-400">
          <div className="text-neutral-500 dark:text-neutral-400 text-xl mx-auto mb-5 flex items-center justify-center">
            <LinkPreview
              url="https://ky4r.vercel.app/"
              className="font-bold"
            >
              <img src="./kyr.png" width={200} height={200} alt="" />
            </LinkPreview>
          </div>
          <p className="text-2xl text-center font-semibold text-neutral-200">Know Your Roads</p>
          <p className="p-1 pb-3">Know Your Roads (KYR), a community-driven platform dedicated to spreading awareness about the true conditions of our roads. Our mission is to provide accurate, real-time information about road conditions, ensuring that everyone can travel safely and avoid the hazards that polished news reports often overlook.

          </p>
        </div>
        <div className="w-[95%] sm:w-[360px] h-[530px] bg-slate-700 pt-5 rounded-lg border-2 border-slate-400">
          <div className="text-neutral-500 dark:text-neutral-400 text-xl mx-auto mb-5 flex items-center justify-center">
            <LinkPreview
              url="https://op-db-docs.vercel.app/"
              className="font-bold"
            >
              <img src="./op-db-logo.png" width={200} height={200} alt="" />
            </LinkPreview>
          </div>
          <p className="text-2xl text-center font-semibold text-neutral-200">OP-DB</p>
          <p className="p-1 pb-3">The op-db package streamlines database setup into a few simple steps, creating a versatile server that can be fully customized and, once hosted, serves most of your project needs for all your projects.With its innovative project segregation system, op-db allows you to reuse the same API endpoints across multiple projects, making it an ideal choice for hackathons and small-scale projects.
          </p>
        </div>

       
      </div>
    </div>
  );
}

export default Projects;
