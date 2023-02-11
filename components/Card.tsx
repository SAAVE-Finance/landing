import React from "react";
import Image, { StaticImageData } from "next/image";
import Coin from "@/public/assets/image 5.png";

const Card = (props: {
  img: StaticImageData;
  heading: string;
  desc: string;
}) => {
  return (
    <div className="w-[500px] bg-gray-900 h-[50vh] rounded-2xl p-6 text-gray-300 space-y-4 m-4">
      <Image src={props.img} width={200} height={200} alt="icon" className="h-32 w-32" />
      <h1 className="text-2xl font-extrabold" >{props.heading}</h1>
      <p>{props.desc}</p>
    </div>
  );
};

export default Card;
