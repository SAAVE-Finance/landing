import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full flex  text-white font-['DM Sans'] justify-between my-5 py-8 px-20">
      <div className=" text-xl">
        <h2>CRONOS</h2>
      </div>
      <div className="flex justify-around ">
        <a className="cursor-pointer mx-10">Learn</a>
        <a className="cursor-pointer mx-10">Build</a>
        <a className="cursor-pointer mx-10">Explore</a>
      </div>
      <button className="hover:scale-105">
        <Link
          href="https://frontend-olyn.vercel.app"
          className="cursor-pointer bg-white text-black p-4 hover:scale-125 "
        >
          Get Cronos &gt;
        </Link>
      </button>
    </nav>
  );
};

export default Navbar;
