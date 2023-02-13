import Link from "next/link";
import React from "react";
import Logo from "/public/assets/ghostmascot.png";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import { useArcanaAuth } from "../auth/useArcanaAuth";

const Navbar1 = () => {
  const { user, connect, isLoggedIn, loading, loginWithSocial, provider } =
    useArcanaAuth();
  const onConnectClick = async () => {
    try {
      await connect();
    } catch (e) {
      console.log(e);
    }
  };
  const onConnect = () => {
    console.log("connected");
  };
  React.useEffect(() => {
    provider.on("connect wallet", onConnect);
    return () => {
      provider.removeListener("connect wallet", onConnect);
    };
  }, [provider]);

  return (
    <nav className="w-full flex  text-white font-['DM Sans'] justify-between my-5 py-8 px-20">
      <div className="flex">
        <Image src={Logo} alt={"nav-logo"} className=" w-14" />
        {/* <h2 className="text-xl font-bold my-3 mx-1">SAAVE</h2> */}
      </div>
      <div className="flex justify-around my-3 ">
        <a className={` ${styles.links} cursor-pointer mx-10`}>Learn</a>
        <a className={` ${styles.links} cursor-pointer mx-10`}>Build</a>
        <a className={` ${styles.links} cursor-pointer mx-10`}>Explore</a>
      </div>
      <button className="hover:scale-105 bg-white rounded-md border-none text-black px-1" onClick={onConnectClick}>
          Connect Wallet
      </button>
    </nav>
  );
};

export default Navbar1;
