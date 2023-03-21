import React from "react";
import NavHeader from "../NavHeader";

export default function WelcomeHero() {
  return (
    <section
      className="flex flex-col justify-between lg:px-10 px-5 pt-1 w-full h-screen bg-cover"
      style={{
        backgroundImage: "url('/welcomePage/Welcome_CoverImage.svg')",
      }}
    >
      <NavHeader />

      {/* Hero Content */}
      <div className="justify-center items-center mb-40 text-center lg:px-60 px-5">
        <h1 className="font-bold text-passengerRed lg:text-[2.5rem] text-[2rem] text-center">
          WELCOME ONBOARD
        </h1>

        <p className="text-passengerWhite text-center my-5 text-[1.1rem] font-normal">
          Experience the journey of a ridden ecosystem from its Adam. The train
          is what you make of it; however, the true journey begins when the
          eighth passenger awakes.
        </p>

        <div className="text-passengerRed bg-passengerWhite lg:mx-80 mt-10 rounded-lg py-2 cursor-pointer font-semibold">
          Connect
        </div>
      </div>
    </section>
  );
}