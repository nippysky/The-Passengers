import React from "react";
import styles from "../../styles/Passenger.module.css";

export default function WelcomeHero() {
  return (
    <section className="flex flex-col lg:flex-row justify-between gap-10 lg:px-20 px-5 pt-1 w-full bg-cover">
      <div className="w-full lg:w-[40%] flex flex-col justify-between ">
        <h5 className="text-passengerWhite text-[0.85rem] mt-10">
          Genius Is Rare
        </h5>

        <div>
          <h1 className="font-black text-passengerRed lg:text-[2rem] text-[1.5rem] mt-10 lg:mt-0">
            WELCOME TO THE PASSENGERS CLUB
          </h1>

          <p className="text-passengerWhite  my-5 font-normal text-[0.85rem]">
            The train is what you make of it, however, the true journey begins
            when the eighth passenger awakes. Everyone gets into a train heading
            to different destinations, but for a brief moment on board, no
            matter how brief, they all share a common name, "Passengers," and a
            journey experience.
          </p>

          <div>
            <p className="text-passengerWhite font-normal mt-5 text-[0.85rem]">
              As passengers in this world, it is time to begin a journey to
              creating the largest decentralized network of geniuses known as
              the Passengers Club. where the goal is the Renaissance of genius
              in an ecosystem while fostering genius and impacting society
              through Passengers in the Community (P.T.I.C.) and advancing
              collectively while still enjoying membership benefits, flex,
              privacy, and other goodies.
            </p>
          </div>
        </div>

        {/* <div /> */}
      </div>

      <div className={styles.imageContainer}>
        <img
          src="/clubHouse/ClubHouse_Underground.jpg"
          className={styles.image}
          loading="lazy"
        />

        <div>
          <h5 className="text-passengerRed font-black text-[1rem] tracking-wider  italic">
            THE UNDERGROUND
          </h5>

          <p className="mt-2 text-passengerWhite font-normal  text-[0.85rem]">
            Granted access to the clubhouse basement, home to cash whales. The
            word on the street is "Whatever goes on in the underground stays
            underground".
          </p>
        </div>
      </div>
    </section>
  );
}
