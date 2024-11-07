
import { XMarkIcon } from '@heroicons/react/16/solid';
import Image from 'next/image';
import React from 'react';

import Link from 'next/link';
import SocialIcons from '@/sub/Social';


interface Props {
  showNav: boolean;
  closeNav: () => void;
}

const NavMobile = ({ showNav, closeNav }: Props) => {
  const navOpenStyle = showNav ? 'translate-x-0' : 'translate-x-[-100%]';

  return (
    <div>
      {/* Background Overlay */}
      <div
        className={`fixed top-0 ${navOpenStyle} transform transition-all duration-500 z-[10000] left-0 ring-0 bottom-0 bg-black opacity-60 w-[100vw] h-[100vh]`}
      ></div>

      {/* Nav Menu */}
      <nav>
      <ul
        className={`text-white text-xl ${navOpenStyle} fixed flex items-center flex-col justify-center h-[100%] transform transition-all duration-300 delay-300 w-[70%] bg-black bg-opacity-90 space-y-10 z-[10006]`}
      >
         <li>
          <Link
            href="http://localhost:3000/"
            className="cursor-pointer hover:text-violet-400 text-white text-2xl font-semibold hover:underline decoration-violet-500 underline-offset-8"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/About"
            className="cursor-pointer hover:text-violet-400 text-white text-2xl font-semibold hover:underline decoration-violet-500 underline-offset-8"
          >
            About Me
          </Link>
        </li>

        <li>
          <Link
            href="/Skill"
            className="cursor-pointer hover:text-violet-400 text-white text-2xl font-semibold hover:underline decoration-violet-500 underline-offset-8"
          >
            Skills
          </Link>
        </li>

        <li>
          <Link
            href="/Project"
            className="cursor-pointer hover:text-violet-400 text-white text-2xl font-semibold hover:underline decoration-violet-500 underline-offset-8"
          >
            Projects
          </Link>
        </li>

    
        <li>
          <Link
            href="/Contact"
            className="cursor-pointer hover:text-violet-400 text-white text-2xl font-semibold hover:underline decoration-violet-500 underline-offset-8"
          >
            Contact Us
          </Link>
        </li>
        {/* Social Icons */}
        <li className="flex flex-col items-center space-y-6">
          <div className="flex space-x-4">
            <SocialIcons 
              
              />
          </div>
        </li>

        {/* Close Button */}
        <li>
          <XMarkIcon
            onClick={closeNav}
            className="absolute top-[2.2rem] right-[1.4rem] w-[2.2rem] h-[2.2rem] text-white hover:text-violet-400 cursor-pointer"
          />
        </li>
      </ul>
    </nav>
    </div>
  );
};
export default NavMobile;
