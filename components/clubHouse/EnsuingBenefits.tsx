import Image from "next/image";
import React from "react";

const BENEFITS = [
  {
    title: "RING PAYMENT",
    desc: "Using this payment, members can get discounts on clubhouse hype sales and experience a nightlife in the train city. It's buzzing to see how we take this to the next level over the long haul.",
  },

  {
    title: "VIP TREATMENT",
    desc: "Early access for other PSC-ticketed events such as the Ridden Fest. Plus, members receive advance notice for events before admission goes on sale, exclusive to Double Membership.",
  },

  {
    title: "THE RING COUNCIL",
    desc: "Ability to claim a seat on the ring council, where matters are discussed and decisions are made for the betterment of the passengers' ecosystem.",
  },

  {
    title: "THE PSC HALL OF FAME",
    desc: "Possibility of your alternative self getting indicted into the Hall of Fame or is given a ridiculous position, the Hall of Fame may also help your chances of claiming a seat in the Ring Council. We hope for healthy competition among members, which is normal in a successful environment.",
  },
];

export default function EnsuingBenefits() {
  return (
    <section className="relative mt-10 lg:px-28">
      {/* Title */}
      <div className=" lg:items-end items-center">
        <h1 className="font-black text-passengerRed lg:text-[2.5rem] text-[2rem] text-center lg:text-right italic">
          ENSUING BENEFITS
        </h1>

        <p className="text-passengerWhite font-normal mt-5 text-center lg:text-right italic text-[0.85rem]">
          Most benefits are trigged by clubhouse road map activition
        </p>
      </div>

      {/* Grid Layout */}
      <div className="w-full grid xl:grid-cols-2 md:grid-cols-2 gap-2 mt-5">
        {BENEFITS.map((benefit, index) => (
          <div key={index} className="py-5 lg:py-10 px-10 bg-passengerBox">
            <h5 className="text-passengerRed font-black text-[1rem] tracking-wider italic">
              {benefit.title}
            </h5>

            <p className="mt-5 text-passengerWhite font-normal text-[0.85rem]">
              {benefit.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="">
        {/* Clubhouse Store */}
        <div className="p-10 bg-passengerBox lg:p-0 lg:bg-black lg:px-10">
          <h5 className="text-passengerRed font-black lg:text-[2rem] text-[1.5rem] tracking-wider  italic ">
            THE CLUBHOUSE STORE
          </h5>

          {/* Note */}
          <p className=" text-passengerRed font-normal  text-[0.75rem] mb-5">
            Note: the clubhouse store merchandise is the only passengers’ merch
            with passengers club packaging
          </p>

          <p className="mt-5 text-passengerWhite font-normal  text-[0.85rem]">
            Nightlife in the clubhouse is so much fun once you blend in. Members
            have the ability to unlock the clubhouse store to gain access to the
            Creme de la Creme, Clubhouse deluxe merchandise includes apparel and
            other goodies such as:
          </p>
        </div>

        {/* Clubstore Children */}
        <div className="flex flex-col lg:flex-row w-full px-10 mt-5 lg:mt-20 lg:gap-20">
          {/* id rings */}
          <div className="flex flex-row items-start gap-10 mb-10 lg:w-1/2 w-full">
            <div className="lg:flex hidden">
              <img
                src={"/clubHouse/ClubHouse_Ring.svg"}
                alt={"ClubHouse Ring"}
                className="w-[300px] "
              />
            </div>

            <div className="">
              <h5 className="italic text-passengerRed font-black text=[1rem]">
                ID RINGS
              </h5>
              <p className="mt-5 text-passengerWhite font-normal  text-[0.85rem]">
                Id rings are of 4 different colors: red, green, gold, and
                purple. All passengers wear a PSC ring, with the ring's
                placement determined by its symbol and not its color. In the
                future, the ring may serve as club members’ identification in
                the real world.
              </p>
            </div>
          </div>

          {/* hidden mask */}
          <div className="flex flex-row lg:justify-end lg:items-start gap-10 mb-10 lg:mt-0  lg:w-1/2 w-full">
            <div className="hidden lg:flex">
              <img
                src={"/clubHouse/ClubHouse_Mask.svg"}
                alt={"ClubHouse Mask"}
                className="w-[75px] h-[75px]"
              />
            </div>

            <div className="">
              <h5 className="italic text-passengerRed font-black text-[1rem] \">
                HIDDEN MASK
              </h5>
              <p className="mt-5 text-passengerWhite font-normal text-[0.85rem] ">
                Useable for passengers' club parties, and definitely nothing we
                wouldn't recommend
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
