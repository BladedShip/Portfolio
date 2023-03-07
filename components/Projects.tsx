import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5, 6];
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly items-center mx-auto z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-300 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#fcfcfc]/80">
        {projects.map((project) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p:20 md:p-44 h-screen">
            <motion.img
            initial={{
                y:-300,
                opacity:0,
            }}
            transition={{
                duration:1,
            }}
            whileInView={{
                opacity:1,
                y:0,
            }}
            viewport={{
                once:true,
            }}
              src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
              alt="React"
              className="w-40"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline">Some very nice project name</span>
              </h4>
              <p className="md:text-left text-lg text-center">
                This is very nice project that can be used so many times but
                this project may not be as good as you think because I purposely
                broke it just to laugh at it so that I get maximum humor
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute w-full top-[30%] bg-[#303030] left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
