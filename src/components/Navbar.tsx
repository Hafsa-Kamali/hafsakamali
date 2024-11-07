"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Bars3CenterLeftIcon } from "@heroicons/react/24/solid";

import Link from 'next/link';
import SocialIcons from '@/sub/Social';



interface Props {
  openNav: () => void;
}

const Navbar = ({ openNav }: Props) => {

  const [navSticky, setNavSticky]= useState(false);
  
  useEffect(() => {

    const handler = () => {
      if (window.scrollY >= 90) {
        setNavSticky(true);
      } 
      if (window.scrollY <= 90) {
        setNavSticky(false);
      }
    };
    window.addEventListener("scroll", handler);
  } , []);

 const stickyStyle = navSticky ? "md:hidden hidden md:flex flex-row shadow-gray-100 shadow-sm":""

  return (
    <div className={`w-full h-[65px] ${stickyStyle} fixed top-0 shadow-lg shadow-[#2A0E61]/80 bg-[#03001436] backdrop-blur-md z-[50] px-4 md:px-10`}>
      <div className="w-full h-full flex flex-row justify-between items-center">
        
        {/* Logo & Hafsa Kamali */}
        <div className="flex  flex-row  transition-all duration-300 items-center space-x-3">
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={50} // Adjusted width for responsiveness
            height={50}
            className="cursor-pointer hover:animate-pulse"
          />
          <span className="font-bold  font-serif text-gray-300 text-lg md:text-lg">
            Hafsa Kamali
          </span>
        </div>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap font-serif font-thin items-center cursor-pointer text-base justify-center">
        {/* Navbar Links */}
        <ul className="hidden md:flex w-auto space-x-6 items-center text-gray-200 text-xl">
          <li>
            <Link href="http://localhost:3000/" className="cursor-pointer hover:underline decoration-violet-500 underline-offset-8">
              Home
            </Link>
          </li>
          <li>
            <Link href="/About" className="cursor-pointer hover:underline decoration-violet-500 underline-offset-8">
              About Me
            </Link>
          </li>
          <li>
            <Link href="/Skill" className="cursor-pointer hover:underline decoration-violet-500 underline-offset-8">
              Skills
            </Link>
          </li>
          <li>
            <Link href="/Project" className="cursor-pointer hover:underline decoration-violet-500 underline-offset-8">
              Projects
            </Link>
          </li>
          
          <li>
            <Link href="/Contact" className="cursor-pointer hover:underline decoration-violet-500 underline-offset-8">
              Contact Us
            </Link>
          </li>
         
        </ul>
        </nav>

        {/* Social Icons and Hamburger Menu */}
        <div className="flex items-center space-x-6">
          <div className="hidden md:flex flex-row gap-4">
           <SocialIcons />
          </div>
          {/* Hamburger Icon for mobile */}
          <Bars3CenterLeftIcon
            onClick={openNav}
            className="w-8 h-8 text-white md:hidden cursor-pointer"
          />
        </div>

      </div>
    </div>
  );
};
export default Navbar;
