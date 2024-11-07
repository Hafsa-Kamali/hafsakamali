
"use client"; 
import { useEffect, useState } from 'react';
import Howl from 'react-howler';

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Autoplay control: 
  useEffect(() => {
    const handleUserInteraction = () => {
      setIsPlaying(true);
      document.removeEventListener('click', handleUserInteraction);
    };

    // Wait for the user to click or interact to start playing
    document.addEventListener('click', handleUserInteraction);

    return () => {
      document.removeEventListener('click', handleUserInteraction);
    };
  }, []);

  return (
    <Howl
      src="/music/song.mp3"  
      playing={isPlaying}
      loop={true}
      volume={0.5} 
    />
    
  );
};

export default BackgroundMusic;
