import Image from "next/image";
import React from "react";

export default function JoinTheClub() {
  return (
    <section className="w-full min-h-screen px-5 lg:px-40 py-5 relative mt-10">
      {/* JOIN THE CLUB */}
      <div>
        <div className="w-full flex flex-col lg:flex-row gap-20 mt-10 justify-between">
          <div className="lg:w-1/2 w-full flex lg:justify-start justify-center">
            <Image
              src={"/welcomePage/PasssengerBoss.webp"}
              alt={"Passenger Bossman"}
              width={400}
              height={500}
              priority
              unoptimized
            />
          </div>

          <div className="lg:w-1/2 w-full">
            <h1 className="font-black italic text-passengerRed lg:text-[2rem] text-[1.5rem] ">
              JOIN THE CLUB
            </h1>
            <p className="text-passengerWhite font-normal mt-5 text-[0.85rem]">
              The club offers one way to membership with two paths, reality path
              and island path. Lifestyle is a fundamental aspect of the modern
              world.
            </p>

            <p className="text-passengerRed italic font-normal mt-5 text-[0.85rem]">
              Note: You can choose one or both, but hurry! Hop in before the
              eighth passenger awakens.
            </p>

            <p className="text-passengerWhite font-normal mt-5 text-[0.85rem]">
              <span className="text-passengerRed font-normal text-[0.85rem]">
                Reality Path:
              </span>{" "}
              When you buy a Limited Membership Leather Jacket, you become a
              member with the ability to gain membership benefits. Consider this
              a way to hop in with no interest in Web3 or the metaverse.
            </p>

            <p className="text-passengerWhite font-normal mt-5 text-[0.85rem]">
              <span className="text-passengerRed font-normal text-[0.85rem]">
                Island Path:
              </span>{" "}
              When you buy at least one Nft from the PSC Limited Nft collection,
              you become a member with the ability to gain membership benefits.
              Consider this a way to hop in with interest in the blockchain.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
