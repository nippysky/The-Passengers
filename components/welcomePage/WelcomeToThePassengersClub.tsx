import React from "react";
import Image from "next/image";
import WelcomeToClubHouse from "../clubHouse/WelcomeToClubHouse";
import EnsuingBenefits from "../clubHouse/EnsuingBenefits";
import TheUnderground from "../clubHouse/TheUnderground";
import RoadMap from "../clubHouse/RoadMap";
import TheTeam from "../clubHouse/TheTeam";

export default function WelcomeToThePassengersClub() {
  return (
    <>
      <section className="border-t border-gray-500 flex flex-row justify-between items-start w-full">
        <div className="lg:mx-28 mt-10">
          <h1 className="font-black italic text-passengerRed lg:text-[2rem] text-[1.85rem]">
            WELCOME TO THE PASSENGERS CLUB
          </h1>
          <p className="text-passengerWhite text-[0.85rem] mt-5">
            knowing who you are behind a mask. With your purchases of membership
            merchandise, you become a passenger with the ability to earn
            valuable points, receive membership offers and discounts, granted
            access to the clubhouse and all its goodies. Foster an appreciation
            for art, aid your community development by joining the PITC project,
            connect with other artists, collaborate, build, and transcend.
          </p>
        </div>
      </section>

      {/* Cover Image */}
      <div className="w-full mt-5 mb-10 lg:px-28">
        <Image
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

      {/* <div className="h-4 bg-passengerWhite"></div> */}
    </>
  );
}
