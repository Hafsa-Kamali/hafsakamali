
import Hero from "./main/Hero";
import AboutMe from "./main/AboutMe";
import Services from "./main/Services";

import Testimonials from "./main/Testimonal";



const Home = () => {
  
   return (
     <main className="h-full w-full">
      
       <div className="flex flex-col gap-20 overflow-hidden z-[1000]">
         <Hero />
         <AboutMe />
         <Services />
         <Testimonials />
    
       </div>
      
     </main>
   );
}

export default Home