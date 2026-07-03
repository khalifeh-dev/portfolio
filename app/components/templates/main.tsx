import { FaClover } from "react-icons/fa6";
import { FcCandleSticks } from "react-icons/fc";
import { IoInfinite } from "react-icons/io5";
import { SiDreamstime } from "react-icons/si";
import { TbArrowWaveRightDown } from "react-icons/tb";



const Main = () => {

    return (

        <main className="w-full col-center gap-y-15 px-14 py-2">
        
            <section className="relative row-center gap-x-5 w-full h-120">

                <span className="absolute top-0 flex justify-center items-start gap-x-2 w-full h-10">About Me <TbArrowWaveRightDown className="size-7 text-secondary" /></span>

                <div className="w-1/2 h-full bg-background">

                    <div className="row-center size-full">

                        <div className="relative w-80 h-90 rounded-md bg-background-box shadow-[0_0_8px_rgba(0,0,0,0.8)]">

                            <div className="absolute -bottom-15 -left-20 w-50 h-55 rounded-md bg-background-box shadow-[0_0_8px_rgba(0,0,0,0.8)]"></div>
                            <span className="absolute -bottom-14 left-32 flex items-center h-12 border-l-3 border-secondary pl-2 text-2xl z-10">5 Years</span>

                        </div>

                    </div>

                </div>
                <div className="w-1/2 h-full">

                    <div className="col-center size-full p-8">

                        <span className="w-full">My bio:</span>
                        <div className="w-120 h-100 mt-2">

                            <p>I am 19 years old and a first-year software engineering student, I started programming about 5 years ago and entered the amazing world of computers. I love challenging tasks because tackling them helps me become a stronger version of myself.</p>

                            <ul className="col-center gap-y-3 w-9/10 pl-6 mt-8">

                                <li className="row-center gap-x-1 w-full h-12 rounded-md">

                                    <span className="row-center size-12 rounded bg-background-box">

                                        <FcCandleSticks className="size-8" />

                                    </span>
                                    <p className="flex items-center w-8/10 h-12 rounded bg-background-box px-5">
                                        I have extraordinary perseverance.
                                    </p>

                                </li>
                                <li className="row-center gap-x-1 w-full h-12 rounded-md bg-background">

                                    <span className="row-center size-12 rounded bg-background-box">

                                        <FaClover className="size-7" />
 
                                    </span>
                                    <p className="flex items-center w-8/10 h-12 rounded bg-background-box px-5">
                                        I love my work and programming.
                                    </p>

                                </li>
                                <li className="row-center gap-x-1 w-full h-12 rounded-md bg-background">

                                    <span className="row-center size-12 rounded bg-background-box">

                                        <IoInfinite className="size-7" />
 
                                    </span>
                                    <p className="flex items-center w-8/10 h-12 rounded bg-background-box px-5">
                                        I am a very curious person.
                                    </p>

                                </li>
                                <li className="row-center gap-x-1 w-full h-12 rounded-md bg-background">

                                    <span className="row-center size-12 rounded bg-background-box">

                                        <SiDreamstime className="size-7" />
 
                                    </span>
                                    <p className="flex items-center w-8/10 h-12 rounded bg-background-box px-5">
                                        I am striving to be the best I can be.
                                    </p>

                                </li>

                            </ul>

                        </div>

                    </div>

                </div>

            </section>

            <section className="relative row-center gap-x-5 w-full h-105 px-4">

                <span className="absolute top-0 flex justify-center items-start gap-x-2 w-full h-10">Projects <TbArrowWaveRightDown className="size-7 text-secondary" /></span>

                <div className="w-full h-88 mt-7">

                    <div className="container size-full">

                      <div className="first">

                        <div className="size-full rounded-md shadow-[inset_0_0_8px_rgba(0,0,0,0.5)]"></div>

                      </div>

                      <div className="second">

                        <div className="size-full rounded-md shadow-[inset_0_0_8px_rgba(0,0,0,0.5)]"></div>

                      </div>

                      <div className="third">

                        <div className="size-full rounded-md shadow-[inset_0_0_8px_rgba(0,0,0,0.5)]"></div>

                      </div>

                    </div>

                </div>

            </section>
        
        </main>

    )

}


export default Main;