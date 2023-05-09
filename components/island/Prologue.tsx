import Image from "next/image";
import React from "react";

export default function Prologue() {
  return (
    <section className="w-full">
      <h1 className="font-black text-passengerRed lg:text-[2rem] mt-5">
        PROLOGUE
      </h1>

      <p className="text-passengerWhite font-normal mt-5 text-[0.85rem]">
        Whispers of a mysterious mansion on an island not far from time. It was
        said the mansion held many events. Rumours of games held in the mansion
        and tales of those returning from the games with a sort of obsession for
        crowns. It is said that the only way to find the mansion is by
        invitation. Over the years, many have claimed to have received this
        invitation, some to have seen the mansion, others swearing to have
        participated in the games.
      </p>

      <p className="text-passengerWhite font-normal mt-5 text-[0.85rem] text-left">
        Now, once again, rumours are surfacing; people are claiming to have
        received this invitation. I know what you are thinking that this is a
        madeup story, which means you believe the invitations to be pranks. So I
        ask you this: Is what you believe always true? , if it was, then facts
        wouldn't be. Very few have traveled beyond and through time.
      </p>

      {/* Image | 30th January */}
      <div className="w-full flex flex-col lg:flex-row justify-between gap-10 mt-20">
        <div className="lg:w-1/2 w-full flex flex-row justify-center lg:justify-start">
          <Image
            src={"/island/IslandCage.svg"}
            alt={"Island Cage"}
            width={300}
            height={300}
            priority
          />
        </div>

        <div className="lg:w-1/2 w-full">
          <h5 className="text-passengerRed font-semibold text-[1.1rem] tracking-wider text-center lg:text-left">
            30TH JANUARY, 3073
          </h5>

          <p className="text-passengerWhite font-normal mt-5 text-[0.85rem]">
            It’s been over 17 years since we arrived on this cursed island after
            the invitation we received. Not that it matters now, of course. The
            only thing that matters is a way back home, and we may have found it
            when Amy stumbled upon the Trismegistus journal.
            <span className="text-passengerRed"> {`:DAMIAN POWER`}</span>
          </p>

          <p className="text-passengerWhite font-normal mt-5 text-[0.85rem]">
            For it is written, “Once all four rings are correctly placed on the
            symbols inscribed on the time machine, one is able to set the travel
            coordinates and say the words of time: "Night, Eco, Alpha, and
            Litch, guide me to the path I have chosen, past or future."
            <span className="text-passengerRed">{`:AMY LIGHTHOUSE`}</span>
          </p>

          <p className="text-passengerWhite font-normal mt-5 text-[0.85rem]">
            The Mansion is the heart of the island, Once every nine years, the
            mansion teleports to the center of the island and becomes visible
            for a while.  We now know when and where, the words of Time. All
            that remains is for the mansion to appear, and we can finally return
            home. But I can’t seem to shake the feeling that we are not alone on
            this island.
            <span className="text-passengerRed"> To be continued...</span>
          </p>
        </div>
      </div>
    </section>
  );
}
