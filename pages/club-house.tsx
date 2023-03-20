import EnsuingBenefits from "@/components/clubHouse/EnsuingBenefits";
import RoadMap from "@/components/clubHouse/RoadMap";
import TheTeam from "@/components/clubHouse/TheTeam";
import TheUnderground from "@/components/clubHouse/TheUnderground";
import WelcomeToClubHouse from "@/components/clubHouse/WelcomeToClubHouse";
import Footer from "@/components/Footer";
import NavHeader from "@/components/NavHeader";
import Head from "next/head";
import Image from "next/image";
import React from "react";

export default function ClubHouse() {
  return (
    <>
      <Head>
        <title>Club House - The Passengers</title>
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

        {/* Cover Image */}
        <div className="w-full mt-5 mb-10">
          <Image
            className=" rounded-2xl"
            src={"/clubHouse/ClubHouse_Cover.gif"}
            alt={"ClubHouse Cover"}
            width={2500}
            height={200}
            priority
          />
        </div>

        <WelcomeToClubHouse />
        <EnsuingBenefits />
        <TheUnderground />
        <RoadMap />
        <TheTeam />
        <Footer />
      </section>
    </>
  );
}
