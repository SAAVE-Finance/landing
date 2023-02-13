import React from "react";
import Coin from "@/public/assets/image 5.png";
import Sheild from "@/public/assets/image 6.png";
import Card from "@/components/Card";

const Feature = () => {
  return (
    <div className="mt-48 ">
      <h1 className="font-normal text-6xl text-center leading-[64px] font-[inter] text-white my-5 ">
        What does SAAVE do?
      </h1>
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
    </div>
  );
};

export default Feature;
