import React from 'react';

interface PlayPauseButtonProps {
  isPlaying: boolean;
  togglePlayPause: () => void;
}

const  BackgroundMusicControl: React.FC<PlayPauseButtonProps> = ({ isPlaying, togglePlayPause }) => {
  return (
    <button
    type='button'
    onClick={togglePlayPause}>
      {isPlaying ? 'Pause' : 'Play'}
    </button>
  );
};

export default BackgroundMusicControl;