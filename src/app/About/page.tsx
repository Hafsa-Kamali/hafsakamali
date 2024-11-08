import Image from 'next/image';
import React from 'react';

interface InfoItem {
  FieldName: string;
  FieldValue: string;
}

interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
}

const AboutMe = () => {
  const aboutMe = {
    title: "About Me",
    description:
    "Hello, this is Hafsa Kamali here. I am a frontend web software developer with a super skill set in various programming languages like HTML, CSS, JavaScript, TypeScript, React, and Next.js. I have good experience and have achieved many certificates in web development. I have been working on some projects like e-commerce and web development. I am also a graphic designer with expert handling skills and have worked on projects like logo design, posters, flyers, and brochures for various brands. I also know how to expertly handle filmmaking, video editing, animations, 3D animation movies, music editing, and many more things.",
    info: [
      { FieldName: "Name", FieldValue: "Hafsa Kamali" },
      { FieldName: "Phone", FieldValue: "(+92)3........0" },
      { FieldName: "Education", FieldValue: "Front-End Web Developer" },
      { FieldName: "Nationality", FieldValue: "Pakistani" },
      { FieldName: "E-mail", FieldValue: "hafsakamali362@gmail.com" },
      { FieldName: "Freelance", FieldValue: "Available" },
      { FieldName: "Languages", FieldValue: "English" },
    ],
    education: {
      title: "My Education",
      description:
        "I have completed my 10th class with 95% marks. I completed my 12th class in pre-engineering with 90% marks, and recently, I am a student in the 2nd year of the Bachelor of Associate Degree in Arts program (ADA) at Karachi University. Additionally, I am a student of Certified Cloud And Generative AI Software Engineering through the Governor Sindh IT initiative, specializing in web 3.0 and metaverse courses.",
      items: [
        {
          institution: "Govt. Sindh IT Initiative (Governor House Karachi)",
          degree: "Certified Cloud And Generative AI Software Engineering",
          duration: "2023- present",
        },
        {
          institution: "Karachi University",
          degree: "Bachelor of Associate Degree In Arts (ADA)",
          duration: "2022- present",
        },
        {
          institution: "Sir Syed Girls College",
          degree: "Pre-Engineering",
          duration: "2021- 2023",
        },
        {
          institution: "Cambridge Public School",
          degree: "Matriculation",
          duration: "2019-2021",
        },
      ],
    },
    thanksMessage:
      "I am incredibly grateful to all my teachers at the Governor Sindh IT Initiative. A special thanks to Sir Ameen Alam for guiding me throughout this journey, and heartfelt gratitude to my mentors, Sir Ubaid and Sir Anas, for their continuous support, knowledge, and inspiration.",
  };

  return (
    <div className="bg-gradient-to-br from-[#3c087e66] via-[#bf97ff70] to-[#712fff3d] p-20 rounded-lg shadow-lg max-w-7xl mx-auto relative z-[20]">
     
      <div className="absolute top-4 right-4 md:mt-[4rem] w-64 h-64 rounded-full overflow-hidden border-2 border-white shadow-md  shadow-white hover:scale-105">
        <Image
          src="/ansalobla.png"
          alt="Hafsa Kamali"
          width={500}
          height={500}
          className="object-cover"
        />
      </div>

      {/* About Me Section */}
      <h1 className="text-6xl font-semibold mt-[15rem] md:mt-[0rem]  font-serif text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-4">{aboutMe.title}</h1>
      <p className="text-white mb-6  md:w-[80%] text-sm md:text-xl">{aboutMe.description}</p>

      <div className="grid grid-cols-2 gap-4 mb-6 z-[20]">
        {aboutMe.info.map((item: InfoItem, index: number) => (
          <div key={index} className="bg-transparent border-2 border-white p-4 rounded-md shadow-lg shadow-black hover:scale-105">
            <h2 className="font-semibold text-[#8d59fe]">{item.FieldName}</h2>
            <p className="text-white text-opacity-80">{item.FieldValue}</p>
          </div>
        ))}
      </div>

      {/* Education */}
        
      <h2 className="text-5xl font-semibold font-serif text-[#c296f4] mb-4">{aboutMe.education.title}</h2>
      <p className="text-white mb-4 w-[90%] text-xl">{aboutMe.education.description}</p>
      <ul className="space-y-4 mb-6">
        {aboutMe.education.items.map((item: EducationItem, index: number) => (
          <li key={index} className="bg-transparent border-2 border-white p-4 rounded-md shadow-lg shadow-black z-[20] hover:scale-105 ">
            <h3 className="font-semibold text-[#8d59fe]">{item.institution}</h3>
            <p className="text-white text-opacity-85">{item.degree}</p>
            <p className="text-black">{item.duration}</p>
          </li>
        ))}
      </ul>
     
      {/* Thanks Section */}
      <div className="bg-white bg-opacity-95 p-6 rounded-md shadow-lg shadow-black">
        <h2 className="text-xl font-bold text-[#3c087e] ">Special Thanks</h2>
        <p className="text-gray-700 mt-2">{aboutMe.thanksMessage}</p>
      </div>
      <div className='col-span-4'>
<div className='grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-3 gap-[1rem] items-center mt-[2rem]'>
      <div
    className='p-6 border-2 border-white duration-300 transition-all cursor-pointer  hover:scale-105 text-center  hover:shadow-white shadow-lg rounded-lg bg-gradient-to-l from-[#3c087e66] via-[#bf97ff70] to-[#712fff3d] shadow-[#bf97ff70]-inset opacity-80 z-20'>
      <Image 
      src = "/ameen alam.png"
      alt = "Sir Ameen Alam"
      width = {300}
      height = {300}
      className='object-cover mx-auto'
      />
        <h1 className='text-[18px] mt-[1rem] text-white font-[600]'>SIR Ameen Alam </h1>
        <h2 className='mt-[1rem] text-white text-opacity-85 rounded-lg p-2 bg-black bg-opacity-75 hover:bg-white hover:text-black'>
          Deen Of Faculty Of IT Initiative 
        </h2>
   <p className='mt-[1rem] text-[15px] text-white text-opacity-85 rounded-lg p-2'>Honoring our Dean of Faculty, Sir Ameen Alam, whose exceptional leadership and innovative IT initiatives have illuminated the path to excellence. His wisdom, integrity, and unwavering dedication to advancing technology inspire us to achieve greatness. With deep respect and gratitude, we celebrate his outstanding contributions to our academic community and the world of IT.</p>
        </div>
        <div
    className='p-6 border-2 border-white duration-300 transition-all cursor-pointer text-center  hover:shadow-white shadow-lg rounded-lg bg-gradient-to-l from-[#3c087e66] via-[#bf97ff70] to-[#712fff3d] shadow-[#bf97ff70]-inset opacity-80 hover:scale-105'>
      <Image 
      src = "/Ziakhan.png"
      alt = "Sir Zia Khan"
      width = {280}
      height = {300}
      className='object-cover mx-auto'
      />
        <h1 className='text-[18px] mt-[1rem] text-white font-[600]'>SIR Zia Khan</h1>
        <h2 className='mt-[1rem] text-white text-opacity-85 rounded-lg p-2 bg-black bg-opacity-75 hover:bg-white hover:text-black'>
        Chief Operating officer & Developer Of Faculty Of IT Initiative
        </h2>
   <p className='mt-[1rem] text-[13px] text-white text-opacity-85 rounded-lg p-2'>Honoring Sir Zia Khan, our esteemed Chief Operating Officer and Developer of the Faculty of IT Initiative. His groundbreaking vision and dedication to innovation have propelled our IT initiatives to new heights. Through his leadership, integrity, and relentless pursuit of excellence, he has transformed our academic landscape and inspired countless minds. With immense respect and gratitude, we celebrate his remarkable contributions and enduring legacy in the world of IT.</p>
        </div>
        <div
    className='p-6 border-2 border-white duration-300 transition-all cursor-pointer  hover:scale-105   hover:shadow-white shadow-lg text-center rounded-lg bg-gradient-to-l from-[#3c087e66] via-[#bf97ff70] to-[#712fff3d] shadow-[#bf97ff70]-inset opacity-80'>
      <Image 
      src = "/Daniyalnagori.jpg"
      alt = "Sir Daniyal Nagori"
      width = {280}
      height = {280}
      className='object-cover mx-auto'
      />
        <h1 className='text-[18px] mt-[1rem] text-white font-[600]'>SIR Daniyal Nagori </h1>
        <h2 className='mt-[1rem] text-white text-opacity-85 rounded-lg p-2 bg-black bg-opacity-75 hover:bg-white hover:text-black'>
         Ceo of faculty Of IT Initiative
        </h2>
   <p className='mt-[1rem] text-[15px] text-white text-opacity-85 rounded-lg p-2'>Honoring Sir Daniyal Nagori, the visionary CEO of the Faculty of IT Initiative. His unparalleled leadership and commitment to innovation have been the driving force behind our technological advancements. Sir Daniyal&apos;s dedication to excellence and passion for IT have inspired us all to reach new heights. With deep respect and gratitude, we celebrate his remarkable achievements and lasting impact on the world of technology.</p>
        </div>
        <div
    className='p-6 border-2 border-white duration-300 transition-all cursor-pointer  hover:scale-105 text-center  hover:shadow-white shadow-lg rounded-lg bg-gradient-to-l from-[#3c087e66] via-[#bf97ff70] to-[#712fff3d] shadow-[#bf97ff70]-inset opacity-80'>
      <Image 
      src = "/Sir anas.jpg"
      alt = "Sir Anas Seth"
      width = {280}
      height = {280}
      className='object-cover mx-auto'
      />
        <h1 className='text-[18px] mt-[1rem] text-white font-[600]'>SIR Anas Seth</h1>
        <h2 className='mt-[1rem] text-white text-opacity-85 rounded-lg p-2 bg-black bg-opacity-75 hover:bg-white hover:text-black'>
       My Mentor & Lead Teacher Of Faculty Of IT Initiative
        </h2>
   <p className='mt-[1rem] text-[15px] text-white text-opacity-85 rounded-lg p-2'>Honoring Sir Anas Seth, our revered mentor and lead teacher of the Faculty of IT Initiative. His exceptional guidance and unwavering dedication to fostering innovation and excellence have been transformative. His wisdom, passion, and commitment to nurturing talent inspire us to reach new heights. With deep respect and gratitude, we celebrate his invaluable contributions to our journey of learning and growth.</p>

        </div>
        <div
    className='p-6 border-2 border-white duration-300 transition-all cursor-pointer  hover:scale-105 text-center  hover:shadow-white shadow-lg rounded-lg bg-gradient-to-l from-[#3c087e66] via-[#bf97ff70] to-[#712fff3d] shadow-[#bf97ff70]-inset opacity-80'>
      <Image 
      src = "/ubaid sir.jpg"
      alt = "Sir Ubaid Ur Rehman"
      width = {280}
      height = {280}
      className='object-cover mx-auto'
      />
        <h1 className='text-[18px] mt-[1rem] text-white font-[600]'>SIR Ubaid Ur Rehman </h1>
        <h2 className='mt-[1rem] text-white text-opacity-85 rounded-lg p-2 bg-black bg-opacity-75 hover:bg-white hover:text-black'>
       My Mentor & Lead Teacher Of Faculty Of IT Initiative
        </h2>
   <p className='mt-[1rem] text-[15px] text-white text-opacity-85 rounded-lg p-2'>Honoring Sir Ubaid ur Rehman, our esteemed mentor and lead teacher of the Faculty of IT Initiative. His unwavering dedication to nurturing talent and fostering innovation has profoundly impacted our journey. His guidance, wisdom, and passion for excellence have inspired us all to achieve our best. With heartfelt respect and gratitude, we celebrate his invaluable contributions to our growth and success.</p>

        </div>
        </div>

      </div>
    </div>
  );
};
export default AboutMe;
