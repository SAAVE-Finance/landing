import { Player } from '@livepeer/react';
 
import Image from "next/image";
 
const playbackId =
  'bafybeida3w2w7fch2fy6rfvfttqamlcyxgd3ddbf4u25n7fxzvyvcaegxy';
 
import blenderPoster from "@/public/assets/coins.png";
 
const PosterImage = () => {
  return (
    <Image
      src={blenderPoster}
      fill
      objectFit="contain"
      priority
      placeholder="blur"
      alt='Poster Image'
    />
  );
};
 
export const CreateAndViewAsset = () => {
  return (
    <Player
      title="Waterfalls"
      playbackId={playbackId}
      showPipButton
      showTitle={false}
      aspectRatio="16to9"
      poster={<PosterImage />}
      controls={{
        autohide: 3000,
      }}
      theme={{
        borderStyles: { containerBorderStyle: 'dashed' },
        radii: { containerBorderRadius: '10px' },
      }}
    />
  );
};