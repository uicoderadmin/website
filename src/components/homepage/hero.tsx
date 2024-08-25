import type { NextPage } from "next";
import Link from "next/link";

export type HeroType = {
  className?: string;
};

const Hero: NextPage<HeroType> = ({ className = "" }) => {
  return (
    <section
      className={`flex flex-col desk:gap-10 gap-7 justify-start items-center relative  w-full desk:h-[800px] lap:h-[691px] h-[566px] tab:bg-[url('/hero-bg.webp')]  bg-[url('/hero-bg-mobile.webp')] bg-cover tab:bg-contain  bg-no-repeat bg-bottom border border-grey-15 p-4 py-20 lap:py-28`}
    >
      <div className="bg-square-pattern h-full w-full absolute top-0 opacity-20"></div>
      <h1 className="font-semibold text-center text-4xl lap:text-5xl desk:text-[68px] lap:w-5/12 desk:w-1/2 desk:leading-[82px] ">
        A Digital Product Studio that will Work
      </h1>
      <div className="lap:flex block text-grey-60 justify-center items-center py-6 px-10 backdrop-blur-[30px] z-10 rounded-xl bg-transparent gap-1.5 desk:text-[22px] lap:text-lg text-base  text-center w-full lap:w-fit border border-grey-15">
        For
        <span className="lap:bg-grey-15 lap:text-absolute-white lap:p-3 rounded-md lowercase lap:normal-case">
          {" "}
          Startups
        </span>
        ,
        <span className="lap:bg-grey-15 lap:text-absolute-white lap:p-3 rounded-md lowercase  lap:normal-case">
          {" "}
          Enterprise leaders
        </span>
        ,
        <span className="lap:bg-grey-15 lap:text-absolute-white lap:p-3 rounded-md lowercase  lap:normal-case">
          {" "}
          Media & Publishers{" "}
        </span>
        and
        <span className="lap:bg-grey-15 lap:text-absolute-white lap:p-3 rounded-md lowercase  lap:normal-case">
          {" "}
          Social Good
        </span>
      </div>
      <div className="flex gap-3 desk:text-lg lap:text-sm text-sm mt-2.5 ">
        <button className="backdrop-blur-[10px] z-10  border border-grey-15 desk:py-4 py-3 desk:px-7 px-5 rounded-xl">
          Our Works
        </button>
        <Link
          passHref
          href={"/bookappointment"}
          className="bg-green-50 z-10 text-grey-15 border border-grey-15  desk:py-4 py-3 desk:px-7 px-5 rounded-xl"
        >
          Book an Appointment
        </Link>
      </div>
    </section>
  );
};
export default Hero;
