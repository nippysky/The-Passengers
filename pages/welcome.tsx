import Footer from "@/components/Footer";
import NavHeader from "@/components/NavHeader";
import JoinTheClub from "@/components/welcomePage/JoinTheClub";
import PriceAndDistribution from "@/components/welcomePage/PriceAndDistribution";
import WelcomeHero from "@/components/welcomePage/WelcomeHero";
import WelcomePassengers from "@/components/welcomePage/WelcomePassengers";
import WelcomeToThePassengersClub from "@/components/welcomePage/WelcomeToThePassengersClub";
import Head from "next/head";
import React from "react";

export default function Welcome() {
  return (
    <>
      <Head>
        <title>Passengers Club | Welcome</title>
        <meta
          name="description"
          content="Experience the journey of a ridden ecosystem from its Adam. The train is what you make of it; however, the true journey begins when the eighth passenger awakes."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="px-5 lg:px-10">
        <NavHeader />
      </header>

      <WelcomeHero />
      <JoinTheClub />
      <PriceAndDistribution />
      <WelcomePassengers />

      <section className="lg:mx-10">
        <WelcomeToThePassengersClub />
      </section>

      <div className="px-5">
        <div className="w-full h-[1px] bg-passengerWhite my-10 flex md:hidden " />
      </div>
      <Footer />
    </>
  );
}
