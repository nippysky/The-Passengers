import NavHeader from "@/components/NavHeader";
import Head from "next/head";
import React from "react";
import Image from "next/image";
import Prologue from "@/components/island/Prologue";
import Footer from "@/components/Footer";

export default function StoryLine() {
  return (
    <>
      <Head>
        <title>The island - The Passengers</title>
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
            src={"/island/IslandCover.svg"}
            alt={"The island Cover"}
            width={2500}
            height={200}
            priority
          />
        </div>

        <Prologue />
      </section>
      <Footer />
    </>
  );
}
