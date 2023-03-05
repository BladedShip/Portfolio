import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};

function SkillIcon({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-default">
      <motion.img
        src="https://cdn.worldvectorlogo.com/logos/react-2.svg"
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1,
        }}
        className="w-20 h-20 rounded-full border-gray-500 object-cover border xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 transition group-hover:opacity-80 duration-300 ease-in-out group-hover:bg-white xl:w-24 xl:h-24 w-20 h-20 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">90%</p>
        </div>
      </div>
    </div>
  );
}

export default SkillIcon;
