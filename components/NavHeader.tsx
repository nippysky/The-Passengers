import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { useRouter } from "next/router";

const MENULINKS = [
  {
    name: "Buy",
    path: "/welcome/#buy",
  },

  {
    name: "Club House",
    path: "/club-house",
  },

  {
    name: "The Island",
    path: "/the-island",
  },

  {
    name: "Hall Of Fame",
    path: "/hall-of-fame",
  },

  {
    name: "Community",
    path: "/community",
  },
];

export default function NavHeader() {
  const { asPath } = useRouter();
  const [mobile, setMobile] = useState(false);

  return (
    <header className="w-full flex flex-row justify-between items-center">
      {/* Logo */}
      <div className="w-[30%] flex justify-start">
        <Link href={"/"}>
          <Image
            src={"/brand/Passengers_Logo.svg"}
            alt={"Passengers Logo"}
            width={200}
            height={50}
            priority
          />
        </Link>
      </div>

      {/* Menu Links */}
      <nav className="w-[70%] justify-end items-center hidden lg:flex">
        {MENULINKS.map((link) => (
          <div
            className={`${
              asPath === link.path ? "text-passengerRed" : "text-passengerWhite"
            } mx-3 text-[0.9rem] font-medium tracking-wider`}
          >
            <Link scroll={false} href={link.path}>
              {link.name}
            </Link>
          </div>
        ))}
      </nav>

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
            {MENULINKS.map((link) => (
              <div className="text-passengerWhite text-[0.9rem] font-medium tracking-wider">
                <Link href={link.path}>{link.name}</Link>
              </div>
            ))}
          </nav>
        </section>
      )}
    </header>
  );
}
