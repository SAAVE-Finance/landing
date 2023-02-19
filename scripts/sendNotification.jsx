
import * as PushAPI from "@pushprotocol/restapi";
import * as ethers from "ethers";
import { useAccount } from 'wagmi'

const PK = '0x21a948703B53c710535196e3DE1051e814fb33A9'; // channel private key
const Pkey = process.env.WALLET_PRIVATE_KEY || '0xd03c81da131eaf61310daa85f9bf4a938755b6b03e6e0d9ca8dca354eb865bfe';
const signer = new ethers.Wallet(Pkey);

// const { address, isConnecting, isDisconnected } = useAccount()
// const setUserAddress =  () => {
//     let userAddr
//     if (isConnecting) userAddr = address
//     if (isDisconnected) console.log("USer is Disconnected")
//     console.log("address is this", address)
// }
// setUserAddress()

const sendNotification = async () => {
    // console.log("user",userAddr)
    userAddr = '0x3de8a470b8563785250E855676BEdd62478a0492'
    try {
        const apiResponse = await PushAPI.payloads.sendNotification({
            signer,
            type: 3, // target
            identityType: 2, // direct payload
            notification: {
                title: ` 🎊🎉Congratulations you Have Earned the NFT`,
                body: `This is an Exclusive NFT from SAAVE Finance`
            },
            payload: {
                title: `An Exclusive NFT from SAAVE Finance`,
                body: `Congratulations you have earned it`,
                cta: '',
                img: ''
            },
            recipients: `eip155:5:${userAddr}`, // recipient address
            channel: 'eip155:5:0x21a948703B53c710535196e3DE1051e814fb33A9', // your channel address
            env: 'staging'
        });

        // apiResponse?.status === 204, if sent successfully!
        console.log('API repsonse: ', apiResponse);
    } catch (err) {
        console.error('Error: ', err);
    }
}


export default sendNotification;