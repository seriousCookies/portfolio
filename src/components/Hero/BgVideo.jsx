import React from 'react';
import backgroundVideo from '../../images/cherry_blossoms.mp4';

const BgVideo = () => {
  return (
    <video playsInline autoPlay playbackRate={0.5} muted loop id="bgvid">
      <source src={backgroundVideo} type="video/mp4" />
    </video>
  );
};

export default BgVideo;
