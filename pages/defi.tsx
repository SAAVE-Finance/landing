import React from "react";
import Image from "next/image";
import Hand from "@/public/assets/hand.png";
import Locker from "@/public/assets/locker.png";
import Footer from "@/components/Footer/Footer";
import ClaimNft from "@/components/Button/ClaimNft";
import Navbar1 from "@/components/Navbar/Navbar1";

function docs() {
  return (
    <>
      <Navbar1 />
      <div className="flex flex-col space-y-48 items-center justify-center mt-10 md:mt-24 p-4">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-Manrope md:text-6xl font-extrabold text-white">
            DeFi
          </h1>
          <div className="flex flex-wrap items-center justify-center p-8 md:p-10 ">
            <p className="text-white text-left w-full md:w-1/2 lg:w-1/3 text-xl p-4">
            DeFi stands for Decentralized Finance, which refers to a new type of financial system that is built using blockchain technology. Blockchain is a digital ledger that is distributed across a network of computers, and it is used to record and verify transactions. DeFi uses this technology to create a financial system that is not controlled by any central authority, such as a bank or a government.
            </p>
            <div className="md:w-96 flex items-center justify-center">
              <Image
                className=" h-[200px] md:h-[200px] lg:h-[300px] w-auto cursor-pointer"
                // src={Ghost.src}
                src={Hand.src}
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
            What is done in DeFi?
          </h1>
          <div className="flex flex-wrap items-center justify-center p-8 md:p-10 ">
            <div className="md:w-96 flex items-center justify-center">
              <Image
                className=" h-[200px] md:h-[200px] lg:h-[300px] w-auto cursor-pointer"
                // src={Ghost.src}
                src={Hand.src}
                // src={Wallet.src}
                alt="Your Company"
                width={900}
                height={900}
              />
            </div>
            <p className="text-white text-left md:text-right w-full md:w-1/2 lg:w-1/3 text-xl p-4">
            In a DeFi system, all of these activities can be done directly between people using blockchain technology. There are no intermediaries, and the rules for transactions are encoded in the software that runs on the blockchain. This makes DeFi faster, more transparent, and more accessible than traditional finance.
            </p>
          </div>
        </div>

        <div className="text-center space-y-4">
          <h1 className="text-4xl font-Manrope md:text-6xl font-extrabold text-white">
            What are DeFi applications?
          </h1>
          <div className="flex flex-wrap items-center justify-center p-8 md:p-10 ">
            <p className="text-white text-left w-full md:w-1/2 lg:w-1/3 text-xl p-4">
            DeFi applications include things like decentralized exchanges, which allow people to trade cryptocurrencies without a middleman, and lending protocols, which allow people to borrow and lend money without a bank. There are also DeFi applications for insurance, prediction markets, and other financial activities.
            </p>
            <div className="md:w-96 flex items-center justify-center">
              <Image
                className=" h-[200px] md:h-[200px] lg:h-[300px] w-auto cursor-pointer"
                // src={Ghost.src}
                src={Locker.src}
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
          <div className="flex flex-wrap items-center justify-center p-8 md:p-10 ">
            <div className="md:w-96 flex items-center justify-center">
              <Image
                className=" h-[200px] md:h-[200px] lg:h-[300px] w-auto cursor-pointer"
                // src={Ghost.src}
                src={Locker.src}
                // src={Wallet.src}
                alt="Your Company"
                width={900}
                height={900}
              />
            </div>
            <p className="text-white text-left w-full md:w-1/2 lg:w-1/3 text-xl p-4">
            While DeFi is still a relatively new concept, it has the potential to disrupt traditional finance and provide greater financial access to people around the world.
            </p>
          </div>
        </div>
      </div>
      <ClaimNft />
      <Footer />
    </>
  );
}

export default docs;
