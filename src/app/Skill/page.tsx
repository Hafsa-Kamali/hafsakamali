"use client"
import React, { useRef } from 'react';

import SkillCard from '@/sub/SkillCard';
import { motion, useInView } from 'framer-motion';
import { slideInFromLeft, slideInFromTop } from '../../../utils/motion';


const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 }); 

  return (
    <motion.div
    ref={ref}
    initial="hidden"
    animate={isInView ? "visible" : "hidden"} 
    className="mt-[-6rem] pb-[3rem] relative z-[20]">
        <motion.div
        variants={slideInFromTop}
         className="w-[95%] pt-[5rem] sm:pt-[5rem] md:pt-[3rem] mx-auto grid items-center gap-[2rem]">
              <h1 className="text-[28px] text-white opacity-85 mt-[8rem]">
                My Skills
              </h1>
              <h1 className="mt-[0.6rem] p-2 sm:p-0 leading-[3.5rem] text-white text-[27px] md:text-[30px] lg:text-[30px] xl:text-[45px]">
                Let's Explore Popular
                <span className="text-transparent text-5xl font-serif md:text-8xl bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  Skills
                </span><br />
                & Experience 
              </h1>
              <p className="text-[18px] text-white opacity-85 mt-[1rem] w-[98%]">
              Unleash the potential of exceptional skills honed to perfection! With a mastery in frontend development, content creation, graphic design, and more, every project is a testament to innovation and excellence. Committed to delivering on time, with unmatched quality and 24/7 support, your success is our mission. Let’s turn your ideas into reality!"As a certified web developer with expertise in HTML, CSS, JavaScript, TypeScript, and Next.js, I craft dynamic, responsive, and visually engaging websites. My proficiency in modern frameworks like React and Tailwind CSS, combined with a deep understanding of front-end development, enables me to deliver seamless user experiences. With a passion for innovative design and optimized performance, I am committed to building high-quality web solutions that meet the evolving demands of today's digital landscape."
              </p>
              </motion.div> 
<motion.div
      variants={slideInFromLeft(1)}
      style={{ pointerEvents : 'auto'}}
       className='items-center'>
       <div className='col-span-4 z-50 '>
<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[0.4rem] items-center'>
<div>
  <SkillCard 
  title="React"
   image="/react.png"
    percent="80%"
    />
  </div>
  <div>
  <SkillCard 
  title="CSS"
   image="/css.png"
    percent="95%"
    />
  </div>
  <div>
  <SkillCard 
  title="JavaScript"
   image="/js.png"
    percent="70%"
    />
  </div>
  <div>
  <SkillCard 
  title="Next Js"
   image="/next.png"
    percent="95%"
    />
  </div>
  <div>
  <SkillCard 
  title="TypeScript"
   image="/ts.png"
    percent="90%"
    />
  </div>
  <div>
  <SkillCard 
  title="Tailwind Css"
   image="/tailwind.png"
    percent="97%"
    />
  </div>
  <div>
  <SkillCard 
  title="HTML"
   image="/html.png"
    percent="80%"
    />
  </div>
  <div>
  <SkillCard 
  title="Figma"
   image="/figmaicon.png"
    percent="60%"
    />
  </div>
  <div>
  <SkillCard 
  title="Python"
   image="/py.png"
    percent="95%"
    />
  </div>
  <div>
  <SkillCard 
  title="Node Js"
   image="/node-js.png"
    percent="80%"
    />
  </div>
</div>
</div>
</motion.div>
          </motion.div>
       
  )
}

export default Skills