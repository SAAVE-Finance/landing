import Link from "next/link";
import React from "react";
import Logo from "/public/assets/ghostmascot.png";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";
const Navbar = () => {
  return (
    <nav className="w-full flex  text-white font-['DM Sans'] justify-between my-5 py-8 px-20">
      <div className="flex">
        <Link href="/">
        <Image src={Logo} alt={"nav-logo"} className=" w-14" />
        {/* <h2 className="text-xl font-bold my-3 mx-1">SAAVE</h2> */}
        </Link>
      </div>
      <div className="flex justify-around my-3 ">
        <a className={` ${styles.links} cursor-pointer mx-10`}>Learn</a>
        <a className={` ${styles.links} cursor-pointer mx-10`}>Build</a>
        <a className={` ${styles.links} cursor-pointer mx-10`}>Explore</a>
      </div>
      <button className="hover:scale-105 bg-white rounded-md border-none">
        <Link
          href="https://frontend-olyn.vercel.app"
          className="cursor-pointer  text-black p-4 font-medium"
        >
          Launch App &gt;
        </Link>
      </button>
    </nav>
  );
};

export default Navbar;
