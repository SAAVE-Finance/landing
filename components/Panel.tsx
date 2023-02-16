import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const Panel = (props: {
  desc: string;
  img: StaticImageData;
  glowimg: StaticImageData;
  title: string;
  link: string;
}) => {
  return (
    <div className="flex justify-center w-[90vw] mx-auto ">
      <div className="flex flex-col basis-[35%] justify-center  mx-auto">
        <h1 className="text-white font-DM Sans font-bold text-6xl my-5">
          {props.title}
        </h1>
        <p className="text-[#ffffffae] font-light font-DM_Sans text-base my-9">
          {props.desc}
        </p>
        <button className="bg-[#ffffff]  text-[#212121] font-medium text-xl mt-2 rounded-2xl px-10 py-2 w-[70%] hover:scale-105">
          <Link href={props.link}>Learn More &gt;</Link>
        </button>
      </div>
      <div
        className={`basis-[50%] bg${props.glowimg} bg-[length:600px_600px] bg-origin-content bg-no-repeat bg-[center_right_2rem]`}
      >
        {/* <Image src={props.glowimg} alt="glow" className="z-[-1] absolute" /> */}
        <Image
          src={props.glowimg}
          alt="glow"
          className="z-[-1] absolute right-[2px] opacity-75 bg-clip-content" 
        />
        <Image src={props.img} alt="hero" />
      </div>
    </div>
  );
};

export default Panel;
