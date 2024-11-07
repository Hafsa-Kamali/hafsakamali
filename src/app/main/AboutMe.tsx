
"use client"
import { CheckIcon } from '@heroicons/react/24/solid';
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import Link from 'next/link';
import { slideInFromRight, slideInFromTop, slideInFromLeft } from '../../../utils/motion';

const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 }); 

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"} 
      className=""
      style={{ pointerEvents: 'auto' }}
    >
      <div className="mt-[12rem] bg-transparent pb-[3rem]">
        <div className="w-[90%] pt-[5rem] sm:pt-[5rem] md:pt-[7rem] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[2rem] z-[50]">

          {/* Text Section */}
          <div>
            <motion.div variants={slideInFromTop}>
              <p className="text-[24px] text-white opacity-85">About Me</p>
            </motion.div>

            <motion.div variants={slideInFromRight(0.8)}>
              <h1 className="mt-[0.6rem] p-2 sm:p-0 leading-[3.5rem] text-white text-[27px] md:text-[30px] lg:text-[30px] xl:text-[45px]">
                Professional
                <span className="text-transparent text-5xl font-serif md:text-7xl bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  Website
                </span>{" "}
                for your business
              </h1>
            </motion.div>

            <motion.div 
              variants={slideInFromLeft(1)}
              className="text-[15px] mt-[1.3rem] text-white opacity-75 hover:text-slate-50 transition-colors duration-300"
            >
              Elevate your digital presence with our expert web development, design, and multimedia services.
              We craft stunning websites that captivate your audience, create engaging videos that tell your story,
              and design animations and graphics that leave a lasting impression. Let us transform your vision into a digital reality.

              <div className="mt-[2rem] space-y-3">
                <div className="flex items-center space-x-4">
                  <CheckIcon className="w-[2rem] h-[2rem] text-purple-500" />
                  <p className="text-[18px] text-white">Next Js Development</p>
                </div>
                <div className="flex items-center space-x-4">
                  <CheckIcon className="w-[2rem] h-[2rem] text-purple-500" />
                  <p className="text-[18px] text-white">Frontend-Web Development</p>
                </div>
                <div className="flex items-center space-x-4">
                  <CheckIcon className="w-[2rem] h-[2rem] text-purple-500" />
                  <p className="text-[18px] text-white">React Development</p>
                </div>
                <div className="flex items-center space-x-4">
                  <CheckIcon className="w-[2rem] h-[2rem] text-purple-500" />
                  <p className="text-[18px] text-white">HTML, CSS, JavaScript, TypeScript Development</p>
                </div>
                <div className="flex items-center space-x-4">
                  <CheckIcon className="w-[2rem] h-[2rem] text-purple-500" />
                  <p className="text-[18px] text-white">Website Designer</p>
                </div>
                <div className="flex items-center space-x-4">
                  <CheckIcon className="w-[2rem] h-[2rem] text-purple-500" />
                  <p className="text-[18px] text-white">Video Editing, Animation Designer</p>
                </div>
                <div className="flex items-center space-x-4">
                  <CheckIcon className="w-[2rem] h-[2rem] text-purple-500" />
                  <p className="text-[18px] text-white">Graphics & Logos Designer</p>
                </div>
                <div className="flex items-center space-x-4">
                  <CheckIcon className="w-[2rem] h-[2rem] text-purple-500" />
                  <p className="text-[18px] text-white">Film Making, Editing</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:ml-auto lg:mr-4">
            <motion.div variants={slideInFromRight(1)}
            className="grid grid-cols-1 sm:grid-cols-2 items-center gap-[2rem] z-[50000]"
            style={{ pointerEvents: 'auto' }}
           >
                <div className="p-6 text-center button-primary md:rounded-lg cursor-pointer hover:bg-purple-600 transition-colors duration-300 z-[30000]">
                  <p className="text-[50px] text-white">100+</p>
                  <p className="text-[20px] text-white font-semibold">Certificates</p>
                </div>
                <div className="p-6 text-center button-primary md:rounded-lg cursor-pointer hover:bg-purple-600 transition-colors duration-300 z-[30000]">
                  <p className="text-[50px] text-white">12+</p>
                  <p className="text-[20px] text-white font-semibold">Happy Clients</p>
                </div>
                <div className="p-6 text-center button-primary md:rounded-lg cursor-pointer hover:bg-purple-600 transition-colors duration-300 z-[30000]">
                  <p className="text-[50px] text-white">30+</p>
                  <p className="text-[20px] text-white font-semibold">Projects Done</p>
                </div>
                <div className="p-6 text-center button-primary md:rounded-lg cursor-pointer hover:bg-purple-600 transition-colors duration-300 z-[30000]">
                  <p className="text-[50px] text-white">10+</p>
                  <p className="text-[20px] text-white font-semibold">Skills Handler</p>
                </div>
            </motion.div>
          </div>
          <button
          type='button'
          className="py-2 px-5 md:py-3 md:px-5 button-primary text-center text-white cursor-pointer rounded-lg max-w-[160px] md:max-w-[200px] bg-gradient-to-r from-purple-500 to-cyan-500 relative z-20"
          > 
          <Link href="/About" className='cursor-pointer' >
           Read More
           </Link></button>
         
        </div>
        
      </div>
      <div>
      </div>
    </motion.div>
  );
};

export default AboutMe;

