import Link from "next/link";
import React from "react";
import Coin from "@/public/assets/image 5.png";
import Sheild from "@/public/assets/image 6.png";
import Chart from "@/public/assets/chart.png";
import Badge from "@/public/assets/image 3.png";
import Image from "next/image";

const Feature = () => {
  return (
    <div className="mt-64">
      <h1 className="font-normal text-5xl text-center leading-[64px] text-transparent bg-clip-text bg-gradient-to-r from-white to-[rgba(255,255,255,0.45)] mx-auto">
        Be Part of the Open
      </h1>
      <h1 className="font-normal text-5xl text-center leading-[64px] text-transparent bg-clip-text bg-gradient-to-r from-white to-[rgba(255,255,255,0.45)] mx-auto">
        Economy of the Future.
      </h1>
      <div className="flex items-center flex-wrap justify-center mx-10 lg:mx-48">

        {/* Card 1 */}
        <div className="h-96 w-96 rounded-2xl bg-gray-900 m-10 p-6 cursor-pointer shadow-2xl  hover:shadow-slate-700">
          <Image src={Coin} alt="hero" width={200} />
          <h1 className="text-white font-DM Sans font-bold text-3xl mt-2">Marketplace</h1>
          <p className="text-white font-light font-DM_Sans text-base mt-2">
            Set to operate a next-gen
            decentralized exchange, swapping
            digital assets from across the
            Interchain, with very low fees and
            instant transaction confirmation.
          </p>
        </div>

        {/* Card 2 */}
        <div className="h-96 w-96 rounded-2xl bg-gray-900 m-10 p-6 cursor-pointer shadow-2xl  hover:shadow-slate-700">
          <Image src={Sheild} alt="hero" width={200} />
          <h1 className="text-white font-DM Sans font-bold text-3xl mt-2">Security provider</h1>
          <p className="text-white font-normal font-DM_Sans text-base mt-2">
            With the upcoming Interchain
            Security feature, HEDRON will soon be
            securing many chains, in exchange
            for additional staking rewards.
          </p>
        </div>

        {/* Card 3 */}
        <div className="h-96 w-96 rounded-2xl bg-gray-900 m-10 p-6 cursor-pointer shadow-2xl  hover:shadow-slate-700">
          <Image src={Chart} alt="hero" width={200} />
          <h1 className="text-white font-DM Sans font-bold text-3xl mt-2">Router</h1>
          <p className="text-white font-normal font-DM_Sans text-base mt-2">
            A core mission of the Hub – to
            connect chains by establishing
            IBC connections with compatible
            chains and operating decentralized
            bridges with chains like Ethereum
            and Bitcoin.
          </p>
        </div>

        {/* Card 4 */}
        <div className="h-96 w-96 rounded-2xl bg-gray-900 m-10 p-6 cursor-pointer shadow-2xl  hover:shadow-slate-700">
          <Image src={Badge} alt="hero" width={200} />
          <h1 className="text-white font-DM Sans font-bold text-3xl mt-2">Custodian</h1>
          <p className="text-white font-normal font-DM_Sans text-base mt-2">
            A core mission of the Hub – to
            connect chains by establishing
            IBC connections with compatible
            chains and operating decentralized
            bridges with chains like Ethereum
            and Bitcoin.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;