import Image from "next/image";
import React from "react";

export default function JoinTheClub() {
  return (
    <section className="w-full min-h-screen px-5 lg:px-10 py-5">
      {/* Head Text */}
      <div className="text-center lg:text-justify">
        <p className="text-passengerWhite font-normal mt-5">
          Everyone gets into a train heading to different destinations, but for
          a brief moment on board, no matter how brief, they all share a common
          name, "passengers," and a journey experience.
        </p>

        <p className="text-passengerWhite font-normal mt-5">
          The Passengers Club serves as a commute for members anywhere in the
          world and as a gathering point for members interested in all
          disciplines of the arts, with the aim of promoting and supporting an
          enthusiasm for genius.
        </p>

        <p className="text-passengerWhite font-normal mt-5">
          We believe genius is rare, foster an appreciation for art and artistic
          growth through exhibitions, and provide opportunities to connect with
          other artists, collaborate, build, share, educate, and transcend.
          Genius is rare, Hop in, knowing who you are behind a mask.
        </p>
      </div>

      {/* JOIN THE CLUB */}
      <div className="mt-20">
        <h1 className="font-bold text-passengerRed lg:text-[2.5rem] text-[2rem] text-center lg:text-left">
          JOIN THE CLUB
        </h1>

        <div className="w-full flex flex-col lg:flex-row gap-20 mt-10 justify-between">
          <div className="lg:w-1/2 w-full flex lg:justify-start justify-center">
            <Image
              src={"/welcomePage/Welcome_Boss.svg"}
              alt={"Passenger Bossman"}
              width={400}
              height={500}
              priority
            />
          </div>

          <div className="lg:w-1/2 w-full text-center lg:text-left">
            <p className="text-passengerWhite font-normal mt-5">
              The club offers one way to membership with two paths, reality path
              and island path. We understand that not everyone is interested in
              the meta- verse or a digital world but still want to be part of an
              ecosystem. lifestyle is a fundamental aspects of the modern world.
              Yet, the objective is to advance members collectively.
            </p>

            <p className="text-passengerYellow italic font-normal mt-5">
              Note: You can choose one or both, but hurry! Hop in before the
              eighth passenger awakens.
            </p>

            <p className="text-passengerWhite font-normal mt-5">
              <span className="text-passengerYellow font-normal">
                Reality path:
              </span>{" "}
              when you buy a limited membership hoodie, you become a member with
              the ability to gain membership benefits but with some
              restrictions. Consider this a way to hop in with no interest in
              Web3 or the metaverse.
            </p>

            <p className="text-passengerWhite font-normal mt-5">
              <span className="text-passengerYellow font-normal">
                Island path:
              </span>{" "}
              When you buy a PSC limited passenger, you become a member with the
              ability to gain membership benefits, full rights and ownership
              over your passenger for commercial use, as well as the chance to
              experience the island state in the future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
