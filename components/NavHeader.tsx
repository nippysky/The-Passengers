import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { useRouter } from "next/router";
import { FiInstagram } from "react-icons/fi";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { SiOpensea } from "react-icons/si";

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

export default function NavHeader() {
  const { asPath } = useRouter();
  const [mobile, setMobile] = useState(false);

  return (
    <header className="w-full flex flex-row justify-between items-center">
      {/* Logo */}
      <div className="w-[70%] flex justify-start">
        <Link href={"/"}>
          <Image
            src={"/brand/Passengers_Logo.svg"}
            alt={"Passengers Logo"}
            width={250}
            height={50}
            priority
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

      {/* Menu Links */}

      {/* Social Icons */}
      <div className="flex lg:justify-end justify-center items-center">
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
        <section className="w-[50%] h-screen fixed top-0 right-0 bg-passengerDarkRed pt-5 px-5 z-50 duration-500">
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
