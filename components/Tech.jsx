import React from "react";
import styles from "@/styles/Hero.module.css";

const Tech = () => {
  return (
    <div className="ml-[124px]">
      <div>
        <h2
          className={`${styles.heading} text-[#ffffff99] my-10 text-[24px] tracking-[2px]`}
        >
          TECHNOLOGY
        </h2>
        <h1 className="text-6xl  text-transparent bg-clip-text bg-gradient-to-r from-white to-[rgba(255,255,255,0.45)] mx-auto tracking-[3px]">
          The most trusted
        </h1>
        <h1 className="text-6xl  text-transparent bg-clip-text bg-gradient-to-r from-white to-[rgba(255,255,255,0.45)] mx-auto tracking-[3px]">
         way to build
        </h1>
        <h1 className="text-6xl  text-transparent bg-clip-text bg-gradient-to-r from-white to-[rgba(255,255,255,0.45)] mx-auto tracking-[3px]">
         value.
        </h1>
        <div className="">
            <p className="text-white mt-8 font-extralight">
                Cronos is a state-of-the-art blockchain<br />
                framework that powers the Cronos Hub <br />
                and its rapidly expanding orbit of <br />
                sovereign chains.
            </p>
            <p className="text-white mt-5 font-extralight">
                Developers can use the SDK to build <br />
                innovative applications that create <br />
                value through exchange with the <br />
                Cronos Hub.
            </p>
        </div>
      </div>
    </div>
  );
};

export default Tech;
