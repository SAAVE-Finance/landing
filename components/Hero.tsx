import React from "react";
import styles from "@/styles/Hero.module.css";
import Image from "next/image";
import Shape1 from "@/public/assets/ecto.png";
const Hero = () => {
  return (
    <>
      <main className="relative flex flex-col  text-white w-[85vw] mx-auto my-16 z-50 ">
        <h2 className={`${styles.heading} text-[#ffffff99] my-10 mx-auto`}>
          WELCOME TO CRONOS
        </h2>
        <h1 className="text-8xl  text-transparent bg-clip-text bg-gradient-to-r from-white to-[rgba(255,255,255,0.45)] mx-auto font-extrabold font-Inter">
          The Internent of
        </h1>
        <h1 className="text-8xl  text-transparent bg-clip-text bg-gradient-to-r from-white to-[rgba(255,255,255,0.45)] mx-auto">
          Blockchain
        </h1>
        <p
          className={`${styles.heading} my-10  mx-auto w-[70%] text-[#ffffffaf] text-center`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          incidunt quas totam sapiente voluptatem natus cupiditate
        </p>
      </main>
      <div className="absolute z-1 h-10 top-48 left-36">
        <Image src={Shape1} alt="hero" width={200} />
      </div>
      <div className="absolute z-1 h-10 bottom-52 -right-20">
        <Image src={Shape1} alt="hero" />
      </div>
    </>
  );
};

export default Hero;
