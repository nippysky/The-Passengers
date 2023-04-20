import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiFillInstagram, AiOutlineMenu } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { useRouter } from "next/router";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";

const MENULINKS = [
  {
    name: "Buy",
    path: "/welcome/#buy",
  },

  {
    name: "Road Map",
    path: "/welcome/#roadmap",
  },

  {
    name: "Prolougue",
    path: "/story-line",
  },

  {
    name: "Hall Of Fame",
    path: "/hall-of-fame",
  },

  {
    name: "Community",
    path: "/community",
  },

  {
    name: "Phase II",
    path: "/phase-II",
  },
];

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

export default function NavHeader() {
  const { asPath } = useRouter();
  const [mobile, setMobile] = useState(false);

  return (
    <header className="w-full flex flex-row justify-between items-center ">
      {/* Logo */}
      <div className="w-[80%] flex justify-start">
        <Link href={"/"}>
          <Image
            src={"/brand/Passengers_Logo.svg"}
            alt={"Passengers Logo"}
            width={250}
            height={50}
            priority
            unoptimized
          />
        </Link>

        <nav className="items-center hidden lg:flex px-5">
          {MENULINKS.map((link, index) => (
            <div
              key={index}
              className={`${
                asPath === link.path
                  ? "text-passengerRed"
                  : "text-passengerWhite"
              } mx-3 text-[0.55rem] uppercase italic font-medium tracking-wider`}
            >
              <Link scroll={false} href={link.path}>
                {link.name}
              </Link>
            </div>
          ))}
        </nav>
      </div>

      {/* Social Icons */}
      <div className="hidden  lg:flex lg:justify-end justify-center items-center">
        {SOCIALICONS.map((link, index) => (
          <Link key={index} href={link.link}>
            <div className="text-passengerWhite ml-10">{link.icon}</div>
          </Link>
        ))}
      </div>

      {/* Mobile Hambrger Icon */}
      <div
        className="text-passengerWhite inline-flex lg:hidden cursor-pointer"
        onClick={() => setMobile(true)}
      >
        <AiOutlineMenu size={25} />
      </div>

      {/* Mobile Menu Div */}
      {mobile && (
        <section className="w-full h-screen fixed top-0 right-0 bg-passengerBlack pt-5 px-5 z-50 duration-500">
          <div className="text-white flex justify-end ">
            <div className="cursor-pointer" onClick={() => setMobile(false)}>
              <IoClose size={30} />
            </div>
          </div>

          <nav className="flex flex-col gap-10 mt-10 text-white">
            {MENULINKS.map((link, index) => (
              <div
                key={index}
                className="text-passengerWhite text-[0.9rem] font-medium tracking-wider"
              >
                <Link href={link.path}>{link.name}</Link>
              </div>
            ))}
          </nav>
        </section>
      )}
    </header>
  );
}
