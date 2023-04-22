import React from "react";
import Image from "next/image";
import WelcomeToClubHouse from "../clubHouse/WelcomeToClubHouse";
import EnsuingBenefits from "../clubHouse/EnsuingBenefits";
import RoadMap from "../clubHouse/RoadMap";
import TheTeam from "../clubHouse/TheTeam";

export default function WelcomeToThePassengersClub() {
  return (
    <>
      <section className=" px-5 lg:border-[#0A0909] flex flex-row justify-between items-start w-full">
        <div className="lg:mx-24 mt-10">
          <div className="w-full h-[1px] bg-passengerWhite " />
          <h1 className="font-black italic text-passengerRed lg:text-[2rem] text-[1.5rem] mt-10">
            WELCOME TO THE CLUB
          </h1>
          <p className="text-passengerWhite text-[0.85rem] mt-5">
            A network of Geniuses with the ability to impact society, connect
            with other gifted, experience the journey of a ridden ecosystem from
            its Adam, receive membership offerings, discounts, earn valuable
            points, build, collaborate, and transcend.
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

      <RoadMap />
      <TheTeam />

      {/* <div className="h-4 bg-passengerWhite"></div> */}
    </>
  );
}
