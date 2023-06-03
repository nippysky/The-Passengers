import Image from "next/image";
import React from "react";

const TEAM = [
  {
    name: "Niten Musashi",
    desc: "“Perceive that which cannot be seen with the eye. Only those who have accepted limitations, simply come to the conclusion of it is impossible. However, those that do not , transcend. For many things we see today, where thought of as impossible and just mere imaginations.”",
  },

  {
    name: "Charles Funas",
    desc: "“Not everyone has the ambition to act on what they envision, so I call out to You, You with the same vision as me and the will to act. Hop in with us and become a passenger on this journey to assemble the largest network of geniuses”",
  },

  {
    name: "NIPPY The Creator",
    desc: `“When you focus too much on the outcome, you forget the steps taken to achieve it. You stand at the precipice of greatness not even a mighty warrior can break a frail arrow when it is multiplied and supported by its fellows”`,
  },

  {
    name: "Hartdegen",
    desc: `“Humans will only find logic in what they agree with. Limitation keeps a human from what they can know and from the arts he/she possesses; it becomes a curtain or barrier to what they can achieve. It is time to transcend“`,
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
              src={"/clubHouse/Clubhouse_Team.jpg"}
              alt={"Team Members"}
              width={300}
              height={300}
              priority
              unoptimized
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
