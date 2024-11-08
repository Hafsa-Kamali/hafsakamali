"use client"
import Image from 'next/image';
import React, { useState } from 'react';

interface Testimonial {
  image: string;
  quote: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = [
  
  {
    image: '/johndoe.PNG',
    quote: '“Hafsa’s attention to detail and creative approach brought our vision to life in ways we never imagined. Truly an exceptional experience!”',
    name: 'John Doe',
    role: 'CEO, Tech Innovators',
  },
  {
    image: '/Emily Roberts.PNG',
    quote: '“Working with Hafsa was a breeze—her understanding of modern design and development is unparalleled. Our website has never looked better!”',
    name: 'Emily Roberts',
    role: 'Founder, StartUp Hub',
  },
  {
    image: '/michaelsmith.PNG',
    quote: '“From concept to completion, Hafsa demonstrated her expertise in web development and graphic design. She made the entire process seamless.”',
    name: 'Michael Smith',
    role: 'Creative Director, DesignWorks',
  },
  {
    image: '/Sarah Williams.PNG',
    quote: '“Hafsa transformed our outdated site into a modern, user-friendly platform. Her skills in Next.js and TypeScript are top-notch!”',
    name: 'Sarah Williams',
    role: 'Product Manager, Webify',
  },
  {
    image: '/Davidlee.PNG',
    quote: '“I was impressed by Hafsa’s ability to blend aesthetics with functionality. Her work on our e-commerce site exceeded our expectations.”',
    name: 'David Lee',
    role: 'Owner, Boutique Online',
  },
  {
    image: '/Ninapatel.PNG',
    quote: '“Hafsa’s expertise in 3D animations and video editing brought our marketing videos to a new level of engagement. Highly recommend her!”',
    name: 'Nina Patel',
    role: 'Marketing Head, VisualMedia',
  },
  {
    image: '/Mark.PNG',
    quote: '“Collaborating with Hafsa was a turning point for our brand. Her innovative ideas and technical expertise made a huge difference in our digital presence.”',
    name: 'Mark Johnson',
    role: 'Brand Strategist, CreativePulse',
  },
  {
    image: '/samantha.PNG',
    quote: '“Hafsa is a true professional. She not only delivered a stunning website but also provided valuable insights on improving user experience.”',
    name: 'Samantha Brown',
    role: 'COO, Digital Dynamics',
  },
  {
    image: '/alexander.jpeg',
    quote: '“Hafsa’s coding skills are second to none. She transformed our vision into a fully functional website that exceeded all expectations. Highly recommend!”',
    name: 'Alexander White',
    role: 'Lead Developer, TechNest',
  },
  {
    image: '/janedavis.jpeg',
    quote: '“The way Hafsa integrated design and functionality was remarkable. Her work has been instrumental in the growth of our online community.”',
    name: 'Jane Davis',
    role: 'Community Manager, EngageNow',
  },
  {
    image: '/chrislee.PNG',
    quote: '“From start to finish, Hafsa was attentive to our needs and delivered a website that perfectly matches our brand’s identity. Her creativity is unmatched!”',
    name: 'Chris Lee',
    role: 'Marketing Director, Peak Solutions',
  },
  {
    image: '/olivia.PNG',
    quote: '“Hafsa’s understanding of the latest design trends and development tools helped us achieve a website that stands out from the competition.”',
    name: 'Olivia Thomas',
    role: 'Senior Designer, Artify Studio',
  },
];

type TestimonialsProps = object;
const Testimonials: React.FC<TestimonialsProps> = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const testimonialsPerPage = 3; // Number of testimonials per page

  const handleNext = () => {
    if (currentPage < Math.ceil(testimonials.length / testimonialsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const getTestimonialsForPage = () => {
    const startIndex = (currentPage - 1) * testimonialsPerPage;
    const endIndex = Math.min(startIndex + testimonialsPerPage, testimonials.length);
    return testimonials.slice(startIndex, endIndex);
  };

  const currentTestimonials = getTestimonialsForPage();

  return (
    <section className="text-gray-300 bg-transparent body-font z-[50]">
      <div className="container px-6 py-24 mx-auto">
        <h1 className="title-font sm:text-6xl text-3xl mb-8 font-semibold font-serif text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-center">
          Client Testimonials
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-between z-[50]">
          {currentTestimonials.map((testimonial, index) => (
            <div key={index} className="lg:w-1/3 p-4 mx-6 mb-8 bg-primary rounded-lg hover:shadow-lg shadow-white">
              <Image
                alt="testimonial"
                className="w-24 h-24 mb-4 object-cover object-center rounded-full border-4 border-gray-700 hover:scale-105"
                src={testimonial.image}
                width={96}
                height={96}
              />
              <p className="leading-relaxed italic">{testimonial.quote}</p>
              <span className="inline-block h-1 w-10 rounded bg-purple-600 mt-6 mb-4 hover:bg-cyan-500"></span>
              <h2 className="text-white font-medium title-font tracking-wider text-lg">
                {testimonial.name}
              </h2>
              <p className="text-gray-400">{testimonial.role}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8 space-x-3">
          <button
          type='button'
            className={`px-4 py-2 rounded-full bg-purple-600 hover:bg-cyan-500 text-white ${
              currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={handlePrev}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <button
          type='button'
            className={`px-4 py-2 rounded-full bg-purple-600 hover:bg-cyan-500 text-white ${
              currentPage === Math.ceil(testimonials.length / testimonialsPerPage)
                ? 'opacity-50 cursor-not-allowed'
                : ''
            }`}
            onClick={handleNext}
            disabled={currentPage === Math.ceil(testimonials.length / testimonialsPerPage)}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;