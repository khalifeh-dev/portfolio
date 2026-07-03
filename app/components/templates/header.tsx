"use client";

import { useTheme } from "@/app/hooks/useTheme";
import Image from "next/image";
import { AiOutlineHome } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { HiLanguage } from "react-icons/hi2";
import { IoCodeSlashOutline } from "react-icons/io5";
import { LuMoon, LuUserRound } from "react-icons/lu";
import { MdOutlineWbSunny } from "react-icons/md";
import { PiProjectorScreenChartLight } from "react-icons/pi";
import { FaGithub, FaInstagram, FaTelegram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="row-center w-full">
      <nav className="fixed left-3 col-center gap-y-3 w-14 h-dvh p-1 *:w-full *:rounded-md z-40">
        <ul className="bg-background-box rounded-md">
          <li className="row-center w-full h-10 *:size-7 *:cursor-pointer">
            {theme === "dark" ? (
              <MdOutlineWbSunny onClick={() => setTheme("light")} />
            ) : (
              <LuMoon onClick={() => setTheme("dark")} />
            )}
          </li>
          <li className="relative row-center w-full h-10 group">
            <HiLanguage className="size-7 cursor-pointer" />
            <ul className="absolute top-0 left-14 w-25 h-fit rounded bg-background-box py-1.5 px-1 invisible opacity-0 translate-y-2 transition-all duration-300 ease-in group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible">
              <li className="flex justify-between items-center w-full h-7 px-2 cursor-pointer text-sm">
                <span>English</span>
                <Image
                  className="w-6 h-3.5 rounded object-cover"
                  src="/pictures/american.png"
                  alt="American Flag"
                  width={24}
                  height={14}
                />
              </li>

              <li className="flex justify-between items-center w-full h-7 px-2 cursor-pointer text-sm">
                <span>Persian</span>
                <Image
                  className="w-6 h-3.5 rounded object-cover"
                  src="/pictures/iran.png"
                  alt="American Flag"
                  width={24}
                  height={14}
                />
              </li>

              <li className="flex justify-between items-center w-full h-7 px-2 cursor-pointer text-sm">
                <span>China</span>
                <Image
                  className="w-6 h-3.5 rounded object-cover"
                  src="/pictures/china.png"
                  alt="American Flag"
                  width={24}
                  height={14}
                />
              </li>

              <li className="flex justify-between items-center w-full h-7 px-2 cursor-pointer text-sm">
                <span>Russian</span>
                <Image
                  className="w-6 h-3.5 rounded object-cover"
                  src="/pictures/russian.png"
                  alt="American Flag"
                  width={24}
                  height={14}
                />
              </li>
            </ul>
          </li>
        </ul>

        <ul className="flex flex-col justify-between items-center h-80 bg-background-box py-3 *:w-full *:h-10">
          <li className="relative row-center group">
            <AiOutlineHome className="size-7 cursor-pointer" />
            <span className="absolute top-2 left-14 row-center w-24 h-8 rounded bg-background-box p-1 invisible opacity-0 translate-y-2 transition-all duration-300 ease-in group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible">
              Home
            </span>
          </li>
          <li className="relative row-center group">
            <LuUserRound className="size-7 cursor-pointer" />
            <span className="absolute top-2 left-14 row-center w-24 h-8 rounded bg-background-box p-1 invisible opacity-0 translate-y-2 transition-all duration-300 ease-in group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible">
              About Me
            </span>
          </li>
          <li className="relative row-center group">
            <PiProjectorScreenChartLight className="size-7 cursor-pointer" />
            <span className="absolute top-2 left-14 row-center w-24 h-8 rounded bg-background-box p-1 invisible opacity-0 translate-y-2 transition-all duration-300 ease-in group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible">
              Projects
            </span>
          </li>
          <li className="relative row-center group">
            <IoCodeSlashOutline className="size-7 cursor-pointer" />
            <span className="absolute top-2 left-14 row-center w-24 h-8 rounded bg-background-box p-1 invisible opacity-0 translate-y-2 transition-all duration-300 ease-in group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible">
              Skills
            </span>
          </li>
          <li className="relative row-center group">
            <BsTelephone className="size-7 cursor-pointer" />
            <span className="absolute top-2 left-14 row-center w-24 h-8 rounded bg-background-box p-1 invisible opacity-0 translate-y-2 transition-all duration-300 ease-in group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible">
              Contact Me
            </span>
          </li>
        </ul>
      </nav>

      <section className="flex items-center gap-x-5 w-full h-140 *:w-1/2 *:h-120">
        <div className="col-center">
          <div className="flex flex-col gap-y-2">
            <h1 className="text-4xl">
              Hi, I'm <strong className="text-primary">AmirMohammad</strong>
            </h1>
            <h2 className="text-3xl">
              I'm <strong className="text-primary">full stack</strong> developer
            </h2>
            <p className="max-w-90">
              I love building things, and I immediately turn whatever is in my
              mind into code.
            </p>
            <p className="max-w-90 text-secondary">
              If it's hard, it's worth doing. Every challenge makes me stronger.
            </p>

            <div className="relative w-32">
              <button className="relative row-center w-full h-10 rounded-md border border-primary cursor-pointer mt-5 text-primary overflow-hidden initial-before before:-bottom-5 before:w-20 before:h-10 before:rounded-full before:bg-primary before:blur-2xl">
                My Resume
              </button>

              <span className="absolute bottom-2 -right-4 size-2 rounded-full bg-primary"></span>
              <span className="absolute bottom-5 -right-7 size-3 rounded-full bg-primary"></span>
            </div>

            <div className="flex gap-x-3 mt-3">
              <Link href={""} className="row-center size-8">
                <FaLinkedin className="size-7.5 transition-colors duration-300 ease-out hover:text-blue-600" />
              </Link>

              <Link href={""} className="row-center size-8">
                <FaGithub className="size-7.5 transition-colors duration-300 ease-out hover:text-secondary" />
              </Link>

              <Link href={""} className="row-center size-8">
                <FaInstagram className="size-7.5 transition-colors duration-300 ease-out hover:text-pink-500" />
              </Link>

              <Link href={""} className="row-center size-8">
                <FaTelegram className="size-7.5 transition-colors duration-300 ease-out hover:text-blue-400" />
              </Link>
            </div>
          </div>
        </div>
        <div className="row-center">
          <div
            style={{ borderRadius: "58% 42% 58% 42% / 30% 61% 39% 70% " }}
            className="relative size-110 bg-background shadow-[0_0_8px_rgba(0,0,0,0.8)] overflow-hidden"
          >
            {/* <Image className="size-full" src={"/pictures/profile.webp"} alt="AmirMohammad" width={500} height={500} /> */}
          </div>
        </div>
      </section>

      <div className="fixed top-8 right-8 row-center size-8 rounded-xl bg-primary cursor-pointer shadow-[0_0_12px_rgba(0,0,0,0.5)] transition-all duration-300 ease-out hover:w-40 hover:h-30 hover:rounded-md group">
        <div className="size-7.5 rounded-xl bg-background transition-all duration-300 ease-out group-hover:w-39.5 group-hover:h-29.5 group-hover:rounded-md"></div>
      </div>
    </header>
  );
};

export default Header;
