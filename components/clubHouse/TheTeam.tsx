import Image from "next/image";
import React from "react";

const TEAM = [
  {
    name: "Temujin Khan",
    desc: "“We want to build a world, ridden by its people. A perfect world  is an illusion, only those who have accepted limitations , simply comes to this conclusion. However, those that seek change or cry out for something different can never accept this reality!. for many things we see today, men thought them to be  impossible and just mere imaginations.”",
  },

  {
    name: "Charles Funas",
    desc: "“So I call out to You, You with the same vision as me.  Let us build this world, a “Transcended -Earth !“.Passengers utopia in a new digital world but First things first, there would be some rules to establish and passengers for the journey to building a transcended world from its Adam.”",
  },

  {
    name: "NIPPY The Creator",
    desc: "“When you focus too much on the outcome, you forget the steps taken to achieve”",
  },

  {
    name: "Hartdegen",
    desc: "“Humans will only find logic in what they agree with “",
  },
];

export default function TheTeam() {
  return (
    <section className="relative mt-20">
      {/* Title */}
      <div className=" lg:items-end items-center">
        <h1 className="font-bold text-passengerRed lg:text-[2.5rem] text-[2rem] text-center lg:text-right">
          THE TEAM
        </h1>

        <p className="text-passengerWhite font-normal mt-5 text-center lg:text-right italic">
          Veras identitates nostras ostendemus cum Octavus vector evigilaverit
        </p>
      </div>

      {/* Render Team Members */}
      <div className="w-full grid xl:grid-cols-4 md:grid-cols-2 gap-20 my-14">
        {TEAM.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              className="rounded-xl"
              src={"/clubHouse/ClubHouse_Team.svg"}
              alt={"Team Members"}
              width={300}
              height={300}
              priority
            />

            <div className="mt-5">
              <h5 className="text-passengerYellow font-semibold text-[1.1rem] tracking-wider text-center">
                {member.name}
              </h5>

              <p className="text-passengerWhite font-normal text-center text-[0.85rem]">
                {member.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
