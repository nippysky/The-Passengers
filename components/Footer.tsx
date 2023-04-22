import Image from "next/image";
import React from "react";
import { FaTwitter, FaDiscord } from "react-icons/fa";
import Link from "next/link";
import { AiFillInstagram } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";

const SOCIALICONS = [
  {
    icon: <AiFillInstagram size={15} />,
    link: "https://instagram.com/passengersclub?igshid=ZDg1NjBiNjg=",
  },

  {
    icon: <FaTwitter size={15} />,
    link: "https://twitter.com/passengersclub?s=11&t=GMSkr6o9VVKVN3fnTwZqgw",
  },

  {
    icon: <FaDiscord size={15} />,
    link: "",
  },

  {
    icon: <BsYoutube size={15} />,
    link: "https://www.youtube.com/channel/UCwOlVDRtAZEJ1nYsCdf0gdQ",
  },
];

export default function Footer() {
  return (
    <footer className="flex flex-col lg:flex-row justify-between items-center lg:px-10 px-5 pt-1 w-full bg-cover">
      <div className="lg:w-[80%] w-full flex justify-center lg:justify-start">
        <Image
          src={"/welcomePage/ClubFooter.png"}
          alt={"Footer Logo"}
          width={300}
          height={300}
          priority
        />
      </div>

      <div className="lg:w-[20%] w-full flex lg:justify-end justify-center my-5 lg:mt-0">
        <div>
          {/* Social Icons */}
          <div className="flex lg:justify-end justify-center items-center">
            {SOCIALICONS.map((link, index) => (
              <Link key={index} href={link.link}>
                <div className="text-passengerWhite hover:text-passengerRed ml-7">
                  {link.icon}
                </div>
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-passengerWhite my-5 lg:text-right text-center text-[0.65rem]">
            ©️ 4COLOREDRINGS LABS LTD
          </p>

          {/* Terms And Conditions */}
          <Link href={"/terms-and-conditions"}>
            <p className="text-passengerRed underline font-semibold tracking-wider lg:text-right text-center text-[0.65rem]">
              Terms And Conditions
            </p>
          </Link>
        </div>
      </div>
    </footer>
  );
}
