import Link from "next/link";
import React from "react";
import Logo from "/public/assets/ghostmascot.png";
import styles from "../../styles/Navbar.module.css";
import Image from "next/image";
import { useArcanaAuth } from "../../auth/useArcanaAuth";

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
        {!loading && !isLoggedIn && (
          <button
            className="bg-[#ffffff]  text-[#212121] font-medium text-xl rounded-xl my-auto h-[86%] px-3   hover:scale-105"
            onClick={onConnectClick}
          >
            Connect Wallet
          </button>
        )}
        {!loading && isLoggedIn}
      </nav>
    </>
  );
};

export default Navbar1;
