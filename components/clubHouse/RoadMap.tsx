import React from "react";
import Image from "next/image";
import Ten from "../../public/clubHouse/10.png";
import Twenty from "../../public/clubHouse/20.png";
import Thirty from "../../public/clubHouse/30.png";
import Fourty from "../../public/clubHouse/40.png";
import Fifty from "../../public/clubHouse/50.png";
import Sixty from "../../public/clubHouse/60.png";
import Eighty from "../../public/clubHouse/80.png";
import Ninety from "../../public/clubHouse/90.png";
import Hundred from "../../public/clubHouse/100.png";

const ROADMAP = [
  {
    icon: Ten,
    desc: "We extend our reach",
  },

  {
    icon: Twenty,
    desc: "Behind the scenes work",
  },

  {
    icon: Thirty,
    desc: "10,000 passengers travel to the blockchain",
  },

  {
    icon: Fourty,
    desc: "The Invitation to the PSC Online Hangout",
  },

  {
    icon: Fifty,
    desc: "Free shipping fee of PSC deluxe merch within a particular country voted by the club",
  },

  {
    icon: Sixty,
    desc: "Members' Exclusive PSC House Store is unlocked, featuring Deluxe Sale goodies",
  },

  {
    icon: Eighty,
    desc: "The groundwork for the PassengersClub ecosystem begins with P.I.T.C",
  },

  {
    icon: Ninety,
    desc: "First Passenger who make sense of John-Little Trismegistus dying message receive his lost treasure. It is estimated to be worth $10,000",
  },

  {
    icon: Hundred,
    desc: "The eighth passenger awakes, and the island map becomes our guide",
  },
];

export default function RoadMap() {
  return (
    <section id="roadmap" className="lg:px-28 px-5">
      <div className="mt-1 lg:mt-20">
        <h1 className="font-black text-passengerRed lg:text-[2rem] text-[1.5rem] italic">
          CLUB HOUSE ROAD MAP ACTIVATION
        </h1>

        <p className="text-passengerWhite font-normal mt-5 italic text-[0.85rem] lg:mt-1">
          The light of transparency, at a certain sale percentage we will cross
          out the tasks as we achieve them together.
        </p>
      </div>

      {/* Render Road map */}
      <section className="w-full flex flex-col lg:flex-row justify-between items-start mt-10">
        {/* map list */}
        <div className="lg:w-[60%] w-full">
          {ROADMAP.map((map, index) => (
            <div key={index} className="flex gap-10 items-center">
              <Image
                src={map.icon}
                alt={map.desc}
                width={80}
                height={80}
                priority
              />

              <div>
                <p className="text-passengerWhite text-[0.85rem] leading-7">
                  {map.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* map image */}
        <div className="lg:w-[40%] w-full flex lg:justify-end justify-center">
          <Image
            src={"/clubHouse/RoadMapSwag.png"}
            alt={"ClubHouse Passengers"}
            width={400}
            height={300}
            priority
            unoptimized
          />
        </div>
      </section>
    </section>
  );
}
