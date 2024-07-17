import Image from "next/image";
import ContactCube from "../../../public/contact_cube.svg";
import { cn } from "@/lib/utils";
import Link from "next/link";

type Props = {
  className?: string;
};

const BottomBanner = (props: Props) => {
  return (
    <div
      className={cn(
        "flex flex-col py-10 border-x border-x-grey-15 border-b border-b-grey-15 w-full px-6 lap:p-14 desk:p-20 gap-8",
        props.className
      )}
    >
      <div className="flex flex-col lap:flex-row  gap-6 justify-center items-center">
        <div className="relative flex-grow h-12 w-12 lap:h-24 lap:w-24 lap:min-w-24 desk:h-36 desk:w-36 desk:min-w-36 p-10 lap:p-5 bg-green-50 rounded-2xl z-10 shadow-custom-inset">
          <Image
            src={ContactCube}
            fill
            alt="contact-cube"
            className="!h-1/2 !w-1/2 lap:!w-14 lap:!h-14 desk:!h-[90px] desk:!w-[90px] !top-1/2 !left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <div className="text-grey-60 text-center lap:text-left flex flex-col gap-1.5 lap:gap-4 desk:gap-5">
          <h3 className=" text-xl lap:text-2xl desk:text-3xl  desk:leading-7 ">
            Today, Uicoder Continues to Thrive as a Leading Digital Product
            Agency.....
          </h3>
          <span className=" text-sm lap:text-base desk:text-lg ">
            Combining the power of design, engineering, and project management
            to create transformative digital experiences. They invite you to
            join them on their journey and discover how they can help bring your
            digital ideas to life.
          </span>
        </div>
      </div>
      <div className="flex flex-col lap:flex-row gap-5 text-grey-60 justify-center items-center py-6 px-10  z-10 rounded-xl bg-[rgba(36,36,36,0.2)] desk:text-[22px] lap:text-lg text-base  text-center w-full  border border-grey-15 lap:text-nowrap ">
        <span className=" text-lg leading-[22px] desk:text-xl ">
          Welcome to Uicoder
        </span>
        <span className="bg-grey-15 py-2.5 px-4 rounded-xl text-absolute-white text-base desk:text-xl">
          Where collaboration, Expertise, and Client-Centricity Intersect to
          Shape the Future of Digital Innovation.
        </span>
        <Link
          passHref
          href={"/contact"}
          className="bg-green-50 z-10 text-grey-10 border border-grey-15 py-4 px-7 rounded-xl text-sm font-medium w-full lap:w-fit text-nowrap"
        >
          Start Project
        </Link>
      </div>
    </div>
  );
};

export default BottomBanner;
