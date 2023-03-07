import React from "react";
import { motion } from "framer-motion";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function Contact({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    window.location.href = `mailto:ultimateallyn@gmail.com?subject=${data.subject}&body=Hi, I'm ${data.name}. ${data.message} (${data.email})`;
  };

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
        Contact Me
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-2xl font-semibold text-center">
          Have something to ask? <span className="underline">Let's Talk</span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#fcfcfc] h-6 w-6" />
            <p>+91 9048 148 307</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#fcfcfc] h-6 w-6" />
            <p>ultimateallyn@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#fcfcfc] h-6 w-6" />
            <p>bladedshipyt@gmail.com</p>
          </div>
        </div>
        <form
          className="flex flex-col space-y-2 w-fit mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInp"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInp"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInp"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInp resize-none"
          />
          <button className="bg-[#fcfcfc] py-5 px-10 rounded-md text-[#2c2c2c] font-bold text-lg">
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default Contact;
