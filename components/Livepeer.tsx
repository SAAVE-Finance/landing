import { Player } from '@livepeer/react';
 
import Image from "next/image";
 
const playbackId1 ='fb1euqu18tlbc1yg';
const playbackId2 ='4faatllpt4f0wgdb';
const playbackId3 ='7141xbzqzcj9oib3';
 
import blenderPoster from "@/public/assets/coins.png";
import aave from "@/public/assets/aave3.png";
import defi from "@/public/assets/defi1.jpg";
import curve from "@/public/assets/curve2.png";
 
const PosterImage1 = () => {
  return (
    <Image
      src={aave.src}
      fill
      priority
      alt='Aave Image'
    />
  );
};
 
const PosterImage2 = () => {
  return (
    <Image
      src={defi.src}
      fill
      priority
      alt='defi Image'
    />
  );
};
 
const PosterImage3 = () => {
  return (
    <Image
      src={curve.src}
      fill
      priority
      alt='curve Image'
    />
  );
};
 
export const Video1 = () => {
  return (
    <Player
      title="AAVE Introduction"
      playbackId={playbackId1}
      showPipButton
      showTitle={false}
      aspectRatio="16to9"
      poster={<PosterImage1 />}
      controls={{
        autohide: 3000,
      }}
      theme={{
        borderStyles: { containerBorderStyle: 'dashed' },
        radii: { containerBorderRadius: '20px' },

      }}
    />
  );
};

export const Video2 = () => {
  return (
    <Player
      title="Defi Introduction"
      playbackId={playbackId2}
      showPipButton
      showTitle={false}
      aspectRatio="16to9"
      poster={<PosterImage2 />}
      controls={{
        autohide: 3000,
      }}
      theme={{
        borderStyles: { containerBorderStyle: 'dashed' },
        radii: { containerBorderRadius: '20px' },
      }}
    />
  );
};

export const Video3 = () => {
  return (
    <Player
      title="Curve Introduction"
      playbackId={playbackId3}
      showPipButton
      showTitle={false}
      aspectRatio="16to9"
      poster={<PosterImage3 />}
      controls={{
        autohide: 3000,
      }}
      theme={{
        borderStyles: { containerBorderStyle: 'dashed' },
        radii: { containerBorderRadius: '20px' },
      }}
    />
  );
};