import React from "react";
import Image, { StaticImageData } from "next/image";
const Card = (props: {
  img: StaticImageData;
  title: string;
  description: string;
}) => {
const Card = (props: { img: StaticImageData; title: string; description: string }) => {
  return (
    <div className="h-96 w-96 rounded-2xl bg-gray-900 m-10 p-6 cursor-pointer shadow-2xl  hover:shadow-slate-700">
      <Image src={props.img} alt="hero" width={200} />
      <h1 className="text-white font-DM Sans font-bold text-3xl mt-2">
        {props.title}
      </h1>
      <p className="text-white font-light font-DM_Sans text-base mt-2">
        {props.description}
      </p>
    </div>
  );
};

export default Card;
