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
    <section className="relative mt-20 lg:px-28">
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
      <div className="w-full grid xl:grid-cols-2 md:grid-cols-2 gap-10 mt-14">
        {BENEFITS.map((benefit, index) => (
          <div key={index} className="p-10 bg-passengerBox">
            <h5 className="text-passengerRed font-black text-[1rem] tracking-wider italic">
              {benefit.title}
            </h5>

            <p className="mt-5 text-passengerWhite font-normal text-[0.85rem]">
              {benefit.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="my-20 flex flex-row justify-between gap-20">
        {/* Clubhouse Store */}
        <div>
          <h5 className="text-passengerRed font-black text-[2rem] tracking-wider text-center lg:text-left italic">
            THE CLUBHOUSE STORE
          </h5>

          <p className="mt-5 text-passengerWhite font-normal text-center lg:text-left text-[0.85rem]">
            Nightlife in the clubhouse is so much fun once you blend in. Members
            have the ability to unlock the clubhouse store to gain access to the
            Creme de la Creme, Clubhouse deluxe merchandise includes apparel and
            other goodies such as:
          </p>
        </div>

        {/* Clubhouse Store Children */}
        <div>
          {/* id rings */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-10 mb-10">
            <div className="flex lg:justify-start">
              <Image
                src={"/clubHouse/ClubHouse_Ring.svg"}
                alt={"ClubHouse Mask"}
                width={200}
                height={200}
                priority
              />
            </div>

            <div className="">
              <h5 className="italic text-passengerRed font-black text-center lg:text-left text=[1rem]">
                ID RINGS
              </h5>
              <p className="mt-5 text-passengerWhite font-normal text-center lg:text-left text-[0.85rem]">
                nightlife in the clubhouse is so much fun once you blend in.
                Members have the ability to unlock the clubhouse store to gain
                access to the Creme de la Creme, Clubhouse deluxe merchandise
                includes apparel and other goodies such as:
              </p>
            </div>
          </div>

          {/* hidden mask */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-10 mb-10">
            <div className="flex lg:justify-start">
              <Image
                src={"/clubHouse/ClubHouse_Mask.svg"}
                alt={"ClubHouse Mask"}
                width={75}
                height={75}
                priority
              />
            </div>

            <div className="">
              <h5 className="italic text-passengerRed font-black text-[1rem] text-center lg:text-left">
                HIDDEN MASK
              </h5>
              <p className="mt-5 text-passengerWhite font-normal text-center lg:text-left text-[0.85rem]">
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
