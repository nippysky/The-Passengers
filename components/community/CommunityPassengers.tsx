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
        (PITC). Passengers in the Community supports people across Hamilton and
        the world by empowering lives through art, support, and storytelling.
      </p>

      <div className="mt-10">
        {/* charity support */}
        <div className="my-5">
          <h5 className="text-passengerRed font-black italic text-[1rem] tracking-wider text-center lg:text-left">
            CHARITY SUPPORT
          </h5>
          <p className="text-passengerBlack font-medium mt-1 text-[0.85rem] lg:text-left">
            We want to support a number of charities that are doing incredible
            things in the local community and further afield.
          </p>
        </div>

        {/* commute support */}
        <div className="my-5">
          <h5 className="text-passengerRed font-black italic text-[1rem] tracking-wider text-center lg:text-left">
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
          <h5 className="text-passengerRed font-black italic text-[1rem] tracking-wider text-center lg:text-left">
            YOUTH SUPPORT
          </h5>
          <p className="text-passengerBlack font-medium mt-1 text-[0.85rem] lg:text-left">
            This program will be based on genius at its core, as a guide for the
            next generation through a specific set of artistic explorations
            designed to instill self-confidence in their work and bring forward
            their creativity and critical thinking.
          </p>
        </div>

        {/* voice support */}
        <div className="my-5">
          <h5 className="text-passengerRed font-black italic text-[1rem] tracking-wider text-center lg:text-left">
            VOICE SUPPORT
          </h5>
          <p className="text-passengerBlack font-medium mt-1 text-[0.85rem] lg:text-left">
            Creating a platform where people can share their stories and
            experiences without censorship
          </p>
        </div>
      </div>
    </section>
  );
}
