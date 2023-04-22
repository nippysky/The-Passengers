import React from "react";
import Image from "next/image";
import WithMask from "../../public/clubhouse/Clubhouse_Team.jpg";
import WithoutMask from "../../public/clubHouse/Passenger_Smile.jpg";

const SLOTS = [
  {
    icon: WithMask,
    chinese: "一",
    desc: "Mansion Head; I am the ruler of the mansion, and I will appoint a member to a ridiculous position",
  },

  {
    icon: WithoutMask,
    chinese: "二",
    desc: "House Whale; I posses the most PSC collectables",
  },

  {
    icon: WithMask,
    chinese: "三",
    desc: "House Elder; It's not that if you become an Elder everyone will acknowledge you. It is the ones who are acknowledged that can become Elder",
  },

  {
    icon: WithoutMask,
    chinese: "四",
    desc: "House Alchemist; My mind is a powerful tool. I have transcended",
  },

  {
    icon: WithMask,
    chinese: "五",
    desc: "House Clown; I have been appointed the mansion entertainer by the mansion head",
  },

  {
    icon: WithoutMask,
    chinese: "六",
    desc: "House Ace; I was the first to obtain passengers with different rings (all four rings)through the island pathway",
  },

  {
    icon: WithMask,
    chinese: "七",
    desc: "House Rat; Aka the house collector, I was the first to obtain passengers with different rings (all four rings). by any means",
  },

  {
    icon: WithoutMask,
    chinese: "八",
    desc: "Puzzle Master; I am here because i have to be, whats your excuse",
  },
];

export default function PrestigeSlots() {
  return (
    <section className=" py-10 border-t border-passengerWhite">
      {/* Render Slots */}
      <div className="w-full grid xl:grid-cols-4 md:grid-cols-2 gap-20 my-14">
        {SLOTS.map((slot, index) => (
          <div
            key={index}
            className="flex flex-col items-center lg:items-start"
          >
            <Image
              src={slot.icon}
              alt={slot.chinese}
              width={300}
              height={300}
              priority
            />

            <div className="mt-5 text-center lg:text-left px-14 lg:px-0">
              <p className="text-passengerWhite text-[1.5rem] font-semibold">
                P <span className="text-passengerRed">{slot.chinese}</span>
              </p>

              <p className="text-passengerYellow ">{slot.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
