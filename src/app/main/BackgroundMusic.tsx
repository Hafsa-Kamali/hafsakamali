import React, { useState, useRef, useEffect } from 'react';

interface AudioPlayerProps {
  src: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener('ended', () => {
        setIsPlaying(false);
      });
    }
  }, [audioRef]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const togglePlayPause = () =>{
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <audio ref={audioRef} src={src} autoPlay loop />
  );
};

export default AudioPlayer;
