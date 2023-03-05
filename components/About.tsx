import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};
// FIXME: Rework some styles to better work on smaller screens and mobile

function About({}: Props) {
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
    className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-300 text-2xl">
        About
      </h3>
      <motion.img
        src="https://ih1.redbubble.net/image.493101319.0659/st,small,845x845-pad,1000x1000,f8f8f8.u3.jpg"
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
        }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded object-cover md:rounded-lg md:w-64 md:h-92 xl:w-[500px] xl:h-[600px]"
      />
      <div className="sapce-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          <span className="underline">Who am I</span> and what do I do?
        </h4>
        <p className = "my-10 text-base">
          A Designer and Frontend Developer from Thiruvananthapuram, Kerala.
          Constantly learning the ins and outs of JavaScript to make performant
          and good looking applications using the ever evolving collection of
          libraries. <br />
          <br />
          Persistently trying to figure out the simplest solutions to the most
          complex problems
        </p>
      </div>
    </motion.div>
  );
}

export default About;
