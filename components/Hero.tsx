import React from "react";
import styles from "@/styles/Hero.module.css";
import Image from "next/image";
import Shape1 from "@/public/assets/Icosahedron (1).png";
import Coins from "@/public/assets/coins.png";
import Ghost from "@/public/assets/ghost.png";
import Wallet from "@/public/assets/wallet.png";
const Hero = () => {
  return (
    <>
      <main className="w-full mt-10 flex flex-col md:flex-row p-6 items-center justify-center ">
        <div className="w-full lg:w-[40vw]">
          <h1 className="text-4xl text-center md:text-left md:text-[64px] leading-tight font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-[rgba(255,255,255,0.45)]">SAAVE: A Trading Ecosystem Built for the Decentralized World</h1>
          <p className="text-gray-500 mt-10">A highly-curated platform for creating, collecting and trading unique NFTs. Trade with confidence on the world’s fastest and most secure crypto exchange</p>
        </div>

        <div className="w-full lg:block md:w-[40vw] p-10 flex items-center justify-center">
          <Image
            className=" h-[500px] w-auto cursor-pointer"
            // src={Ghost.src}
            src={Coins.src}
            // src={Wallet.src}
            alt="Your Company"
            width={900}
            height={900}
          />
        </div>


      </main>

    </>
  );
};

export default Hero;
