import React from "react";
import Image from "next/image";
import Sheild from "@/public/assets/image 6.png";
import Chart from "@/public/assets/chart.png";
import Yield from "@/public/assets/yield.png";
import Card from "@/components/Card";
import Badge from "@/public/assets/image 3.png";

const data = [
  {
    "heading": "Yield aggregator",
    "desc": "Saave is a platform that combines savings for higher returns through high-yield accounts, funds, and CDs. It offers a convenient and easy-to-use interface for tracking investments and accessing funds.",
  }, 
  {
    "heading": "Yield aggregator",
    "desc": "Saave provides a beginner-friendly investment platform with a simple interface for tracking investments and accessing funds. It offers a convenient way for new investors to earn higher returns through a portfolio of high-yield accounts, funds, and CDs.",
  }, 
  
]

const Feature = () => {
  return (
    <div className="mt-36 md:mt-48 ">
      <h1 className="font-extrabold text-4xl md:text-6xl text-center leading-[64px] text-transparent bg-clip-text bg-gradient-to-r from-white to-[rgba(255,255,255,0.45)] mx-auto">
        What is SAAVE?
      </h1>
      <div className="flex items-center justify-evenly flex-wrap md:p-16">
        <Card heading={data[0].heading} img={Yield} desc={data[0].desc} />
        <Card heading={data[0].heading} img={Sheild} desc={data[0].desc} />
      </div>
    </div>
  );
};

export default Feature;
