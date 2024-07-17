import ContactContainer from "@/components/common/contact-container";
import HighlightSection from "@/components/common/HighlightSection";
import ContactCube from "../../../public/contact_cube.svg";
import Step from "@/components/common/Step";
import Image from "next/image";
import BottomBanner from "@/components/common/BottomBanner";

const steps = [
  {
    title: "Design",
    description:
      "We begin by thoroughly understanding your business goals, target audience, and project requirements. We conduct in-depth research to gather insights and define project objectives, allowing us to develop a tailored strategy."
  },
  {
    title: "Engineering",
    description:
      "Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs."
  },
  {
    title: "Project Management",
    description:
      "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process."
  },
  {
    title: "Collaboration",
    description:
      "At Uicoder, we believe in the power of collaboration. Our teams work closely with clients to understand their needs and provide solutions that exceed expectations. We foster a culture of teamwork and open communication to ensure successful project outcomes."
  },
  {
    title: "Client-Centric Approach",
    description:
      "Uicoder's success is measured by our clients' success. We take the time to understand their unique challenges and tailor our services to meet their specific requirements. Our client-centric approach ensures that we deliver solutions that drive business growth."
  },
  {
    title: "Driving Success",
    description:
      "With each project, Uicoder's reputation grows. Our portfolio includes a diverse range of industries and our impact is felt far and wide. We are dedicated to helping our clients succeed in the digital world by delivering innovative and high-quality digital products."
  }
];

const AboutPage: React.FC = () => {
  return (
    <div className="desk:w-[1596px] lap:w-[1280px] tab:w-[736px] mx-auto ">
      <div className="px-4 lap:px-0">
        <HighlightSection
          title="About Us"
          description="Welcome to Uicoder, where collaboration, expertise, and client-centricity intersect to shape the future of digital innovation."
          bgImage="/service-bg.webp"
        />
        <div className="flex flex-col lap:flex-row gap-8 py-10 lap:py-20 lap:px-24 justify-between lap:gap-24 border border-grey-15 px-4">
          <div className="flex flex-col items-start justify-center gap-4 text-left lap:w-1/2">
            <h2 className="text-[28px] lap:text-[38px] desk:text-5xl text-left">
              About UiCoder
            </h2>
            <span className="text-sm lap:text-base desk:text-xl text-grey-90">
              Uicoder is a digital product agency that is passionate about
              crafting exceptional digital experiences. We specialize in design,
              engineering, and project management, helping businesses thrive in
              the digital landscape. At Uicoder, we follow a structured and
              collaborative process to ensure the successful delivery of
              exceptional digital products. Our process combines industry best
              practices, creative thinking, and a client-centric approach.
            </span>
          </div>
          <div className="flex-auto w-full h-[336px] lap:h-[480px] lap:min-w-[480px] lap:w-[480px] border border-grey-15 rounded-xl relative  bg-[url('/Contact_BG.webp')]  bg-[length:100%_100%] bg-no-repeat  ">
            <div className="absolute inset-0 bg-white-overlay mix-blend-overlay  bg-custom-green"></div>
            <div className="absolute top-1/2 left-0 w-1/2 lap:w-1/2 tab:w-1/4 h-1 bg-gradient-to-r from-[rgba(158,255,0,0)] to-[rgba(158,255,0,1)]  "></div>
            <div className="absolute top-0 left-1/2 w-1 h-1/2 bg-gradient-to-b from-[rgba(158,255,0,0)] to-[rgba(158,255,0,1)]  "></div>
            <div className="absolute top-1/2 right-0 w-1/2 lap:w-1/2 tab:w-1/4 h-1 bg-gradient-to-r from-[rgba(158,255,0,1)] to-[rgba(158,255,0,0)]  "></div>
            <div className="absolute bottom-0 left-1/2 w-1 h-1/2 bg-gradient-to-b from-[rgba(158,255,0,1)] to-[rgba(158,255,0,0)]  "></div>
            <div className="absolute top-1/2 left-1/2 w-20 h-20 rounded-xl bg-green-50  transform -translate-x-1/2 -translate-y-1/2 z-10 shadow-custom-inset">
              <Image
                src={ContactCube}
                fill
                alt="contact-cube"
                className="!h-3/5 !w-3/5 !top-1/2 !left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          </div>
        </div>
        <div className="border-x border-x-grey-15 text-[38px] px-6 py-10 lap:py-20 lap:px-12 desk:py-24">
          Our Story
        </div>
        <Step steps={steps} />
        <BottomBanner />
      </div>
    </div>
  );
};

export default AboutPage;
