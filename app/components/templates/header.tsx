"use client"

import { useTheme } from "@/app/hooks/useTheme";
import Image from "next/image";
import { AiOutlineHome } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { HiLanguage } from "react-icons/hi2";
import { IoCodeSlashOutline } from "react-icons/io5";
import { LuMoon, LuUserRound } from "react-icons/lu";
import { MdOutlineWbSunny } from "react-icons/md";
import { PiProjectorScreenChartLight } from "react-icons/pi";



const Header = () => {

    const { theme, setTheme } = useTheme()

    return (

        <header className="w-full">

            <nav className="relative col-center gap-y-3 w-14 h-dvh p-1 *:w-full *:rounded-md">

                <ul className="bg-background-box rounded-md">

                    <li className="row-center w-full h-10 *:size-7 *:cursor-pointer">

                        {
                            theme === "dark" ? (
                            <MdOutlineWbSunny onClick={() => setTheme("light")} />
                            ) : (
                            <LuMoon onClick={() => setTheme("dark")} />
                            )
                        }

                    </li>
                    <li className="relative row-center w-full h-10 group">

                        <HiLanguage className="size-7 cursor-pointer" />
                        <ul className="absolute top-0 left-14 w-25 h-fit rounded bg-background-box py-1.5 px-1 invisible opacity-0 translate-y-2 transition-all duration-300 ease-in group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible">

                            <li className="flex justify-between items-center w-full h-7 px-2 cursor-pointer text-sm">

                                <span>English</span>
                                <Image className="w-6 h-3.5 rounded object-cover" src="/pictures/american.png" alt="American Flag" width={24} height={14} />

                            </li>

                            <li className="flex justify-between items-center w-full h-7 px-2 cursor-pointer text-sm">

                                <span>Persian</span>
                                <Image className="w-6 h-3.5 rounded object-cover" src="/pictures/iran.png" alt="American Flag" width={24} height={14} />

                            </li>

                            <li className="flex justify-between items-center w-full h-7 px-2 cursor-pointer text-sm">

                                <span>China</span>
                                <Image className="w-6 h-3.5 rounded object-cover" src="/pictures/china.png" alt="American Flag" width={24} height={14} />

                            </li>

                            <li className="flex justify-between items-center w-full h-7 px-2 cursor-pointer text-sm">

                                <span>Russian</span>
                                <Image className="w-6 h-3.5 rounded object-cover" src="/pictures/russian.png" alt="American Flag" width={24} height={14} />

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

        </header>
    
    )

}

export default Header;