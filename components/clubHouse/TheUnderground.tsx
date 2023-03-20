import React from "react";
import Image from "next/image";

export default function TheUnderground() {
  return (
    <section className="w-full mt-5 mb-10">
      <Image
        className=" rounded-2xl"
        src={"/clubHouse/ClubHouse_UnderGround.svg"}
        alt={"ClubHouse UnderGround"}
        width={2500}
        height={200}
        priority
      />

      <div className="mt-7">
        <h5 className="text-passengerYellow font-semibold text-[1.1rem] tracking-wider text-center lg:text-left">
          THE UNDERGROUND
        </h5>

        <p className="mt-5 text-passengerWhite font-normal text-center lg:text-left">
          Granted access to the clubhouse basement, home to cash whales. The
          word on the street is "Whatever goes on in the underground stays
          underground".
        </p>
      </div>
    </section>
  );
}
