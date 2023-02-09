import Link from "next/link";
import React from "react";
import Coin from "@/public/assets/image 5.png";
import Sheild from "@/public/assets/image 6.png";
import Chart from "@/public/assets/chart.png";
import Card from "@/components/Card";
import Badge from "@/public/assets/image 3.png";

const Feature = () => {
  return (
    <div className="mt-48 ">
      <h1 className="font-normal text-6xl text-center leading-[64px] text-transparent bg-clip-text bg-gradient-to-r from-white to-[rgba(255,255,255,0.45)] mx-auto">
        Be Part of the Open
      </h1>
      <h1 className="font-normal text-6xl text-center leading-[64px] text-transparent bg-clip-text bg-gradient-to-r from-white to-[rgba(255,255,255,0.45)] mx-auto mb-20">
        Economy of the Future.
      </h1>
      <div className="flex  flex-col align-middle flex-wrap ">
        <div className="flex flex-row justify-center">
          <Card
            img={Coin}
            title={"Marketplace"}
            description={
              "Set to operate a next-gen decentralized exchange, swapping digital assets from across the Interchain, with very low fees and instant transaction confirmation."
            }
          />
          <Card
            img={Sheild}
            title={"Security provider"}
            description={
              "With the upcoming Interchain Security feature, HEDRON will soon be securing many chains, in exchange for additional staking rewards."
            }
          />
        </div>
        <div className="flex flex-row justify-center">
          <Card
            img={Chart}
            title={"Router"}
            description={
              "A core mission of the Hub – to connect chains by establishing IBC connections with compatible chains with chains like Ethereum and Bitcoin."
            }
          />
          <Card
            img={Badge}
            title={"Custodian"}
            description={
              "A core mission of the Hub – to connect chains by establishing IBC connections with compatible chains and operating chains like Ethereum and Bitcoin."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Feature;
