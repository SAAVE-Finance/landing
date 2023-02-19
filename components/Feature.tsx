import React from "react";
import Ecto from "@/public/assets/ecto.png";
import Sword from "@/public/assets/swordshield.png";
import Pestle from "@/public/assets/pestleandmortar.png";
import Card from "@/components/Cards/Card";

const Feature = () => {
  return (
    <div className="mt-56 ">
      <h1 className="font-extrabold font-Poppins text-4xl md:text-6xl text-center leading-[64px] text-white my-5 ">
        What does SAAVE do?
      </h1>
      <div className="flex flex-row justify-center flex-wrap px-10 mt-20 mb-12">
        <Card
          img={Sword}
          title={"Battle Tested"}
          description={
            "Earn the safest yields from the most battle tested defi protocols"
          }
        />
        <Card
          img={Ecto}
          title={"Easy UI"}
          description={
            "View your profit in real-time"
          }
        />
        <Card
          img={Pestle}
          title={"Simplified"}
          description={
            "Combine different strategies into one simple one"
          }
        />
      </div>
    </div>
  );
};

export default Feature;
