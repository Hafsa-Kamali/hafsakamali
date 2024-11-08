
import HeroContent from '@/sub/HeroContent'
import React from 'react'


const Hero = () => {


  return (
<main>

    <div className='relative flex flex-col h-full w-full' id= 'about-me'>
     <video 
       autoPlay
       muted
       loop
       className='rotate-0 absolute top-[5px] h-[950px] w-full left-0 z-[1] object-cover'
     >
      <source src='/stargalaxy.webm' type='video/webm' />
     </video>
     
    </div>
     <div className='relative flex flex-col mt-28 md:mt-36'>
       <HeroContent />
       </div>
 </main>
  )
}

export default Hero