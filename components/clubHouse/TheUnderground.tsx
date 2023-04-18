import React from "react";
import Image from "next/image";

export default function TheUnderground() {
  return (
    <section className="w-full mt-5 mb-10 lg:px-28">
      <Image
        src={"/clubHouse/ClubHouse_UnderGround.svg"}
        alt={"ClubHouse UnderGround"}
        width={2500}
        height={200}
        priority
      />

      <div className="mt-7">
        <h5 className="text-passengerRed font-black text-[1rem] tracking-wider text-center lg:text-left italic">
          THE UNDERGROUND
        </h5>

        <p className="mt-2 text-passengerWhite font-normal text-center lg:text-left text-[0.85rem]">
          Granted access to the clubhouse basement, home to cash whales. The
          word on the street is "Whatever goes on in the underground stays
          underground".
        </p>
      </div>
    </section>
  );
}
