import React from "react";
import Image from "next/image";

export default function WelcomePassengers() {
  return (
    <section className="w-full flex flex-col-reverse lg:flex-row gap-20 justify-between items-center px-5 lg:px-40 py-5 relative">
      <div className="lg:w-1/2 ">
        <h1 className="font-black italic uppercase text-passengerWhite text-[1rem]">
          PASSENGERS
        </h1>

        <p className="text-passengerWhite font-normal mt-5 text-[0.85rem]">
          The passengers’ alter selves are 10,000 in total. can be minted for a
          fair price of 0.09 ETH. Once unlocked
        </p>

        <p className="font-bold italic text-passengerRed text-[1rem] mt-5">
          Coming Soon...
        </p>
      </div>

      <div className="lg:w-1/2 w-full flex  justify-center mt-10 lg:mt-0">
        <Image
          src={"/clubHouse/Clubhouse_Team.jpg"}
          alt={"Passenger Hoddie"}
          width={300}
          height={300}
          priority
          unoptimized
        />
      </div>
    </section>
  );
}
