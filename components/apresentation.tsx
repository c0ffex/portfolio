import React, { Fragment } from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from "next/image"
import deved from "../public/dev-ed-wave.png"

const Apresentation = () => {
  return (
    <>
      <div className="text-center p-10">
        <h2 className="text-5xl py-2 text-teal-600 font-medium">Yudi Sakuma</h2>
        <h3 className="text-2xl py-2 md:text-3xl">Back-End developer.</h3>
        <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto">
          Freelancer providing services for programming. Check some of my works
          down below!
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
        <AiFillLinkedin />
        <AiFillGithub />
      </div>
      <div className="relative overflow-hidden mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
        <Image src={deved} alt={""}/>
      </div>
      <div></div>
    </>
  );
};

export default Apresentation;
