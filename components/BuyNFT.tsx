import React from "react";
import sendNotifications from '../scripts/sendNotification'

export default function BuyNFT() {
    return (
        <div className="flex justify-center font-['DM Sans']">
            <button
                onClick={sendNotifications}
                className="bg-[#ffffff]  text-[#212121] font-bold text-xl rounded-2xl px-10 py-2  hover:scale-110">
                Buy NFT
            </button>
        </div>
    );
}

