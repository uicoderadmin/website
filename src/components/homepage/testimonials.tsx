import type { NextPage } from "next";
import Image from "next/image";
import GridWrapper from "../common/GridWrapper";
import HighlightSection from "../common/HighlightSection";
const testimonials = [
  {
    quote: "Uicoder has elevated our portfolio to new heights.",
    feedback:
      "The dynamic and visually captivating portfolio they developed for us has left a lasting impression on our clients. Their innovative design and seamless functionality have made my portfolio stand out in the industry. I am thrilled with the outcome.",
    name: "Hemant Bhankhar",
    title: "Indivdual Developer",
    image: "/hemant.svg", // Replace with actual image path
    companyLink: "https://www.webdevbyhemant.com/"
  }
  // {
  //   quote: "Working with Uicoder was a breeze.",
  //   feedback:
  //     "They understood our vision for a mobile app that streamlined our food delivery service. The app they delivered exceeded our expectations, and our customers love the seamless ordering experience. Uicoder is a trusted partner we highly recommend.",
  //   name: "Sarah Johnson",
  //   title: "Founder of HungryBites",
  //   image: "/sarah-johnson.png", // Replace with actual image path
  //   companyLink: "#"
  // },
  // {
  //   quote:
  //     "Uicoder developed a comprehensive booking and reservation system for our event management company.",
  //   feedback:
  //     "Their attention to detail and commitment to delivering a user-friendly platform was evident throughout the project. The system has streamlined our operations and enhanced our clients' event experiences.",
  //   name: "Mark Thompson",
  //   title: "CEO of EventMasters",
  //   image: "/mark-thompson.png", // Replace with actual image path
  //   companyLink: "#"
  // },
  // {
  //   quote: "ProTech Solutions turned to Uicoder to automate our workflow.",
  //   feedback:
  //     "They delivered an exceptional custom software solution. The system has significantly increased our productivity and reduced manual errors. Uicoder's expertise and professionalism have made them a trusted technology partner.",
  //   name: "Laura Adams",
  //   title: "COO of ProTech Solutions",
  //   image: "/laura-adams.png", // Replace with actual image path
  //   companyLink: "#"
  // },
  // {
  //   quote:
  //     "Uicoder designed and developed a captivating web portal for showcasing our real estate listings.",
  //   feedback:
  //     "The platform is visually appealing and easy to navigate, allowing potential buyers to find their dream homes effortlessly. Uicoder's expertise in the real estate industry is unmatched.",
  //   name: "Michael Anderson",
  //   title: "Founder of Dream Homes Realty",
  //   image: "/michael-anderson.png", // Replace with actual image path
  //   companyLink: "#"
  // },
  // {
  //   quote:
  //     "FitLife Tracker wanted a mobile app that tracked fitness activities and provided personalized workout plans.",
  //   feedback:
  //     "Uicoder's team developed an intuitive and feature-rich app that has helped our users stay motivated and achieve their fitness goals. We highly recommend Uicoder for any health and fitness app development needs.",
  //   name: "Emily Turner",
  //   title: "CEO of FitLife Tracker",
  //   image: "/emily-turner.png", // Replace with actual image path
  //   companyLink: "https://www.webdevbyhemant.com/"
  // }
];

const TestimonialItem: React.FC<any> = ({ item }) => (
  <>
    <p className="text-lg lap:text-xl desk:text-3xl desk:leading-10 font-semibold mb-2 text-green-80">
      {item.quote}
    </p>
    <p className="text-grey-90 flex-1  text-sm lap:text-base desk:text-lg ">
      {item.feedback}
    </p>
    <div
      className="flex justify-start items-end gap-5 border border-grey-15 bg-[rgba(36,36,36,0.2)]
              rounded-md px-3 py-4"
    >
      <Image
        src={item.image}
        alt={item.name}
        width={40}
        height={40}
        className="rounded-lg"
      />
      <div className="flex-1">
        <p className="font-semibold text-base desk:text-xl">{item.name}</p>
        <p className="text-sm desk:text-lg text-grey-90">{item.title}</p>
      </div>
      <a
        href={item.companyLink}
        target="_blank"
        className="bg-grey-15 py-4 px-5 rounded-md hidden lap:block"
      >
        Open Website
      </a>
    </div>
  </>
);

const Testimonials: NextPage = () => {
  return (
    <section className="flex flex-col items-center w-full text-absolute-white px-4 tab:px-0">
      <HighlightSection
        title="What our Clients say About us"
        description={`At Uicoder, we take pride in delivering exceptional digital products and services that drive success for our
        clients. Here's what some of our satisfied clients have to say about their experience working with us`}
        bgImage="/whyChooseUs-BG.webp"
      />
      <GridWrapper
        items={testimonials}
        renderItem={(item) => <TestimonialItem item={item} />}
      />
    </section>
  );
};

export default Testimonials;
