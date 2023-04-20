import React from "react";
import Image from "next/image";

export default function TheUnderground() {
  return (
    <section className="w-full mt-5 mb-10 lg:px-28">
      <Image
        src={"/clubHouse/ClubHouse_UnderGround.svg"}
        alt={"ClubHouse UnderGround"}
        width={2500}
        height={200}
        priority
      />
    </section>
  );
}
