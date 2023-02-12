import React from 'react'
import Gradient from "@/public/assets/gradient.jpg";
import Image from 'next/image';
function Newsletter() {
    return (
        <div className='w-full p-4 md:p-16 relative flex items-center justify-center'>
            <Image src={Gradient.src} height={100} width={100} className=" w-full h-96 rounded-3xl" alt="img" />
            <div className='flex items-center justify-center absolute flex-col p-4'>
                <h1 className='text-black text-3xl md:text-5xl  w-full md:w-2/3 top-24 text-center font-extrabold mb-4'>Subscribe To Our  Newsletter</h1>
                <p className='text-black w-[80vw] md:w-[70%] font-medium text-center '>Stay updated on all things Saave by subscribing to our newsletter!</p>
                <div className="m-4 p-1 rounded-full w-1/2 md:w-1/3 bg-transparent border-2 border-black flex">
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input className="p-2 w-full rounded-full focus:outline-none bg-transparent " type="email" id="name" placeholder="Enter Your Mail" />
                    <button className='text-white bg-black sm:block rounded-full w-48 text-base font-medium px-2'>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Newsletter