import React from "react";
import Coin from "@/public/assets/image 5.png";
import Sheild from "@/public/assets/image 6.png";
import Card from "@/components/Cards/Card";

const Feature = () => {
  return (
    <div className="mt-56 ">
      <h1 className="font-normal text-6xl text-center leading-[64px] font-[inter] text-white my-5 ">
        What does SAAVE do?
      </h1>
      <div className="flex flex-row justify-center px-10 my-24">
        <Card
          img={Sheild}
          title={"Security provider"}
          description={
            "With the upcoming Interchain Security featur in exchange for additional staking rewards."
          }
        />
        <Card
          img={Coin}
          title={"Marketplace"}
          description={
            "Set to operate a next-gen decentralized exchange Interchain, with transaction confirmation."
          }
        />
        <Card
          img={Sheild}
          title={"Security provider"}
          description={
            "With the upcoming Interchain Security feature in exchange for additional staking rewards."
          }
        />
      </div>
    </div>
  );
};

export default Feature;
