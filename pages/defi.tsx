import React from "react";
import Head from "next/head";
import Image from "next/image";
import Hand from "@/public/assets/hand.png";
import Locker from "@/public/assets/locker.png";
import Footer from "@/components/Footer/Footer";
import ClaimNft from "@/components/Button/ClaimNft";
import Navbar1 from "@/components/Navbar/Navbar1";
import defi1 from "@/public/assets/defi1.jpg";
import defi2 from "@/public/assets/defi2.jpg";
import defi3 from "@/public/assets/defi3.jpeg";
import defi4 from "@/public/assets/defi4.jpg";
import { Video2 } from "@/components/Livepeer";


function Docs() {
  const [show, setShow] = React.useState(false);
  const onClick = () => setShow(!show);
  return (
    <>
    <Head>
        <title>DEFI | Saave Finance </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar1 />
      <div className="flex flex-col space-y-48 items-center justify-center mt-10 md:mt-24 p-4">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-Manrope md:text-6xl font-extrabold text-white">
          Decentralized Finance
          </h1>
          <div className="flex flex-wrap items-center justify-evenly p-8 md:p-10 ">
            <p className="text-gray-400 leading-loose text-left w-full md:w-1/2 lg:w-1/3 text-xl p-4">
            DeFi stands for Decentralized Finance, which refers to a new type of financial system that is built using blockchain technology. Blockchain is a digital ledger that is distributed across a network of computers, and it is used to record and verify transactions. DeFi uses this technology to create a financial system that is not controlled by any central authority, such as a bank or a government.
            </p>
            <div className="md:w-auto flex items-center justify-center">
              <Image
                className=" h-[200px] md:h-[200px] lg:h-[300px]  object-contain w-auto cursor-pointer rounded-2xl"
                // src={Ghost.src}
                src={defi1.src}
                // src={Wallet.src}
                alt="Your Company"
                width={900}
                height={900}
              />
            </div>
          </div>
        </div>

        <div className="text-center space-y-4">
          <h1 className="text-4xl font-Manrope md:text-6xl font-extrabold text-white">
            What is done in <br /> Decentralized Finance?
          </h1>
          <div className="flex flex-wrap items-center justify-evenly p-8 md:p-10 ">
            <div className="md:w-auto flex items-center justify-center">
              <Image
                className=" h-[200px] md:h-[200px] lg:h-[300px]  object-contain w-auto cursor-pointer rouonded-2xl"
                // src={Ghost.src}
                src={defi2.src}
                // src={Wallet.src}
                alt="Your Company"
                width={900}
                height={900}
              />
            </div>
            <p className="text-gray-400 leading-loose text-left md:text-right w-full md:w-1/2 lg:w-1/3 text-xl p-4">
            In a DeFi system, all of these activities can be done directly between people using blockchain technology. There are no intermediaries, and the rules for transactions are encoded in the software that runs on the blockchain. This makes DeFi faster, more transparent, and more accessible than traditional finance.
            </p>
          </div>
        </div>

        <div className="text-center space-y-4">
          <h1 className="text-4xl font-Manrope md:text-6xl font-extrabold text-white">
            What are Decentralized Finance<br/> applications?
          </h1>
          <div className="flex flex-wrap items-center justify-evenly p-8 md:p-10 ">
            <p className="text-gray-400 leading-loose text-left w-full md:w-1/2 lg:w-1/3 text-xl p-4">
            DeFi applications include things like decentralized exchanges, which allow people to trade cryptocurrencies without a middleman, and lending protocols, which allow people to borrow and lend money without a bank. There are also DeFi applications for insurance, prediction markets, and other financial activities.
            </p>
            <div className="md:w-auto flex items-center justify-center">
              <Image
                className=" h-[200px] md:h-[200px] lg:h-[300px]  object-contain w-auto cursor-pointer rounded-2xl"
                // src={Ghost.src}
                src={defi3.src}
                // src={Wallet.src}
                alt="Your Company"
                width={900}
                height={900}
              />
            </div>
          </div>
        </div>

        <div className="text-center space-y-4">
          <h1 className="text-4xl font-Manrope md:text-6xl font-extrabold text-white">
            Conclusion
          </h1>
          <div className="flex flex-wrap items-center justify-evenly p-8 md:p-10 ">
            <div className="md:w-auto flex items-center justify-center">
              <Image
                className=" h-[200px] md:h-[200px] lg:h-[300px]  object-contain w-auto cursor-pointer rounded-2xl"
                // src={Ghost.src}
                src={defi4.src}
                // src={Wallet.src}
                alt="Your Company"
                width={900}
                height={900}
              />
            </div>
            <p className="text-gray-400 leading-loose text-left w-full md:w-1/2 lg:w-1/3 text-xl p-4">
            While DeFi is still a relatively new concept, it has the potential to disrupt traditional finance and provide greater financial access to people around the world.
            </p>
          </div>
        </div>
      </div>
      <div
        className="flex justify-center w-[80%] h-[550px] mx-auto mb-3 mt-36"
        onClick={onClick}
      >
        <Video2 />
      </div>
      <ClaimNft />
      <Footer />
    </>
  );
}

export default Docs;
