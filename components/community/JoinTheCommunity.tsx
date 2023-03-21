import React from "react";
import { FiInstagram } from "react-icons/fi";
import { FaTwitter, FaDiscord, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const FOLLOWLINK = [
  {
    icon: <FaDiscord size={20} />,
    title: "Discord",
    desc: "Ask question and engage with other passengers",
    link: "",
  },

  {
    icon: <FaTwitter size={20} />,
    title: "Twitter",
    desc: "Follow the latest news from the passenger’s blog",
    link: "",
  },

  {
    icon: <FaYoutube size={20} />,
    title: "Youtube",
    desc: "Listen in on community shared experiences and journies",
    link: "",
  },

  {
    icon: <FiInstagram size={20} />,
    title: "Instagram",
    desc: "Keep in touch with our latest collection",
    link: "",
  },
];

export default function JoinTheCommunity() {
  return (
    <section className="relative mt-10 bg-passengerCommunityBG lg:px-10 px-5 py-2">
      <h1 className="font-bold text-passengerRed lg:text-[2.5rem] text-[2rem] text-center lg:text-left">
        JOIN THE COMMUNITY
      </h1>
      <p className="text-passengerBlack font-medium mt-3 text-center lg:text-left">
        Passengers Club believe in its community and drives its growth. Join the
        conversation on Discord and Twitter to stay up to date on the latest
        community news.
      </p>

      {/* Grid Follow Buttons */}
      <div className="w-full grid xl:grid-cols-4 md:grid-cols-2 gap-10 mt-14">
        {FOLLOWLINK.map((follow, index) => (
          <Link key={index} href={follow.link}>
            <div className="p-5 bg-passengerBoxGray hover:bg-passengerDarkRed hover:text-passengerWhite rounded-xl">
              <div className="flex gap-5">
                <div className="text-passengerRed hover:text-passengerYellow">
                  {follow.icon}
                </div>
                <p className="font-semibold">{follow.title}</p>
              </div>

              <p className="mt-5 text-[0.9rem] font-medium">{follow.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
