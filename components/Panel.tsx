import React from "react";
import Image, { StaticImageData } from "next/image";

const Panel = (props: {
  desc: string;
  img: StaticImageData;
  glowimg : StaticImageData;
  title: string;
  link: string;
}) => {
  const handleClick = () => {
    window.open(props.link, "_blank");
  };
  return (
    <div className="flex justify-center w-[90vw] mx-auto ">
      <div className="flex flex-col basis-[35%] justify-center  mx-auto">
        <h1 className="text-white font-DM Sans font-bold text-6xl my-5">
          {props.title}
        </h1>
        <p className="text-[#ffffffae] font-light font-DM_Sans text-base my-5">
          {props.desc}
        </p>
        <button
          className="bg-[#ffffff]  text-[#212121] font-medium text-xl mt-2 rounded-2xl px-10 py-2 w-[70%] hover:scale-105"
          onClick={handleClick}
        >
          Learn More &gt;
        </button>
      </div>
      <div className="basis-[50%]">
      <Image src={props.glowimg} alt="glow" className ="z-[-1] absolute right-5"/>
      <Image src={props.img} alt="hero" />  
      </div>
    </div>
  );
};

export default Panel;
