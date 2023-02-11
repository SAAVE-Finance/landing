import Head from "next/head";
import { Inter } from "@next/font/google";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Feature from "@/components/Feature";
import Tech from "@/components/Tech";
import Panel from "@/components/Panel";
import Panel2 from "@/components/Panel2";
import Ghost2 from "@/public/assets/SAAVE.png";
import Newsletter from "@/components/Newsletter";
import SwordShield from "@/public/assets/swordshield.png";
import Ghost1 from "@/public/assets/aaveLend.png";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <>
      <Head>
        <title>sAAVE Finance | Landing</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <Feature />
        <Panel
          img={Ghost1}
          title={"Decentralized lending"}
          desc={
            "In return for securing the services on the Cronos Hub, transaction fees and staking rewards are distributed to HEDRON stakers."
          }
          link={"https://www.google.com"}
        />
        <Panel2
          img={Ghost2}
          title={"Decentralized lending"}
          desc={
            "In return for securing the services on the Cronos Hub, transaction fees and staking rewards are distributed to HEDRON stakers."
          }
          link={"https://www.google.com"}
        />
        <Panel
          img={SwordShield}
          title={"Decentralized lending"}
          desc={
            "In return for securing the services on the Cronos Hub, transaction fees and staking rewards are distributed to HEDRON stakers. In the Cronos Hub, transaction fees and staking rewards are distributed to HEDRON stakers."
          }
          link={"https://www.google.com"}
        />
        <Newsletter />
        <Footer />
      </main>
    </>
  );
}
