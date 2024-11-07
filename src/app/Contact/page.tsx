import Image from 'next/image';
import React from 'react';

const ContactUs = () => {
  return (
    <section className="text-gray-400 bg-transparent body-font relative z-[20]">
      <h1 className="sm:text-6xl text-8xl font-semibold font-serif title-font mb-0 pt-[5rem] sm:pt-[5rem] md:pt-[7rem] mx-auto ml-[12rem] md:ml-[35rem] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Contact Us </h1>
      <div className="container px-5 py-16 mx-auto flex sm:flex-nowrap flex-wrap">
        {/* Map & Contact Info */}
        
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0 map-iframe"
          
            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
          ></iframe>
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">ADDRESS</h2>
              <p className="mt-1">Photo booth tattooed prism, Portland taiyaki hoodie neutra typewriter</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">EMAIL</h2>
              <a className="text-indigo-400 leading-relaxed">example@email.com</a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">PHONE</h2>
              <p className="leading-relaxed">123-456-7890</p>
            </div>
          </div>
        </div>

        {/* Feedback Form */}
        <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-white text-lg mb-1 font-medium title-font">Feedback</h2>
          <p className="leading-relaxed mb-5">pease give your amazing feedback to me. Your feedback is a motivation and inspiration for me . </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-gray-400">Message</label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button
          type='button'
          className="text-white bg-primary border-0 py-2 px-6 focus:outline-none  rounded text-lg">
            Send Message
          </button>
          <p className="text-xs text-gray-400 text-opacity-90 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
        </div>
      </div>

    
      <div className="container mx-auto px-5 py-12 text-center bg-gradient-to-br from-[#3c087e66] via-[#bf97ff70] to-[#712fff3d] rounded-lg shadow-lg mt-10">
        <div className="relative">
        
          <div className="absolute top-[-10rem] md:top-[-8rem]  right-3 w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg hover:scale-110 cursor-pointer">
            <Image
              src="/ansalobla.png"
              alt="Hafsa Kamali"
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-[#b07af6] mb-4">Special Thanks to My Mentors</h2>
        <p className="text-white text-lg">
          I am incredibly grateful to all my teachers at the Governor Sindh IT Initiative for their unwavering support and guidance. 
          A special thanks to Sir Ameen Alam for his dedication and insight. I am deeply thankful to my mentors, Sir Ubaid and Sir Anas, 
          whose expertise, encouragement, and mentorship have been instrumental in my growth as a developer. 
          Your teachings have shaped my journey, and I am truly honored to be your student.
        </p>
      </div>
    </section>
  );
};

export default ContactUs;
