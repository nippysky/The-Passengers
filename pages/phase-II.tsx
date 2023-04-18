import Footer from "@/components/Footer";
import Head from "next/head";
import React from "react";
import Image from "next/image";
import NavHeader from "@/components/NavHeader";

export default function PhaseII() {
  return (
    <>
      <Head>
        <title>Phase-II - The Passengers</title>
        <meta
          name="description"
          content="Experience the journey of a ridden ecosystem from its Adam. The train is what you make of it; however, the true journey begins when the eighth passenger awakes."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="px-5 py-2 lg:px-10">
        <NavHeader />
      </section>

      {/* Island Map */}
      <div className="mt-5">
        {/* <h5 className="text-passengerYellow font-semibold text-[1.1rem] tracking-wider text-center lg:text-left">
          THE ISLAND MAP
        </h5>
        <p className="text-passengerWhite font-normal mt-5 text-center lg:text-left">
          When the 8th passengers awakes the island map will guide the way.
        </p> */}

        {/* Map Image */}
        <div className="w-full mb-3">
          <Image
            src={"/island/IslandMap.svg"}
            alt={"The island Cover"}
            width={2500}
            height={200}
            priority
          />
        </div>
        {/* <p className="text-passengerWhite font-normal text-center lg:text-left">
          The map contains phase II...
        </p> */}
      </div>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
