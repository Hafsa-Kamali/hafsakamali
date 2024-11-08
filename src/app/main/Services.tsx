"use client"
import React, { useRef } from 'react'

import { motion, useInView } from 'framer-motion'
import ServiceCard from '@/sub/ServiceCard';
import { slideInFromLeft , slideInFromRight } from '../../../utils/motion';



const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 }); 

  return (
    
    <motion.div
    ref={ref}
    initial="hidden"
    animate={isInView ? "visible" : "hidden"} 
    className=" items-center justify-center  mt-40 w-full z-[20]"
  >
 <motion.div
   variants={slideInFromRight(0.8)}
 >
                <h1  className="mt-[0.6rem] p-2 sm:p-0 leading-[3.5rem] text-center text-transparent text-6xl font-serif md:text-6xl bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500" >&quot;What can i do for clients ?&ldquo;</h1>
      <h2 className="mt-[0.6rem] p-2 sm:p-0 leading-[3.5rem] md:mr-[0.6rem] text-center text-4xl md:text-4xl text-white">&quot;Creative Services&quot;</h2>
      </motion.div>
      <motion.div
      variants={slideInFromLeft(1)}
      style={{ pointerEvents : 'auto'}}
      className='w-[90%] h-[80%] items-center'
      >
     
            {/* service card */}
            <div className='flex-wrap mt-[4rem] mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[3rem] items-center ml-[1.6rem] md:ml-[8rem] z-50'>
            <div className="hover:service_card transform hover:scale-105 transition-all duration-300  bg-primary rounded-xl p-4 z-50">
              <ServiceCard image="/webicon.png" title="Frontend-Web Developer" description="Step into the future of web design with our expert frontend development blog! Discover cutting-edge techniques, innovative solutions, and the secrets behind seamless user experiences. Let's build the digital frontier together!"/>
            </div>
            <div className="hover:service_card transform hover:scale-105 transition-all duration-300  bg-primary rounded-xl p-4">
              <ServiceCard image="/freelancer.png" title="Freelancer" description="Unlock the potential of your projects with our freelancer blog! Discover tips for hiring top talent, managing projects effectively, and delivering exceptional results. Let's transform your vision into reality, one blog post at a time!" />
            </div>
            <div className="hover:service_card transform hover:scale-105 transition-all duration-300  bg-primary rounded-xl p-4">
              <ServiceCard image="/content-writer-vector.jpg" title="Content Writer" description="Dive into the world of compelling storytelling with our content writing blog! Whether you need tips on SEO, creating engaging content, our blog is your ultimate resource. Let's turn your ideas into impactful narratives!"/>
            </div>
            <div className="hover:service_card transform hover:scale-105 transition-all duration-300  bg-primary rounded-xl p-4">
              <ServiceCard image="/graphic.jpeg" title="Graphic Designer" description="Welcome to our graphic design blog, where creativity meets strategy! Discover the latest design trends, innovative techniques, and tips to create visually stunning masterpieces. Let's turn your vision into a masterpiece!"/>
            </div>
            <div className="hover:service_card transform hover:scale-105 transition-all duration-300  bg-primary rounded-xl p-4">
              <ServiceCard image="/video edit.png" title="Video editor,Animation" description="Welcome to our video editing and animation blog, where creativity comes to life! Dive into the world of dynamic visuals and captivating animations. Let's bring your vision to life, frame by frame!"/>
            </div>
            <div className="hover:service_card transform hover:scale-105 transition-all duration-300  bg-primary rounded-xl p-4">
              <ServiceCard image="/fil making.png" title="Film Editor" description="Welcome to our video editing and animation blog, where creativity comes to life! Dive into the world of dynamic visuals and captivating animations. Let's bring your vision to life."/>
            </div>
            <div className="hover:service_card transform hover:scale-105 transition-all duration-300  bg-primary rounded-xl p-4">
              <ServiceCard image="/exceelence work.png" title="Excellence work Quality" description="Welcome to our blog, where excellence is our benchmark! Dive into stories of meticulous craftsmanship and unwavering dedication. Let's make your success our mission, with dedication and precision!"/>
            </div>
            <div className="hover:service_card transform hover:scale-105 transition-all duration-300  bg-primary rounded-xl p-4">
              <ServiceCard image="/support.png" title="24/7 Support" description="Welcome to our blog, where round-the-clock dedication is our promise! Discover how our 24/7 availability ensures your needs are always met, no matter the hour. Let's keep your projects running smoothly, every step of the way!"/>
            </div>
            <div className="hover:service_card transform hover:scale-105 transition-all duration-300 bg-primary rounded-xl p-4">
              <ServiceCard image="/work on time.PNG" title="Work On Time" description="Welcome to our blog, where punctuality is our promise! Discover how our commitment to top-tier quality and unwavering deadlines transforms visions into reality.Let's bring your visions to life, right on schedule!"/>
            </div>
           </div>
     
        </motion.div>
    </motion.div>
 
  );

}

export default Services

