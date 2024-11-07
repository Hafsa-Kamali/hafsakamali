
import React from 'react'
import { TypeAnimation } from 'react-type-animation';

export const TypewriterEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        'A Next Js Developer',
        1000, 
        'A Frontend Web Developer',
        1000,
        'A React Developer',
        1000,
        'Graphics-Logo Designer',
        1000,
        'Video Editing, Animation',
        1000,
        'Film making , Editing ',
        1000,
        
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
}
