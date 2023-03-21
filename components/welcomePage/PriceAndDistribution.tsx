import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PriceAndDistribution() {
  return (
    <section id="buy" className="w-full px-5 lg:px-10 py-5 relative mt-10">
      {/* Header */}
      <h1 className="font-bold text-passengerRed lg:text-[2.5rem] text-[2rem] text-center">
        PRICING & DISTRIBUTION
      </h1>

      <div className="mt-5">
        <h4 className="font-semibold italic text-passengerWhite text-2xl text-center lg:text-left">
          Limited Membership Hoodie
        </h4>

        <div className="flex flex-col lg:flex-row w-full items-center gap-20 justify-between">
          <div className="lg:w-1/2 w-full flex justify-center lg:justify-start">
            <Image
              src={"/welcomePage/Passenger_Hoodie.svg"}
              alt={"Passenger Hoddie"}
              width={500}
              height={500}
              priority
            />
          </div>

          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <p className="text-passengerWhite font-normal">
              The PSC membership hoodies are 10,000 in total and come in two
              colors: black and white. All membership hoodies are assigned free
              shipping. Cost only $600. Once it's sold out, it’s sold.
            </p>

            <Link href={""} className="flex justify-center lg:justify-start">
              <p className="bg-passengerDarkRed text-passengerWhite py-2 px-3 text-center rounded-xl mt-10 font-semibold w-1/2">
                Buy Now
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
