import Image from "next/image";
import React from "react";

export default function WelcomeHOF() {
  return (
    <section className="relative my-10">
      <div className="w-full flex justify-between items-center gap-10">
        <div className="w-1/2 flex justify-start">
          <Image
            src={"/clubHouse/ClubHouse_Team.svg"}
            alt={"Hall Of Fame Masked"}
            width={300}
            height={300}
            priority
          />
        </div>

        <div>
          <p className="text-passengerWhite font-normal mt-5 text-center text-[0.85rem]">
            Some are acknowledged, while some are appointed to ridiculous
            positions. The Hall of Fame offers only two kinds of prestige slots,
            namely,<span className="text-passengerRed"> "masked on"</span> and
            <span className="text-passengerRed"> "masked off."</span> Masked on
            can be activated through the island path, while Masked off can be
            activated by both pathways.
          </p>

          <h4 className="font-black text-[2rem] text-passengerRed italic uppercase text-center mt-5">
            Easter Egg
          </h4>

          <p className="text-passengerWhite font-normal mt-2 text-center text-[0.85rem]">
            There are a total of 12 slots, 8 of which are permanently assigned
            slots and 4 of which are not. However, in a situation where an
            indicated member is found wanting, the club has the right to replace
            the indicated member after investigations have been carried out.
          </p>
        </div>

        <div className="w-1/2 flex justify-end">
          <Image
            src={"/clubHouse/Passenger_Smile.svg"}
            alt={"Hall Of Fame Masked"}
            width={300}
            height={300}
            priority
          />
        </div>
      </div>

      {/* Title */}
      <h1 className="font-black italic text-passengerRed lg:text-[2rem] text-[1.85rem] text-center mt-5">
        WELCOME TO THE PSC HALL OF FAME
      </h1>
    </section>
  );
}
