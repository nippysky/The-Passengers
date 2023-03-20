import Image from "next/image";
import React from "react";

export default function Prologue() {
  return (
    <section className="w-full">
      <h1 className="font-bold text-passengerRed lg:text-[2.5rem] text-[2rem] text-center lg:text-left mt-5">
        PROLOGUE
      </h1>

      <p className="text-passengerWhite font-normal mt-5 text-center lg:text-left">
        whispers of a mysterious mansion on an island not far from time. It was
        said the mansion held many events. Rumours of games held in the mansion
        and tales of those returning from the games with a sort of obsession for
        crowns. It is said that the only way to find the mansion is by
        invitation. Over the years, many have claimed to have received this
        invitation—some to have seen the mansion, others swearing to have
        participated in the games.
      </p>

      <p className="text-passengerWhite font-normal mt-5 text-center lg:text-left">
        Now, once again, rumours are surfacing; people are claiming to have
        received this invitation. I know what you are thinking—that this is a
        made-up story, which means you believe the invitations to be pranks. So
        I ask you this: Is what you believe always true? , if it was, then facts
        wouldn't be.
      </p>

      {/* Image | 30th January */}
      <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-10 mt-20">
        <div className="lg:w-1/2 w-full">
          <Image
            src={"/island/IslandCage.svg"}
            alt={"Island Cage"}
            width={450}
            height={450}
            priority
          />
        </div>

        <div className="lg:w-1/2 w-full">
          <h5 className="text-passengerYellow font-semibold text-[1.1rem] tracking-wider text-center lg:text-left">
            30TH JANUARY, 3073
          </h5>

          <p className="text-passengerWhite font-normal mt-5 text-center lg:text-left">
            DAMIAN POWER: It’s been over 17 years since we arrived on this
            cursed island after the invitation we received. Not that it matters
            now, of course. The only thing that matters is a way back home, and
            we may have found it when Amy stumbled upon the Trismegistus
            journal.
          </p>

          <p className="text-passengerWhite font-normal mt-5 text-center lg:text-left">
            Amy: For it is written, “Once all four rings are correctly placed on
            the symbols inscribed on the time machine, one is able to set the
            travel coordinates and say the words of time: "Night, Eco, Alpha,
            and Litch, guide me to the path I have chosen, past or future."  
          </p>

          <p className="text-passengerWhite font-normal mt-5 text-center lg:text-left">
            The Mansion is the heart of the island, Once every nine years, the
            mansion teleports to the center of the island and becomes visible
            for a while.  We now know when and where, the words of Time. All
            that remains is for the mansion to appear, and we can finally return
            home. But I can’t seem to shake the feeling that we are not alone on
            this island.
            <span className="text-passengerYellow"> To be continued...</span>
          </p>
        </div>
      </div>

      {/* Island Map */}
      <div className="mt-14">
        <h5 className="text-passengerYellow font-semibold text-[1.1rem] tracking-wider text-center lg:text-left">
          THE ISLAND MAP
        </h5>
        <p className="text-passengerWhite font-normal mt-5 text-center lg:text-left">
          When the 8th passengers awakes the island map will guide the way.
        </p>

        {/* Map Image */}
        <div className="w-full mt-5 mb-3">
          <Image
            className=" rounded-2xl"
            src={"/island/IslandMap.svg"}
            alt={"The island Cover"}
            width={2500}
            height={200}
            priority
          />
        </div>
        <p className="text-passengerWhite font-normal text-center lg:text-left">
          The map contains phase II...
        </p>
      </div>
    </section>
  );
}
