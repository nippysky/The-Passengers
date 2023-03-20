import Image from "next/image";
import React from "react";

export default function WelcomeHOF() {
  return (
    <section className="relative my-10">
      <div className="w-full flex justify-between items-center gap-10">
        <div className="w-1/2 flex justify-start">
          <Image
            className="rounded-xl"
            src={"/clubHouse/ClubHouse_Team.svg"}
            alt={"Hall Of Fame Masked"}
            width={600}
            height={600}
            priority
          />
        </div>

        <div className="w-1/2 flex justify-end">
          <Image
            className="rounded-xl"
            src={"/clubHouse/Passenger_Smile.svg"}
            alt={"Hall Of Fame Masked"}
            width={600}
            height={600}
            priority
          />
        </div>
      </div>

      {/* Title */}
      <h1 className="font-bold text-passengerRed lg:text-[2.5rem] text-[2rem] text-center lg:text-left mt-5">
        WELCOME TO THE PSC HALL OF FAME
      </h1>

      <p className="text-passengerWhite font-normal mt-5 text-center lg:text-left">
        Some are acknowledged, while some are appointed to ridiculous positions.
        The Hall of Fame offers only two kinds of prestige slots, namely,
        "masked on and masked off." Masked on can be activated through the
        island PATH, while Masked off can be activated by both pathways.
      </p>

      <p className="text-passengerWhite font-normal mt-5 text-center lg:text-left">
        There are a total of 12 slots, 8 of which are permanently assigned slots
        and 4 of which are not. However, in a situation where an indicated
        member is found wanting, the club has the right to replace the indicated
        member after investigations have been carried out.
      </p>
    </section>
  );
}
