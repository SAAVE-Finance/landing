import React from "react";
import Image from "next/image";
import Shape1 from "@/public/assets/Group 8683.png";
import Award from "@/public/assets/award.png";
import Ghost2 from "@/public/assets/ghost2.png";
import Ghost3 from "@/public/assets/ghost3.png";

const Navbar = () => {
  return (
    <section className="mt-48">
      <h1 className="font-extrabold text-4xl md:text-6xl text-center leading-[64px] text-transparent bg-clip-text bg-gradient-to-r from-white to-[rgba(255,255,255,0.45)] mx-auto">
        How SAAVE Works?
      </h1>

      <div className="mx-10 md:mx-24 flex-col flex items-center justify-center">

        <div className="w-full md:w-[70vw] flex-col lg:flex-row flex items-center justify-evenly flex-wrap">
          <div className="space-y-6 w-full sm:w-1/2 mt-10">
            <h1 className="text-white text-4xl font-bold">Decentralized lending</h1>
            <p className="text-white text-xl ">
              Saave provides a beginner-friendly investment platform with a simple interface for tracking investments and accessing funds. It offers a convenient way for new investors to earn higher returns through a portfolio of high-yield accounts, funds, and CDs.
            </p>
            <button className='py-2 bg-white hidden sm:block rounded-full w-48 text-base font-medium px-2'>Connect Wallet</button>
          </div>

          <div className="w-full md:w-1/2">
            <Image
              className=" h-[300px] w-[300px] md:h-[600px] md:w-[600px] cursor-pointer"
              // src={Ghost.src}
              src={Ghost2.src}
              // src={Wallet.src}
              alt="Your Company"
              width={400}
              height={400}
            />
          </div>
        </div>

        <div className="w-full md:w-[70vw] flex-col  lg:flex-row flex items-center justify-evenly flex-wrap">
          <div className="w-full md:w-1/2 ">
            <Image
              className=" h-[300px] w-[300px] md:h-[600px] md:w-[600px] cursor-pointer"
              // src={Ghost.src}
              src={Ghost3.src}
              // src={Wallet.src}
              alt="Your Company"
              width={400}
              height={400}
            />
          </div>
          <div className="space-y-6 w-full sm:w-1/2 mt-10">
            <h1 className="text-white text-4xl font-bold">Decentralized lending</h1>
            <p className="text-white text-xl ">
              Saave provides a beginner-friendly investment platform with a simple interface for tracking investments and accessing funds. It offers a convenient way for new investors to earn higher returns through a portfolio of high-yield accounts, funds, and CDs.
            </p>
            <button className='py-2 bg-white hidden sm:block rounded-full w-48 text-base font-medium px-2'>Connect Wallet</button>
          </div>

        </div>


        <div className="w-full md:w-[70vw] flex-col lg:flex-row flex items-center justify-evenly flex-wrap">
          <div className="space-y-6 w-full sm:w-1/2 mt-10">
            <h1 className="text-white text-4xl font-bold">Decentralized lending</h1>
            <p className="text-white text-xl ">
              Saave provides a beginner-friendly investment platform with a simple interface for tracking investments and accessing funds. It offers a convenient way for new investors to earn higher returns through a portfolio of high-yield accounts, funds, and CDs.
            </p>
            <button className='py-2 bg-white hidden sm:block rounded-full w-48 text-base font-medium px-2'>Connect Wallet</button>
          </div>

          <div className="space-y-10 w-full md:w-1/2">
            <Image
              className=" h-[300px] w-[300px] md:h-[600px] md:w-[600px] cursor-pointer"
              // src={Ghost.src}
              src={Award.src}
              // src={Wallet.src}
              alt="Your Company"
              width={400}
              height={400}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Navbar;
