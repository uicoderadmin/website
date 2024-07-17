import ContactContainer from "@/components/common/contact-container";
import SectionHeader from "@/components/common/SectionHeader";
import Step from "@/components/common/Step";

const steps = [
  {
    title: "Discovery",
    description:
      "We begin by thoroughly understanding your business goals, target audience, and project requirements. We conduct in-depth research to gather insights and define project objectives, allowing us to develop a tailored strategy."
  },
  {
    title: "Planning and Strategy",
    description:
      "Based on the gathered information, we create a comprehensive project plan and strategy. This includes defining project milestones, timelines, deliverables, and resource allocation. We collaborate closely with you to align our strategy with your vision."
  },
  {
    title: "Design",
    description:
      "Our expert designers translate the project requirements into captivating visual designs. We create wireframes, mockups, and interactive prototypes to showcase the user interface, user experience, and overall design aesthetics. We iterate on the designs based on your feedback until we achieve the perfect look and feel."
  },
  {
    title: "Development",
    description:
      "Once the designs are approved, our skilled development team brings them to life. We use cutting-edge technologies and coding best practices to build robust and scalable digital products. Throughout the development phase, we maintain open lines of communication to keep you updated on progress and address any questions or concerns."
  },
  {
    title: "Testing and Quality Assurance",
    description:
      "We conduct rigorous testing to ensure that your digital product functions flawlessly across different devices, browsers, and operating systems. Our quality assurance team meticulously checks for bugs, usability issues, and performance bottlenecks. We strive for seamless user experience and a high level of reliability."
  },
  {
    title: "Deployment and Launch",
    description:
      "When your digital product is thoroughly tested and meets your satisfaction, we prepare for deployment. We handle all the technical aspects of launching your product, ensuring a smooth transition from development to the live environment. We assist with setting up hosting, configuring servers, and managing any required integrations."
  },
  {
    title: "Post-Launch Support",
    description:
      "Our commitment to your success doesn't end with the launch. We provide ongoing support and maintenance services to ensure your digital product continues to perform optimally. We offer different support packages based on your needs, including bug fixes, feature enhancements, security updates, and technical support."
  },
  {
    title: "Continuous Improvement",
    description:
      "We believe in continuous improvement and strive to optimize your digital product even after launch. We monitor user feedback, analytics, and market trends to identify opportunities for enhancement and growth. We proactively suggest improvements and updates to keep your digital product ahead of the curve."
  }
];

const ProcessPage: React.FC = () => {
  return (
    <div className="desk:w-[1596px] lap:w-[1280px] tab:w-[736px] mx-auto ">
      <div className="px-4 lap:px-0">
        <div className="px-4 py-12 text-center flex flex-col justify-center items-center w-full desk:gap-4 gap-1.5 lap:py-24 desk:py-[120px] border-x border-x-grey-15 relative lap:border-x lap:border-x-grey-15  bg-[url('/whyChooseUs-BG.webp')]  bg-[length:100%_100%] bg-no-repeat">
          <h2 className="text-[28px] leading-8 lap:text-4xl desk:text-5xl desk:leading-[58px] font-semibold z-10">
            Process of Starting the Project
          </h2>
          <p className="desk:text-lg desk:leading-6 lap:text-base text-sm leading-6 z-10 text-center px-4 text-grey-90">
            At Uicoder, we value transparency, collaboration, and delivering
            exceptional results.
          </p>
        </div>
        <SectionHeader
          title="At Uicoder"
          description="We follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach."
          buttonText="Here's an overview of our typical process:"
        />
        <Step steps={steps} />
      </div>
      <ContactContainer showForm />
    </div>
  );
};

export default ProcessPage;
