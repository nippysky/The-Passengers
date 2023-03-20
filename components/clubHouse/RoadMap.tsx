import React from "react";
import Image from "next/image";
import Ten from "../../public/clubHouse/10.svg";
import Twenty from "../../public/clubHouse/20.svg";
import Thirty from "../../public/clubHouse/30.svg";
import Fourty from "../../public/clubHouse/40.svg";
import Fifty from "../../public/clubHouse/50.svg";
import Sixty from "../../public/clubHouse/60.svg";
import Eighty from "../../public/clubHouse/80.svg";
import Ninety from "../../public/clubHouse/90.svg";
import Hundred from "../../public/clubHouse/100.svg";

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
    desc: "The groundwork for the Passenger Club ecosystem begins with P.I.T.C",
  },

  {
    icon: Ninety,
    desc: "First Passengers who make sense of John-Little Trismegistus dying message receive his lost treasure. It is estimated to be worth $10,000",
  },

  {
    icon: Hundred,
    desc: "The eighth passenger awakes, and the island map becomes our guide",
  },
];

export default function RoadMap() {
  return (
    <section>
      <div className="mt-20">
        <h1 className="font-bold text-passengerRed lg:text-[2.5rem] text-[2rem] text-center lg:text-left">
          CLUB HOUSE ROAD MAP ACTIVATION
        </h1>

        <p className="text-passengerWhite font-normal mt-1 text-center lg:text-left italic">
          The light of transparency, at a certain sale percentage we will cross
          out the tasks as we achieve them together.
        </p>
      </div>

      {/* Render Road map */}
      <section className="w-full flex flex-col-reverse lg:flex-row justify-between items-end mt-14">
        {/* map list */}
        <div className="lg:w-1/2 w-full">
          {ROADMAP.map((map, index) => (
            <div key={index} className="flex gap-10 items-center">
              <Image
                src={map.icon}
                alt={map.desc}
                width={100}
                height={100}
                priority
              />

              <div>
                <p className="text-passengerWhite leading-7">{map.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* map image */}
        <div className="lg:w-1/2 w-full flex lg:justify-end justify-center">
          <Image
            src={"/clubHouse/ClubHousePassengers.svg"}
            alt={"ClubHouse Passengers"}
            width={500}
            height={500}
            priority
          />
        </div>
      </section>
    </section>
  );
}
