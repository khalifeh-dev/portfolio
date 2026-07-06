import {
  FaCss3Alt,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { FaClover } from "react-icons/fa6";
import { FcCandleSticks } from "react-icons/fc";
import { IoInfinite } from "react-icons/io5";
import {
  SiDocker,
  SiDreamstime,
  SiExpress,
  SiGit,
  SiJest,
  SiMongodb,
  SiMui,
  SiNestjs,
  SiRadixui,
  SiRedis,
  SiRedux,
} from "react-icons/si";
import { TbArrowWaveRightDown } from "react-icons/tb";
import { AiOutlineDashboard } from "react-icons/ai";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { DiPostgresql } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import Progress from "../common/progress";

const Main = () => {
  return (
    <main className="w-full col-center gap-y-15 px-14 py-2">
      {/* About Me */}
      <section className="relative row-center gap-x-5 w-full h-120">
        <span className="absolute top-0 flex justify-center items-start gap-x-2 w-full h-10">
          About Me <TbArrowWaveRightDown className="size-7 text-secondary" />
        </span>

        <div className="w-1/2 h-full bg-background">
          <div className="row-center size-full">
            <div className="relative w-80 h-90 rounded-md bg-background-box shadow-[0_0_8px_rgba(0,0,0,0.8)]">
              <div className="absolute -bottom-15 -left-20 w-50 h-55 rounded-md bg-background-box shadow-[0_0_8px_rgba(0,0,0,0.8)]"></div>
              <span className="absolute -bottom-14 left-32 flex items-center h-12 border-l-3 border-secondary pl-2 text-2xl z-10">
                5 Years
              </span>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full">
          <div className="col-center size-full p-8">
            <span className="w-full">My bio:</span>
            <div className="w-120 h-100 mt-2">
              <p>
                I am 19 years old and a first-year software engineering student,
                I started programming about 5 years ago and entered the amazing
                world of computers. I love challenging tasks because tackling
                them helps me become a stronger version of myself.
              </p>

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

      {/* Projects */}
      <section className="relative row-center gap-x-5 w-full h-105 px-4">
        <span className="absolute top-0 flex justify-center items-start gap-x-2 w-full h-10">
          Projects <TbArrowWaveRightDown className="size-7 text-secondary" />
        </span>

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

      {/* Skills */}
      <section className="relative col-center w-full h-200 px-4">
        <span className="absolute top-0 flex justify-center items-start gap-x-2 w-full h-10">
          Skills <TbArrowWaveRightDown className="size-7 text-secondary" />
        </span>

        <div className="skills-container w-full h-100">
          {/* ReactJs */}
          <Progress
            name="ReactJs"
            color="#58C4DC"
            icon={<FaReact className="text-[#58C4DC]" />}
            percentage={85}
            skillLvl="Advanced"
            containerClassName="one"
          />

          {/* NextJs */}
          <Progress
            name="NextJs"
            color="#6a7282"
            icon={<RiNextjsFill />}
            percentage={85}
            skillLvl="Advanced"
            containerClassName="two"
          />

          {/* TailwindCSS */}
          <Progress
            name="TailwindCSS"
            color="#00BCFF"
            icon={<RiTailwindCssFill className="text-[#00BCFF]" />}
            percentage={90}
            skillLvl="Advanced"
            containerClassName="three"
          />

          {/* TypeScript */}
          <Progress
            name="TypeScript"
            color="#3178C6"
            icon={<BiLogoTypescript className="text-[#3178C6]" />}
            percentage={75}
            skillLvl="Advanced"
            containerClassName="four"
          />

          {/* NestJs */}
          <Progress
            name="NestJs"
            color="#ea2852"
            icon={<SiNestjs className="text-[#ea2852]" />}
            percentage={95}
            skillLvl="Advanced"
            containerClassName="five"
          />

          {/* PostgreSQL */}
          <Progress
            name="PostgreSQL"
            color="#6496c0"
            icon={<DiPostgresql className="text-[#6496c0]" />}
            percentage={80}
            skillLvl="Advanced"
            containerClassName="six"
          />
        </div>
      </section>
    </main>
  );
};

export default Main;
