import type { NextPage } from "next";
import Image from "next/image";
import AcademicCapIcon from "../../public/expertise.svg";
import UserGroupIcon from "../../public/client-centric-approach.svg";
import LightningBoltIcon from "../../public/result-driven-solution.svg";
import UsersIcon from "../../public/collaborative-partnership.svg";

const reasons = [
  {
    title: "Expertise",
    description:
      "Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions.",
    icon: AcademicCapIcon
  },
  {
    title: "Client-Centric Approach",
    description:
      "We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success.",
    icon: UserGroupIcon
  },
  {
    title: "Results-Driven Solutions",
    description:
      "Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage.",
    icon: LightningBoltIcon
  },
  {
    title: "Collaborative Partnership",
    description:
      "We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive.",
    icon: UsersIcon
  }
];

const WhyChooseUs: NextPage = () => {
  return (
    <section className="flex flex-col items-center w-full text-absolute-white px-4 tab:px-0">
      <div className="flex flex-col justify-center items-center w-full desk:gap-4 gap-1.5 py-12 lap:py-24 desk:py-[120px] relative lap:border-x lap:border-x-grey-15  bg-[url('/whyChooseUs-BG.webp')]  bg-[length:100%_100%] bg-no-repeat">
        <h2 className="text-[28px] text-center leading-8 lap:text-4xl desk:text-5xl desk:leading-[58px] font-semibold z-10">
          Why Choose Uicoder?
        </h2>
        <p className="desk:text-lg desk:leading-6 lap:text-base text-sm leading-6 z-10 text-center px-4 text-grey-90">
          Experience excellence in digital craftsmanship with our team of
          skilled professionals dedicated to delivering exceptional results.{" "}
        </p>
      </div>
      <div className="flex flex-col lap:flex-row lap:flex-wrap justify-center w-full ">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className={`bg-grey-10 text-absolute-white px-8 py-10 desk:p-20 lap:p-16 lap:w-1/2 border-x border-x-grey-15 lap:border-x-0 lap:border-r lap:border-r-grey-15 border-b border-b-grey-15 flex flex-col desk:gap-10 lap:gap-8 gap-6 flex-auto  ${
              index % 2 === 0 && "lap:border-l lap:border-l-grey-15 "
            }`}
          >
            <div className="flex  justify-start items-center  gap-4 lap:gap-7 desk:gap-10">
              <div className="p-4 desk:p-6 bg-icon-gradient w-fit  rounded-xl ">
                <Image
                  src={reason.icon}
                  alt={reason.title}
                  width={40}
                  height={40}
                  className="!w-7 !h-7 lap:!w-8 lap:!h-8 desk:!h-10 desk:!w-10"
                />
              </div>
              <h3 className="text-xl lap:text-xl desk:text-3xl desk:leading-[45px] font-semibold ">
                {reason.title}
              </h3>
            </div>
            <p className="text-sm lap:text-base desk:text-xl  text-grey-90 ">
              {reason.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
