import Link from "next/link";
import React from "react";

export default function CommunityPassengers() {
  return (
    <section className="lg:px-40 px-5 py-2">
      <h1 className="font-black italic uppercase text-passengerRed lg:text-[2rem] text-[1.85rem] ">
        PASSENGERS IN THE COMMUNITY
      </h1>
      <p className="text-passengerBlack font-medium mt-3 text-[0.85rem] lg:text-left">
        The Passengers Club will formalize a century of commitment to social
        responsibility with the foundation of Passengers in the Community
        (PITC). As the main goal is to create the largest network of geniuses
        and at the same time impact society through art, support, and
        storytelling.
      </p>
      <p className="text-passengerBlack font-medium mt-3 text-[0.85rem] lg:text-left">
        Note: You do not have to be a member of the passengers club to join the
        PITC, you can simply purchase any regular passengers club merch or the
        PITC “Cap” to become part of the PITC network and promote the movement.
        Thank you
      </p>

      <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-10 items-center w-full">
        <div className="mt-10 lg:w-[60%] w-full">
          {/* charity support */}
          <div className="my-5">
            <h5 className="text-passengerRed font-black italic text-[1rem] tracking-wider">
              CHARITY SUPPORT
            </h5>
            <p className="text-passengerBlack font-medium mt-1 text-[0.85rem] lg:text-left">
              We want to support a number of charities that are doing incredible
              things in the local community and further afield.
            </p>
          </div>

          {/* commute support */}
          <div className="my-5">
            <h5 className="text-passengerRed font-black italic text-[1rem] tracking-wider ">
              COMMUTE SUPPORT
            </h5>
            <p className="text-passengerBlack font-medium mt-1 text-[0.85rem] lg:text-left">
              We want to support transportation in the community and across the
              world by stationing our own public transport vehicles. At a fair
              price.
            </p>
          </div>

          {/* youth support */}
          <div className="my-5">
            <h5 className="text-passengerRed font-black italic text-[1rem] tracking-wider ">
              YOUTH SUPPORT
            </h5>
            <p className="text-passengerBlack font-medium mt-1 text-[0.85rem] ">
              This program will be based on genius at its core, as a guide for
              the next generation through a specific set of artistic
              explorations designed to instill self-confidence in their work and
              bring forward their creativity and critical thinking.
            </p>
          </div>

          {/* voice support */}
          <div className="my-5">
            <h5 className="text-passengerRed font-black italic text-[1rem] tracking-wider ">
              VOICE SUPPORT
            </h5>
            <p className="text-passengerBlack font-medium mt-1 text-[0.85rem] lg:text-left">
              Creating a platform where people can share their stories and
              experiences without censorship
            </p>
          </div>
        </div>

        <div className="lg:w-[40%] w-full flex flex-col items-center ">
          <img
            src="/community/CommunityCap.png"
            alt="Community Cap"
            loading="lazy"
            className="w-[350px] h-[350px]"
          />

          <p className="text-passengerBlack font-medium mt-1 text-[0.85rem] ">
            Purchase the PITC "Cap" to join the movement
          </p>

          <Link
            href={
              "https://passengersclubshop.company.site/products/P-I-T-C-p548398627"
            }
          >
            <button className="w-[100px] bg-passengerDarkRed hover:bg-passengerRed p-1 text-[0.75rem] font-semibold mt-5 text-passengerWhite text-center rounded-md">
              Buy Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
