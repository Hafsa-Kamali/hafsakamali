
import Image from 'next/image';
import {motion} from 'framer-motion';

import React from 'react'
import { slideInFromLeft } from '../../utils/motion';


interface Props {
    image: string;
    title: string;
    description : string;
}
const ServiceCard = ( {image, title, description }: Props) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className=' p-6 rounded-lg z-[20]'
    >
   <Image 
   src = {image}
   alt = {title}
   width = {100}
   height = {100}
   className='mt-[1rem] mb-[2rem] mx-auto'
   />
   <motion.div
            variants={slideInFromLeft(0.8)}
            className='text-center'
            >
 
    <h1 className='font-semibold text-3xl text-white'>{title}</h1>
    <p className='mt-[1rem] text-white text-opacity-75'>
      {description}
    </p>

   </motion.div>
  <motion.a>
  <div className="flex justify-center items-center"> 
  <button 
  type = 'button'
  className='mt-[1rem] button-primary text-white font-bold py-2 px-4 rounded-full block mx-auto'> 
  Read More
</button>

</div>

   </motion.a>
    </motion.div>
  )
}

export default ServiceCard