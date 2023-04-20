import Image from "next/image";
import React from "react";

const TEAM = [
  {
    name: "Temujin Khan",
    desc: "“impossible, only those who have accepted limitations, simply come to this conclusion. However, those that seek change or cry out for something different can never accept this reality! for many things we see today, men thought them to be impossible and just mere imaginations.”",
  },

  {
    name: "Charles Funas",
    desc: "“I call out to You, You with the same vision as me. Let us build a home for genius, a Passengers utopia in a new digital world but First things first, there would be some rules to establish and passengers for the journey to build from Adam.”",
  },

  {
    name: "NIPPY The Creator",
    desc: "“When you focus too much on the outcome, you forget the steps taken to achieve it”",
  },

  {
    name: "Hartdegen",
    desc: "“Humans will only find logic in what they agree with “",
  },
];

export default function TheTeam() {
  return (
    <section className="relative mt-20 lg:px-28 px-5">
      {/* Title */}
      <div className=" lg:items-end items-center">
        <h1 className="font-black text-passengerRed lg:text-[2rem] text-[1.5rem] italic">
          THE TEAM
        </h1>

        <p className="text-passengerWhite font-normal mt-5  italic text-[0.85rem]">
          Veras identitates nostras ostendemus cum Octavus vector evigilaverit
        </p>
      </div>

      {/* Render Team Members */}
      <div className="w-full grid xl:grid-cols-4 md:grid-cols-2 gap-20 my-14">
        {TEAM.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              src={"/clubHouse/ClubHouse_Team.svg"}
              alt={"Team Members"}
              width={300}
              height={300}
              priority
            />

            <div className="mt-5">
              <h5 className="text-passengerRed font-bold text-[0.85rem] uppercase tracking-wider text-center italic">
                {member.name}
              </h5>

              <p className="text-passengerWhite font-normal  text-[0.75rem] mt-2">
                {member.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
