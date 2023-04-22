import React from "react";
import NavHeader from "@/components/NavHeader";
import Head from "next/head";
import CommunityPassengers from "@/components/community/CommunityPassengers";
import JoinTheCommunity from "@/components/community/JoinTheCommunity";
import ReachForm from "@/components/community/ReachForm";

export default function Community() {
  return (
    <>
      <Head>
        <title>PassengersClub | Community</title>
        <meta
          name="description"
          content="Experience the journey of a ridden ecosystem from its Adam. The train is what you make of it; however, the true journey begins when the eighth passenger awakes."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="w-full bg-passengerCommunityBG flex-1">
        <div className="bg-passengerBlack lg:px-10 px-5 py-2">
          {/* Navbar */}
          <NavHeader />
        </div>

        {/* Cover Image */}
        <div className="w-full">
          <img
            src={"/brand/PassengerCommunity.jpeg"}
            className="w-full lg:h-screen h-[300px]"
          />
        </div>

        <CommunityPassengers />
        <JoinTheCommunity />
        <ReachForm />
      </section>
    </>
  );
}
