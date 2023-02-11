import React from "react";
import Image from "next/image";
import aaveLend from "@/public/assets/aaveLend.png";

const Section1 = () => {
  return (
    <section>
      <div className="container flex flex-col justify-center mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-white to-[rgba(255,255,255,0.45)]">
            Secured By
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[rgba(255,255,255,0.45)]">
              the Hedron
            </span>
            <br />
          </h1>
          <p className="text-[20px] text-white mt-2 font-extralight leading-[32.97px]">
            In return for securing the services on the Cronos Hub, transaction
            fees and staking rewards are distributed to HEDRON stakers.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start mt-5">
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-lg font-light rounded bg-gradient-to-r from-white to-[rgba(255,255,255,0.45)]"
            >
              Start Staking
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-lg font-extralight text-white"
            >
              Learn More &gt;
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center  mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <div className="object-contain sm:h-80 lg:h-96 xl:h-112 2xl:h-128 mt-[-35%] w-[657.98px] h-[651px]">
            <Image src={aaveLend} alt="Shape" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
