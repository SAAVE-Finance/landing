import Head from "next/head";
import { Inter } from "@next/font/google";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Section1 from "@/components/Section1";
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
        <Section1 />
        <Footer />
      </main>
    </>
  );
}
