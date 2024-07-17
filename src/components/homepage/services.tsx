import type { NextPage } from "next";
import Image from "next/image";
import ServiceBG from "../../public/service-bg.webp";
import {
  PaintBrushIcon,
  PuzzlePieceIcon,
  FolderIcon
} from "@heroicons/react/24/solid";
import HighlightSection from "../common/HighlightSection";

const services = [
  {
    title: "Design",
    description:
      "At Uicoder, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it’s about creating seamless and intuitive user experiences.",
    icon: PaintBrushIcon
  },
  {
    title: "Engineering",
    description:
      "Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs.",
    icon: PuzzlePieceIcon
  },
  {
    title: "Project Management",
    description:
      "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process.",
    icon: FolderIcon
  }
];

const Services: NextPage = () => {
  return (
    <section className="flex flex-col items-center w-full text-absolute-white px-4 tab:px-0">
      <HighlightSection
        title="Our Services"
        description="Transform your brand with our innovative digital solutions that captivate and engage your audience."
        bgImage="/service-bg.webp"
      />
      <div className="flex flex-col lap:flex-row justify-center w-full border border-grey-15">
        {services.map((service, index) => (
          <div
            key={index}
            className={`bg-grey-10  text-absolute-white p-8 desk:p-12 lap:p-10 flex flex-col gap-6 lap:gap-4 desk:gap-5 flex-auto text-lg leading-6 lap:border-t-0 border-t border-t-grey-15 ${
              index === 0 && "border-t-0"
            } ${index === 1 && "lap:border-x lap:border-x-grey-15 "}`}
          >
            <div className="flex lap:flex-col justify-start items-center lap:items-start gap-4 lap:gap-7 desk:gap-10">
              <div className="p-4 desk:p-6 bg-icon-gradient w-fit  rounded-xl ">
                <service.icon className=" w-7 h-7 text-green-50" />
              </div>
              <h3 className="text-xl lap:text-2xl desk:text-3xl leading-[45px] font-semibold ">
                {service.title}
              </h3>
            </div>
            <p className="text-sm flex-1 text-grey-90 lap:mb-16 desk:mb-20">
              {service.description}
            </p>
            <button className="bg-grey-15 text-sm leading-6 py-4 rounded-lg">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
