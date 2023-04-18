import React from "react";
import Image from "next/image";

export default function WelcomePassengers() {
  return (
    <section className="w-full flex flex-col lg:flex-row gap-20 justify-between items-center px-5 lg:px-40 py-5 relative mt-10">
      <div className="lg:w-1/2 w- text-center lg:text-left">
        <h1 className="font-black italic uppercase text-passengerWhite text-[1rem]">
          PASSENGERS
        </h1>

        <p className="text-passengerWhite font-normal mt-5 text-[0.85rem]">
          The passengers are 20,000 in total; 10,000 are redeemable through
          membership-limited hoodie purchases. While the other 10,000 can be
          minted for a fair price of 0.09 ETH.
        </p>

        <p className="font-bold italic text-passengerRed text-[1rem] mt-5">
          Coming Soon...
        </p>
      </div>

      <div className="lg:w-1/2 w-full flex lg:justify-end justify-center">
        <Image
          src={"/welcomePage/Passengers_Mask.svg"}
          alt={"Passenger Hoddie"}
          width={300}
          height={300}
          priority
        />
      </div>
    </section>
  );
}
