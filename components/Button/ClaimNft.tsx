import React from "react";
import { useState } from "react";
import NFTContract from "../../abis/NftABI.json";
import {
  useAccount,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
const ClaimNft = () => {
  const { address, isConnected } = useAccount();
  const { config } = usePrepareContractWrite({
    address: `0x${NFTContract.address}`,
    abi: NFTContract.abi,
    functionName: "mint",
  });
  const { data, write } = useContractWrite(config);
  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  return (
    <div>
      {isConnected && (
        <button
          disabled={!write || isLoading}
          onClick={write}
          className="mx-[47%] bg-[#f8f86d] p-3 rounded-xl w-36 hover:scale-105"
        >
          {isLoading ? "Minting..." : "Claim NFT"}
        </button>
      )}
      {isSuccess && (
        <div className="text-[#ffffff9e] mx-[50%]">
          Successfully minted your NFT!
          <div>
            <a href={`https://testnets.opensea.io/${address}`}>Verify !</a>
          </div>
        </div>
      )}
    </div>
  );
};
export default ClaimNft;
