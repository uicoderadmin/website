import type { NextPage } from "next";
import Image from "next/image";
import AcademicCapIcon from "../../../public/expertise.svg";
import UserGroupIcon from "../../../public/client-centric-approach.svg";
import LightningBoltIcon from "../../../public/result-driven-solution.svg";
import UsersIcon from "../../../public/collaborative-partnership.svg";
import GridWrapper from "../common/GridWrapper";
import HighlightSection from "../common/HighlightSection";

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

const ReasonItem: React.FC<any> = ({ item }) => (
  <>
    <div className="flex justify-start items-center gap-4 lap:gap-7 desk:gap-10">
      <div className="p-4 desk:p-6 bg-icon-gradient w-fit rounded-xl">
        <Image
          src={item.icon}
          alt={item.title}
          width={40}
          height={40}
          className="!w-7 !h-7 lap:!w-8 lap:!h-8 desk:!h-10 desk:!w-10"
        />
      </div>
      <h3 className="text-xl lap:text-xl desk:text-3xl desk:leading-[45px] font-semibold">
        {item.title}
      </h3>
    </div>
    <p className="text-sm lap:text-base desk:text-xl text-grey-90">
      {item.description}
    </p>
  </>
);

const WhyChooseUs: NextPage = () => {
  return (
    <section className="flex flex-col items-center w-full text-absolute-white px-4 tab:px-0">
      <HighlightSection
        title="Why Choose Uicoder?"
        description="Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results."
        bgImage="/whyChooseUs-BG.webp"
      />
      <GridWrapper
        items={reasons}
        renderItem={(item) => <ReasonItem item={item} />}
      />
    </section>
  );
};

export default WhyChooseUs;
