"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '../../utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { TypewriterEffect } from '@/Helper/TypewriterEffect'
import Link from 'next/link'

const HeroContent = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className='flex flex-col md:flex-row items-center justify-center px-20 mt-12 w-full z-[20]'
        >
            <div className='h-full w-full flex flex-col gap-7 justify-center m-auto text-start px-6'>
            <motion.div
                    variants={slideInFromTop}
                    className='Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] w-auto h-auto flex items-center'
                >
                    <SparklesIcon
                    style={{ color: '#7042f88b' }}
                    className='text-[#b49bff] mr-[10px] h-5 w-5' />
                    <h1 className='Welcome-text text-[13px]'>
                        Hafsa Kamali Portfolio
                    </h1>
                </motion.div>
                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className='flex flex-col gap-6 mt-6 text-3xl font-bold text-white max-w--[600px] w-auto h-auto'
                >
                    <span>
                       
                        <span className='text-xl font-family text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-500'>
                            {" "} PROVIDING THE BEST PROJECT EXPERIENCE {" "}
                        </span>
                       
                    </span>
                    <span className="text-white text-4xl md:text-5xl font-semibold">
            Hello, I&apos;m
            <span className="text-transparent text-6xl font-serif md:text-6xl bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}Hafsa Kamali{" "}
            </span>
          </span>
          <span className="text-white text-base md:text-xl font-semibold mt-[2rem] md:mt-[2rem]">
            <TypewriterEffect />
          </span>
                </motion.div>
                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className='text-lg text-gray-400 my-5 max-w-[600px] gap-6'
                > I&apos;m a Full Stack Web Developer with experience in websites and many programming languages like HTML, CSS, JavaScript, Next.js,
                 TypeScript and React. I am passionate about creating user-friendly and visually appealing websites that meet the needs of my clients. I am also highly skilled in graphic design, video editing, and animation.
                 I am always looking for new challenges to improve my skills. Check out my projects and skills.
                </motion.p>
                <motion.div
                  variants={slideInFromLeft(1)}
                className="flex justify-center md:justify-start space-x-4 mt-4">
         <button
         type='button'
            className="py-2 px-4 md:py-3 md:px-5 button-primary text-center text-white cursor-pointer rounded-lg max-w-[160px] md:max-w-[200px] bg-gradient-to-r from-purple-500 to-cyan-500"
          > <Link href = "/Contact" className='cursor-pointer'>
            Hire me
            </Link>
        </button>
          <button 
          type='button'
            className="py-2 px-5 md:py-3 md:px-5 button-primary text-center text-white cursor-pointer rounded-lg max-w-[160px] md:max-w-[200px] bg-gradient-to-r from-purple-500 to-cyan-500"
          ><Link href = "/Project" className='cursor-pointer'>
           View my Projects
           </Link>
       </button>
        </motion.div>
            </div>

            <motion.div
                variants={slideInFromRight(0.8)}
                className='w-[90%] h-full flex mt-[2rem] md:mt-32 justify-center items-center'

            >
              <Image 
          src="/ansalobla.png" 
          alt="hafsa logo" 
          width={450} 
          height={450} 
          className=" rounded-lg bg-black shadow-lg shadow-white mt-24 md:mt-32  "
        />
            </motion.div>
        </motion.div>
    )
}
export default HeroContent