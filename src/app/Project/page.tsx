"use client"
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '../../../utils/motion';

const projects = [
  {
    title: 'Resume Builder App',
    description:
      'Our revolutionary resume builder app developed using TypeScript, Tailwind CSS, and Next.js. CareerCanvas offers a seamless blend of cutting-edge technology and sleek design, making resume creation effortless and impactful. This powerful combination ensures a highly responsive user experience, with visually appealing templates that captivate recruiters. Empower your career journey with CareerCanvas, where your professional story comes to life with precision and style. 🚀📄',
    vercelLink: 'https://careercanvas-resume-builderapp.vercel.app/',
    githubLink: 'https://github.com/Hafsa-Kamali/Resume-builder',
    image: '/careercanvas.png',
  },
  {
    title: 'Portfolio Website',
    description:
      'This dynamic and modern portfolio website leverages the power of TypeScript, Tailwind CSS, and Next.js to showcase your work in the best possible light. The combination of these technologies ensures a smooth and responsive user experience, with clean, elegant designs that highlight your projects and skills. Tailwind CSS provides the flexibility to create custom and visually appealing layouts, while Next.js ensures fast load times and seamless navigation. Share your professional journey with a portfolio that stands out from the crowd! 🌟📄',
    vercelLink: 'https://vercel.com/hafsa-kamalis-projects/hafsa-kamali-next-js-portfolio',
    githubLink: 'https://github.com/Hafsa-Kamali/hafsa-kamali-NextJs-portfolio',
    image: '/Nextjswebsite.png',
  },
  {
    title: 'Blog Website',
    description:
      'Built with the robust combination of TypeScript, Tailwind CSS, and Next.js, this blog site delivers a seamless and immersive reading experience. TypeScript ensures reliability and scalability, while Tailwind CSS brings clean and responsive designs to life. Next.js powers the website with blazing-fast load times and smooth navigation, making content consumption a delight. Share your thoughts, stories, and articles effortlessly with a blog that is as dynamic and engaging as your content. 🌐📖',
    vercelLink: 'https://blog-website-by-hafsa-kamali-dduy.vercel.app/',
    githubLink: 'https://github.com/Hafsa-Kamali/blog-website-by-hafsa-kamali',
    image: '/blog web.PNG',
  },
  {
    title: 'GiAic ID-CARD',
    description:
      'Developed with the robust trio of TypeScript, Tailwind CSS, and Next.js, this project provides a sleek, efficient, and secure solution for creating and managing ID cards. TypeScript ensures scalable and reliable code, while Tailwind CSS allows for custom, responsive designs that look great on any device. Next.js powers the site with fast load times and smooth user interactions. The Giaic ID Card website offers an innovative and professional approach to ID card management, making it user-friendly and highly effective. 🎉💼',
    vercelLink: 'https://giaic-idcard.vercel.app/',
    githubLink: 'https://github.com/Hafsa-Kamali/giaic-idcard',
    image: '/giaic card.PNG',
  },
  {
    title: 'To-DO App WEBSITE',
    description:
      'Crafted using TypeScript, Tailwind CSS, and Next.js, this to-do app offers a seamless and efficient task management experience. TypeScript provides robust and scalable code, while Tailwind CSS delivers clean, responsive designs that ensure usability across all devices. Next.js enhances the app with quick load times and smooth navigation. Stay organized and boost your productivity with a to-do app that combines cutting-edge technology and user-centric design. ✅📋',
    vercelLink: 'https://todo-app-by-hafsakamali.vercel.app/',
    githubLink: 'https://github.com/Hafsa-Kamali/todo-app',
    image: '/to-do.png',
  },
  {
    title: 'I-Phone-App',
    description:
      'Introducing Our iPhone Landing App Project: Developed with cutting-edge technologies like TypeScript, Tailwind CSS, and Next.js, our app delivers an unparalleled user experience. This robust combination ensures seamless performance, sleek design, and highly responsive interface, making your iPhone landing page not only visually appealing but also technically superior. Dive into the future of app development with our innovative approach! 🚀📱',
    vercelLink:'https://iphone-app-by-hafsa-kamali.vercel.app/',
    githubLink: 'https://github.com/Hafsa-Kamali/iphone-app',
    image: '/iphoneapp.png',
  },
];
const Projects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 }); 

  return (
<motion.div
ref={ref}
initial="hidden"
animate={isInView ? "visible" : "hidden"} 
className="text-gray-100 body-font bg-transparent py-24 relative z-[20]">
      <motion.div
        variants={slideInFromTop} 
        className="container px-5 mx-auto ">
        <h2 className=" text-5xl md:text-8xl font-medium font-serif mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-violet-700 to-cyan-400">PROJECTS</h2>
        <motion.p 
        variants={slideInFromRight(0.6)}
        className="text-[18px] text-center text-white opacity-85 mt-[1rem] mb-[3rem] w-[95%]">
Delve into a showcase of innovation and expertise through my diverse projects.
 Each venture is a testament to cutting-edge technology, meticulous craftsmanship, and a commitment to excellence. 
 From dynamic web applications to captivating visual designs, my portfolio demonstrates a blend of creativity and precision. Explore the brilliance of projects that not only meet but exceed expectations, turning visions into reality.
 Let's embark on a journey of technological marvels together!</motion.p>
 <p
 className="text-5xl text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-cyan-400 mt-[1rem] mb-[3rem] items-center justify-center ml-auto mr-auto border-white border-2 w-fit h-auto hover:scale-105 py-3 px-4 rounded-lg shadow-black shadow-lg  relative z-[20]">
   Here are my some amazing projects </p>
        <motion.div 
        variants={slideInFromLeft(1)}
        className="flex flex-wrap -m-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-4 md:w-1/2 lg:w-1/3 transition-transform transform hover:scale-105"
            >
              <div className="h-full  bg-gradient-to-r from-[#3c087e66] via-[#bf97ff70] to-[#712fff3d]  border-2 border-[#bf97ff70] rounded-lg overflow-hidden shadow-lg shadow-black">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={500}
                  className="lg:h-auto md:h-56 w-full object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="lg:text-2xl text-lg  font-bold text-transparent bg-clip-text bg-gradient-to-l from-cyan-400 to-purple-300 mb-6 uppercase font-serif lg:ml-[4rem]">{project.title}</h3>
                  <p className="leading-relaxed mb-5 text-gray-300">{project.description}</p>
                  <div className="flex justify-between items-center">
              
                    <button 
                    type='button'
                    className="relative inline-block ml-[1rem] md:flex flex-row gap-4 px-3 py-2 shadow-lg shadow-black bg-gradient-to-br from-[#6440937e] via-[#c5a2fc70] to-[#6d2ef634] border border-white rounded-xl overflow-hidden transition-all duration-500 before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-[#c5a2fc70] before:transition-all before:duration-500 hover:before:left-0 hover:text-[#1a1a1a]">
  <Link
    href={project.vercelLink}
    target="_blank"
    rel="noopener noreferrer"
    className="z-20 relative text-white hover:underline"
  >
    View Live
  </Link>
</button>
                    <button 
                    type='button'
                    className="relative inline-block ml-[1rem] md:flex flex-row gap-4 px-3 py-2 shadow-lg shadow-black bg-gradient-to-br from-[#6440937e] via-[#c5a2fc70] to-[#6d2ef634] border border-white rounded-xl overflow-hidden transition-all duration-500 before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-[#c5a2fc70] before:transition-all before:duration-500 hover:before:left-0 hover:text-[#1a1a1a]">
  <Link
    href={project.githubLink}
    target="_blank"
    rel="noopener noreferrer"
    className="z-20 relative text-white hover:underline"
  >
    GitHub Repo
  </Link>
</button>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
