import Image from "next/image";
import React from "react";
import { FiInstagram } from "react-icons/fi";
import { SiOpensea } from "react-icons/si";
import { FaTwitter, FaDiscord } from "react-icons/fa";
import Link from "next/link";

const SOCIALICONS = [
  {
    icon: <FiInstagram size={15} />,
    link: "",
  },

  {
    icon: <FaTwitter size={15} />,
    link: "",
  },

  {
    icon: <FaDiscord size={15} />,
    link: "",
  },

  {
    icon: <SiOpensea size={15} />,
    link: "",
  },
];

export default function Footer() {
  return (
    <footer className="relative mt-10 w-full flex flex-col lg:flex-row justify-between items-center border-t px-20 border-white">
      <div className="lg:w-[80%] w-full flex justify-center lg:justify-start">
        <Image
          src={"/brand/Passenger_FooterLogo.png"}
          alt={"Footer Logo"}
          width={200}
          height={200}
          priority
        />
      </div>

      <div className="lg:w-[20%] w-full flex lg:justify-end justify-center mt-10 lg:mt-0">
        <div>
          {/* Social Icons */}
          <div className="flex lg:justify-end justify-center items-center">
            {SOCIALICONS.map((link, index) => (
              <Link key={index} href={link.link}>
                <div className="text-passengerWhite mx-4">{link.icon}</div>
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-passengerWhite my-10 lg:text-right text-center text-[0.75rem]">
            ©️ 2022 4COLOREDRINGS LABS LTD
          </p>

          {/* Terms And Conditions */}
          <Link href={"/terms-and-conditions"}>
            <p className="text-passengerRed underline font-semibold tracking-wider lg:text-right text-center text-[0.75rem]">
              Terms And Conditions
            </p>
          </Link>
        </div>
      </div>
    </footer>
  );
}
