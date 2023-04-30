import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import React from "react";

export default function PriceAndDistribution() {
  return (
    <section id="buy" className="w-full px-5 lg:px-40 pt-5 relative mt-10">
      {/* Header */}
      <h1 className="font-black italic text-passengerRed lg:text-[2rem] text-[1.85rem] text-center">
        PRICING & DISTRIBUTION
      </h1>

      <div className="mt-5">
        <div className="flex flex-col lg:flex-row w-full items-center lg:gap-20 justify-between">
          <div className="lg:w-1/2 w-full flex justify-center lg:justify-start lg:mt-20">
            <Image
              src={"/welcomePage/PassengerJacket.jpg"}
              alt={"Passenger Jacket"}
              width={500}
              height={500}
              priority
            />
          </div>

          <div className="lg:w-1/2 w-full text-[0.85rem] border-b border-passengerWhite pb-10 lg:border-none">
            <h4 className="font-black italic uppercase text-passengerWhite text-[1rem] my-2">
              Limited Membership Leather Jacket
            </h4>
            <p className="text-passengerWhite font-normal">
              The PSC membership jackets are limited. All membership jackets are
              assigned free shipping. Cost only $250. Once it's sold out, it’s
              sold out.
            </p>

            <Link
              href={
                "https://passengersclubshop.company.site/products/Limited-Membership-Leather-Jacket-p548396135"
              }
              className="flex"
            >
              <div className="w-[150px] bg-passengerDarkRed hover:bg-passengerRed text-passengerWhite py-2 rounded-md my-5 font-semibold text-center">
                Buy Now
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
