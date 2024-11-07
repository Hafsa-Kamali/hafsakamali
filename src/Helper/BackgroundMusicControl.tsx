// components/BackgroundMusicWithControl.tsx
"use client";
import { useState } from 'react';
import Howl from 'react-howler';

const BackgroundMusicWithControl = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <Howl
        src="/music/background.mp3"
        playing={isPlaying}
        loop={true}
        volume={0.5}
        
      />
    
      <button onClick={togglePlay} className='text-white button-primary px-2 py-1 mt-[-]'>
        {isPlaying ? 'Pause' : 'Play'} Background Music
      </button>
    </div>
  );
};

export default BackgroundMusicWithControl;
