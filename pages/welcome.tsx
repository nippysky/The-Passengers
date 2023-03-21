import Footer from "@/components/Footer";
import JoinTheClub from "@/components/welcomePage/JoinTheClub";
import PriceAndDistribution from "@/components/welcomePage/PriceAndDistribution";
import WelcomeHero from "@/components/welcomePage/WelcomeHero";
import WelcomePassengers from "@/components/welcomePage/WelcomePassengers";
import Head from "next/head";
import React from "react";

export default function Welcome() {
  return (
    <>
      <Head>
        <title>Welcome Onboard - The Passengers</title>
        <meta
          name="description"
          content="Experience the journey of a ridden ecosystem from its Adam. The train is what you make of it; however, the true journey begins when the eighth passenger awakes."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <WelcomeHero />
      <JoinTheClub />
      <PriceAndDistribution />
      <WelcomePassengers />

      <footer className="px-5 lg:px-10">
        <Footer />
      </footer>
    </>
  );
}