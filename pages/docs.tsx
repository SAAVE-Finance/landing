import React from 'react'
import Image from "next/image";
import Hand from "@/public/assets/hand.png";
import Locker from "@/public/assets/locker.png";
import Footer from '@/components/Footer';
import BuyNFT from "@/components/BuyNFT";
import Navbar1 from '@/components/Navbar1';

function docs() {
    return (
        <>
        <Navbar1 />
        <div className='flex flex-col space-y-48 items-center justify-center mt-10 md:mt-24 p-4'>
            <div className='text-center space-y-4'>
                <h1 className='text-4xl font-Manrope md:text-6xl font-extrabold text-white'>How to Deposit into SAAVE. - 1</h1>
                <div className='flex flex-wrap items-center justify-center p-8 md:p-10 '>
                    <p className='text-white text-left w-full md:w-1/2 lg:w-1/3 text-xl p-4'>
                        ZoidPay is fast becoming one of the most sought after projects
                        when it comes to offering crypto liquidity solutions.
                        We are striving to be the go-to Open Architecture for
                        Building the Next Generation of Web 3.0 Financial Services.
                        And, we need your support in this path.
                    </p>
                    <div className='md:w-96 flex items-center justify-center'>
                        <Image
                            className=" h-[200px] md:h-[200px] lg:h-[300px] w-auto cursor-pointer"
                            // src={Ghost.src}
                            src={Hand.src}
                            // src={Wallet.src}
                            alt="Your Company"
                            width={900}
                            height={900} />
                    </div>
                </div>
            </div>


            <div className='text-center space-y-4'>
                <h1 className='text-4xl font-Manrope md:text-6xl font-extrabold text-white'>How to Deposit into SAAVE.</h1>
                <div className='flex flex-wrap items-center justify-center p-8 md:p-10 '>
                    <div className='md:w-96 flex items-center justify-center'>
                        <Image
                            className=" h-[200px] md:h-[200px] lg:h-[300px] w-auto cursor-pointer"
                            // src={Ghost.src}
                            src={Hand.src}
                            // src={Wallet.src}
                            alt="Your Company"
                            width={900}
                            height={900} />
                    </div>
                    <p className='text-white text-left md:text-right w-full md:w-1/2 lg:w-1/3 text-xl p-4'>
                        ZoidPay is fast becoming one of the most sought after projects
                        when it comes to offering crypto liquidity solutions.
                        We are striving to be the go-to Open Architecture for
                        Building the Next Generation of Web 3.0 Financial Services.
                        And, we need your support in this path.
                    </p>
                </div>
            </div>


            <div className='text-center space-y-4'>
                <h1 className='text-4xl font-Manrope md:text-6xl font-extrabold text-white'>How to Deposit into SAAVE.</h1>
                <div className='flex flex-wrap items-center justify-center p-8 md:p-10 '>
                    <p className='text-white text-left w-full md:w-1/2 lg:w-1/3 text-xl p-4'>
                        ZoidPay is fast becoming one of the most sought after projects
                        when it comes to offering crypto liquidity solutions.
                        We are striving to be the go-to Open Architecture for
                        Building the Next Generation of Web 3.0 Financial Services.
                        And, we need your support in this path.
                    </p>
                    <div className='md:w-96 flex items-center justify-center'>
                        <Image
                            className=" h-[200px] md:h-[200px] lg:h-[300px] w-auto cursor-pointer"
                            // src={Ghost.src}
                            src={Locker.src}
                            // src={Wallet.src}
                            alt="Your Company"
                            width={900}
                            height={900} />
                    </div>
                </div>
            </div>


            <div className='text-center space-y-4'>
                <h1 className='text-4xl font-Manrope md:text-6xl font-extrabold text-white'>How to Deposit into SAAVE.</h1>
                <div className='flex flex-wrap items-center justify-center p-8 md:p-10 '>
                    <div className='md:w-96 flex items-center justify-center'>
                        <Image
                            className=" h-[200px] md:h-[200px] lg:h-[300px] w-auto cursor-pointer"
                            // src={Ghost.src}
                            src={Locker.src}
                            // src={Wallet.src}
                            alt="Your Company"
                            width={900}
                            height={900} />
                    </div>
                    <p className='text-white text-left w-full md:w-1/2 lg:w-1/3 text-xl p-4'>
                        ZoidPay is fast becoming one of the most sought after projects
                        when it comes to offering crypto liquidity solutions.
                        We are striving to be the go-to Open Architecture for
                        Building the Next Generation of Web 3.0 Financial Services.
                        And, we need your support in this path.
                    </p>
                </div>
            </div>

        </div>
        <BuyNFT />
        <Footer />
        </>
    )
}

export default docs