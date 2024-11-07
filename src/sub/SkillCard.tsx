
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { slideInFromLeft } from '../../utils/motion';
interface Props {
    image: string;
    title: string;
    percent: string;
}
const SkillCard = ({image, title, percent}: Props) => {
  return (
    <motion.div
    initial="hidden"
      animate="visible"
      variants = { slideInFromLeft(0.5)}
    className =''>
    
  <div className='p-4 w-[95%] mt-4 border  border-white border-2 mx-auto rounded-lg items-center cursor-pointer text-center bg-gradient-to-l from-[#3c087e66] via-[#bf97ff70] to-[#712fff3d] shadow-[#bf97ff70]-inset opacity-80 z-[50] hover:scale-105 hover:shadow-white shadow-lg'>
      <Image 
      src = {`${image}`}
      alt = {title}
      width = {80}
      height = {80}
      className='object-cover mx-auto'
      />
        <h1 className='text-[18px] mt-[1rem] text-white font-[600]'>{title}</h1>
        <p className='mt-[1rem] text-white text-opacity-85 rounded-lg p-2 bg-black bg-opacity-85 hover:bg-white hover:bg-opacity-80 hover:text-black hover:shadow-black shadow-md'>
          {percent}
        </p>
   </div>
        
        </motion.div>
 
  )
}

export default SkillCard