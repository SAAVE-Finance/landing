import Link from "next/link";
import React from "react";
import styles from "../../styles/Navbar.module.css";
import Logo from "/public/assets/saave.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full h-[15vh] flex text-white font-['DM Sans'] justify-between py-5 px-14 mb-2">
      <div className="flex my-auto">
        <Link href="/">
          {/* <Image src={Logo} alt={"nav-logo"} className=" w-14" /> */}
          <h2 className="text-xl font-bold pb-1  ">SAAVE</h2>
        </Link>
      </div>
      <div className="flex justify-around my-auto ml-16 text-[#ffffffec]">
        <a className={` ${styles.links} cursor-pointer mx-10`}>Learn</a>
        <a className={` ${styles.links} cursor-pointer mx-10`}>Build</a>
        <a className={` ${styles.links} cursor-pointer mx-10`}>Explore</a>
        <a className={` ${styles.links} cursor-pointer mx-10`}>Reviews</a>
      </div>
      <button className="hover:scale-105 bg-white rounded-2xl border-none h-[86%] my-auto">
        <Link
          href="https://main-app-six.vercel.app/"
          className="cursor-pointer  text-black p-4 font-medium"
        >
          Launch App &gt;
        </Link>
      </button>
    </nav>
  );
};

export default Navbar;
