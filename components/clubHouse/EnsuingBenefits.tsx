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
    <section className="relative mt-20">
      {/* Title */}
      <div className=" lg:items-end items-center">
        <h1 className="font-bold text-passengerRed lg:text-[2.5rem] text-[2rem] text-center lg:text-right">
          ENSUING BENEFITS
        </h1>

        <p className="text-passengerWhite font-normal mt-5 text-center lg:text-right italic">
          Most benefits are trigged by clubhouse road map activition
        </p>
      </div>

      {/* Grid Layout */}
      <div className="w-full grid xl:grid-cols-2 md:grid-cols-2 gap-10 mt-14">
        {BENEFITS.map((benefit, index) => (
          <div key={index} className="p-10 bg-passengerBox rounded-xl">
            <h5 className="text-passengerYellow font-semibold text-[1.1rem] tracking-wider">
              {benefit.title}
            </h5>

            <p className="mt-5 text-passengerWhite font-normal text-[0.9rem]">
              {benefit.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Clubhouse Store */}
      <div className="my-20">
        <h5 className="text-passengerYellow font-semibold text-[1.1rem] tracking-wider text-center lg:text-left">
          THE CLUBHOUSE STORE
        </h5>

        <p className="mt-5 text-passengerWhite font-normal text-center lg:text-left">
          Nightlife in the clubhouse is so much fun once you blend in. Members
          have the ability to unlock the clubhouse store to gain access to the
          Creme de la Creme, Clubhouse deluxe merchandise includes apparel and
          other goodies such as:
        </p>
      </div>

      {/* Clubhouse Store Children */}
      <div className="mt-10">
        {/* id rings */}
        <div className="flex flex-col lg:flex-row lg:justify-between items-center justify-center gap-10 mb-10">
          <div className="lg:w-[35%] w-full flex justify-center lg:justify-start">
            <Image
              src={"/clubHouse/ClubHouse_Ring.svg"}
              alt={"ClubHouse Mask"}
              width={200}
              height={200}
              priority
            />
          </div>

          <div className="lg:w-[65%] w-full">
            <h5 className="italic text-passengerRed font-semibold text-center lg:text-left">
              ID RINGS
            </h5>
            <p className="mt-5 text-passengerWhite font-normal text-center lg:text-left">
              nightlife in the clubhouse is so much fun once you blend in.
              Members have the ability to unlock the clubhouse store to gain
              access to the Creme de la Creme, Clubhouse deluxe merchandise
              includes apparel and other goodies such as:
            </p>
          </div>
        </div>

        {/* hidden mask */}
        <div className="flex flex-col lg:flex-row  lg:justify-between items-center justify-center gap-10 mb-10">
          <div className="lg:w-[35%] w-full flex justify-center lg:justify-start">
            <Image
              src={"/clubHouse/ClubHouse_Mask.svg"}
              alt={"ClubHouse Mask"}
              width={200}
              height={200}
              priority
            />
          </div>

          <div className="lg:w-[65%] w-full">
            <h5 className="italic text-passengerRed font-semibold text-center lg:text-left">
              HIDDEN MASK
            </h5>
            <p className="mt-5 text-passengerWhite font-normal text-center lg:text-left">
              Useable for passengers' club parties, and definitely nothing we
              wouldn't recommend
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
