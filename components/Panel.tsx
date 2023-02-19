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
    <div className="my-36 flex-col flex md:flex-row justify-center items-center w-[90vw] mx-auto">
      <div className="flex flex-col basis-[35%] justify-center items-center mx-auto">
        <h1 className="text-white text-center font-DM Sans font-bold text-6xl my-5">
          {props.title}
        </h1>
        <div
          className={`md:hidden relative basis-[50%] bg${props.glowimg} bg-[length:600px_600px] bg-origin-content bg-no-repeat bg-[center_right_2rem]`}
        >
          {/* <Image src={props.glowimg} alt="glow" className="z-[-1] absolute" /> */}
          <Image
            src={props.glowimg}
            alt="glow"
            className="z-[-1] absolute right-[2px] opacity-75 bg-clip-content"
          />
          <Image src={props.img} alt="hero" />
        </div>
        <p className="text-[#ffffffae] font-light text-center md:text-left font-DM_Sans text-base my-9">
          {props.desc}
        </p>
        <Link href={props.link}>
          <button className="bg-[#ffffff]  text-[#212121] font-medium text-base md:text-xl mt-2 rounded-2xl px-10 py-2 w-96 hover:scale-105">
            Learn More &gt;
          </button>
        </Link>
      </div>
      <div
        className={`hidden  relative md:block basis-[50%] bg${props.glowimg} bg-[length:600px_600px] bg-origin-content bg-no-repeat bg-[center_right_2rem]`}
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
