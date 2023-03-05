import React from "react";
import { motion } from "framer-motion";

import SkillIcon from "./SkillIcon";

type Props = {};

function Skills({}: Props) {
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
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:p-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-300 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-36 tracking-[3px] uppercase text-gray-500 text-sm">
        An ever growing list of tech
      </h3>
      <div className="grid grid-cols-4 gap-5">
        <SkillIcon/>
        <SkillIcon/>
        <SkillIcon/>
        <SkillIcon/>
        <SkillIcon/>
        <SkillIcon/>
        <SkillIcon/>
        <SkillIcon/>
        <SkillIcon/>
        <SkillIcon/>
        <SkillIcon/>
        <SkillIcon/>
        <SkillIcon/>

      </div>
    </motion.div>
  );
}

export default Skills;
