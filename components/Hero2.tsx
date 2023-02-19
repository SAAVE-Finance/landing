import Image from 'next/image'
import React from 'react'
import Banner from "@/public/assets/hero2.png";

function Hero2() {
  return (
    <div className='text-white h-auto p-4 md:p-10 flex '>
      <div className='w-full  md:mx-10 text-center '>
        <h1 className=' text-5xl md:text-6xl lg:text-8xl p-10 font-bold font-Poppins bg-gradient-to-r from-purple-400 to-pink-600'>

          Simplify DeFi <br /> with SAAVE <br />on Polygon <br /> Start earning today!</h1>
        <p className='p-4'>Our technology performing fast blockchain (120K TPS) and it has guaranteed AI-based data security. <br /> Proof of Stake, its consensus algorithm enables unlimited speeds.</p>
        <div className='w-full'>
          <Image src={Banner} height={800} width={1200} alt="img" className=' object-contain w-full h-full' />

        </div>
      </div>

    </div>
  )
}

export default Hero2