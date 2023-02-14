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
    provider.on("connect", onConnect);
    return () => {
      provider.removeListener("connect", onConnect);
    };
  }, [provider]);

  return (
    <>
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
      {!loading && !isLoggedIn && (
        <button className="bg-[#ffffff]  text-[#212121] font-medium text-xl rounded-2xl px-5 py-1  hover:scale-105" onClick={onConnectClick}>
          Connect Wallet
        </button>
      )}
      {!loading && isLoggedIn}
    </nav>
    </>
  );
};

export default Navbar1;
