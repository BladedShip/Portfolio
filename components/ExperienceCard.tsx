import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#303030] p-10 hover:opacity-100 opacity-40 transition-opacity duration-200 overflow-hidden" >
      {/* FIXME:Switch to Image from img (Tech stack section)*/}
      <motion.img
        src="https://ih1.redbubble.net/image.493101319.0659/st,small,845x845-pad,1000x1000,f8f8f8.u3.jpg"
        className="w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        viewport={{
          once: true,
        }}
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Work Role</h4>
        <p className="font-bold text-2xl mt-1">Workplace</p>
        <div className="flex space-x-2 my-2">
            <img    
                src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
                className="w-10 h-10"
            />
            <img    
                src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
                className="w-10 h-10"
            />
            <img    
                src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
                className="w-10 h-10"
            />
            <img    
                src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
                className="w-10 h-10"
            />
        </div>
        <p className="uppercase py-5 text-gray-300">Start Date - End Date</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
            <li>Points to tell them what I did</li>
            <li>Points to tell them what I did</li>
            <li>Points to tell them what I did</li>
            <li>Points to tell them what I did</li>
            <li>Points to tell them what I did</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
