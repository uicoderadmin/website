import type { NextPage } from "next";
import Image from "next/image";
import TestimonialsBG from "../../public/testimonial-bg.webp";
import AcademicCapIcon from "../../public/expertise.svg";
import UserGroupIcon from "../../public/client-centric-approach.svg";
import LightningBoltIcon from "../../public/result-driven-solution.svg";
import UsersIcon from "../../public/collaborative-partnership.svg";
const testimonials = [
  {
    quote: "Uicoder has been instrumental in transforming our online presence.",
    feedback:
      "Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier.",
    name: "John Smith",
    title: "CEO of Chic Boutique",
    image: "/john-smith.png", // Replace with actual image path
    companyLink: "#"
  },
  {
    quote: "Working with Uicoder was a breeze.",
    feedback:
      "They understood our vision for a mobile app that streamlined our food delivery service. The app they delivered exceeded our expectations, and our customers love the seamless ordering experience. Uicoder is a trusted partner we highly recommend.",
    name: "Sarah Johnson",
    title: "Founder of HungryBites",
    image: "/sarah-johnson.png", // Replace with actual image path
    companyLink: "#"
  },
  {
    quote:
      "Uicoder developed a comprehensive booking and reservation system for our event management company.",
    feedback:
      "Their attention to detail and commitment to delivering a user-friendly platform was evident throughout the project. The system has streamlined our operations and enhanced our clients' event experiences.",
    name: "Mark Thompson",
    title: "CEO of EventMasters",
    image: "/mark-thompson.png", // Replace with actual image path
    companyLink: "#"
  },
  {
    quote: "ProTech Solutions turned to Uicoder to automate our workflow.",
    feedback:
      "They delivered an exceptional custom software solution. The system has significantly increased our productivity and reduced manual errors. Uicoder's expertise and professionalism have made them a trusted technology partner.",
    name: "Laura Adams",
    title: "COO of ProTech Solutions",
    image: "/laura-adams.png", // Replace with actual image path
    companyLink: "#"
  },
  {
    quote:
      "Uicoder designed and developed a captivating web portal for showcasing our real estate listings.",
    feedback:
      "The platform is visually appealing and easy to navigate, allowing potential buyers to find their dream homes effortlessly. Uicoder's expertise in the real estate industry is unmatched.",
    name: "Michael Anderson",
    title: "Founder of Dream Homes Realty",
    image: "/michael-anderson.png", // Replace with actual image path
    companyLink: "#"
  },
  {
    quote:
      "FitLife Tracker wanted a mobile app that tracked fitness activities and provided personalized workout plans.",
    feedback:
      "Uicoder's team developed an intuitive and feature-rich app that has helped our users stay motivated and achieve their fitness goals. We highly recommend Uicoder for any health and fitness app development needs.",
    name: "Emily Turner",
    title: "CEO of FitLife Tracker",
    image: "/emily-turner.png", // Replace with actual image path
    companyLink: "#"
  }
];

const Testimonials: NextPage = () => {
  return (
    <section className="flex flex-col items-center w-full text-absolute-white px-4 tab:px-0">
      <div className="flex flex-col justify-center items-center w-full desk:gap-4 gap-1.5 py-12 desk:py-[120px] relative lap:border-x lap:border-x-grey-15  bg-[url('/whyChooseUs-BG.webp')]  bg-[length:100%_100%] bg-no-repeat">
        <h2 className="text-[28px] leading-8 lap:text-4xl desk:text-5xl desk:leading-[58px] font-semibold z-10">
          What our Clients say About us
        </h2>
        <p className="desk:text-lg desk:leading-6 lap:text-base text-sm lap:w-8/12 leading-6 z-10 text-center px-4 text-grey-90">
          {`At Uicoder, we take pride in delivering exceptional digital products and services that drive success for our
          clients. Here's what some of our satisfied clients have to say about their experience working with us`}
        </p>
      </div>
      <div className="flex flex-col lap:flex-row lap:flex-wrap justify-start w-full ">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`bg-grey-10 text-absolute-white px-8 py-10 desk:p-20 lap:p-16 lap:w-1/2 border-x border-x-grey-15 lap:border-x-0 lap:border-r lap:border-r-grey-15 border-b border-b-grey-15 flex flex-col  lap:gap-6 gap-5 flex-auto  ${
              index % 2 === 0 && "lap:border-l lap:border-l-grey-15 "
            }`}
          >
            <p className="text-lg lap:text-xl desk:text-3xl desk:leading-10 font-semibold mb-2 text-green-80">
              {testimonial.quote}
            </p>
            <p className="text-grey-90 flex-1  text-sm lap:text-base desk:text-lg ">
              {testimonial.feedback}
            </p>
            <div
              className="flex justify-start items-end gap-5 border border-grey-15 bg-[rgba(36,36,36,0.2)]
              rounded-md px-3 py-4"
            >
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={40}
                height={40}
                className="rounded-lg"
              />
              <div className="flex-1">
                <p className="font-semibold text-base desk:text-xl">
                  {testimonial.name}
                </p>
                <p className="text-sm desk:text-lg text-grey-90">
                  {testimonial.title}
                </p>
              </div>
              <a
                href={testimonial.companyLink}
                className="bg-grey-15 py-4 px-5 rounded-md hidden lap:block"
              >
                Open Website
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
