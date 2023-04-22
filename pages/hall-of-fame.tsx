import Footer from "@/components/Footer";
import PrestigeSlots from "@/components/hallOfFame/PrestigeSlots";
import WelcomeHOF from "@/components/hallOfFame/WelcomeHOF";
import NavHeader from "@/components/NavHeader";
import Head from "next/head";
import React from "react";

export default function HallOfFame() {
  return (
    <>
      <Head>
        <title>PassengersClub | Hall Of Fame</title>
        <meta
          name="description"
          content="Experience the journey of a ridden ecosystem from its Adam. The train is what you make of it; however, the true journey begins when the eighth passenger awakes."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="w-full min-h-screen lg:px-10 px-5 py-2">
        {/* Navbar */}
        <NavHeader />

        <WelcomeHOF />
        <PrestigeSlots />

        <div className="w-full h-[1px] bg-passengerWhite my-10 flex md:hidden" />
      </section>
      <Footer />
    </>
  );
}
