import type { NextPage } from "next";
import Image from "next/image";
import FaqBG from "../../public/faq-bg.webp";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "./ui/accordion";

const faqs = [
  {
    id: 1,
    question: "What services does Uicoder provide?",
    answer:
      "Uicoder offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more."
  },
  {
    id: 2,
    question: "How can Uicoder help my business?",
    answer:
      "Uicoder can help your business by providing custom digital solutions that improve your online presence, streamline your operations, and enhance user engagement."
  },
  {
    id: 3,
    question: "What industries does Uicoder work with?",
    answer:
      "We work with a variety of industries including e-commerce, healthcare, finance, real estate, and more."
  },
  {
    id: 4,
    question: "How long does it take to complete a project with Uicoder?",
    answer:
      "The timeline for a project varies depending on its complexity and scope. We work closely with our clients to ensure timely delivery of high-quality solutions."
  },
  {
    id: 5,
    question:
      "Do you offer ongoing support and maintenance after the project is completed?",
    answer:
      "Yes, we offer ongoing support and maintenance services to ensure your digital products continue to perform optimally."
  },
  {
    id: 6,
    question: "Can you work with existing design or development frameworks?",
    answer:
      "Absolutely. We can integrate with existing frameworks and platforms to enhance and expand their functionality."
  },
  {
    id: 7,
    question: "How involved will I be in the project development process?",
    answer:
      "We believe in close collaboration with our clients. Your involvement is crucial to the success of the project, and we keep you informed and involved at every stage."
  },
  {
    id: 8,
    question: "Can you help with website or app maintenance and updates?",
    answer:
      "Yes, we provide maintenance and update services to keep your website or app running smoothly and up-to-date with the latest technologies."
  }
];

const FaqContainer: NextPage = () => {
  return (
    <section className="flex flex-col items-center  w-full text-absolute-white px-4 tab:px-0">
      <div className="flex flex-col justify-center items-center w-full gap-4 py-12 lap:py-24 desk:py-[120px] relative bg-[url('/FAQ_BG.webp')]  bg-[length:100%_100%] bg-no-repeat border border-grey-15">
        <h2 className="text-[28px] leading-8 lap:text-4xl desk:text-5xl desk:leading-[58px] font-bold z-10 text-center px-6">
          Frequently Asked Questions
        </h2>
        <p className="desk:text-lg desk:leading-6 lap:text-base text-sm leading-6 text-grey-90 z-10 w-7/12 text-center">
          Still you have any questions? Contact our Team via hello@uicoder.com
        </p>
      </div>
      <Accordion
        type="single"
        collapsible
        className="flex w-full border-x border-x-grey-15"
      >
        <div className="flex flex-col flex-1 lap:py-16 desk:py-20 border-r border-r-grey-15">
          {faqs
            .slice(0, faqs.length % 2 ? faqs.length / 2 + 1 : faqs.length / 2)
            .map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.question}
                className="w-full px-6 py-7 lap:px-10 lap:py-8 desk:py-9 desk:px-12 border-y  border-y-grey-15 border-r-0"
              >
                <AccordionTrigger className="focus-visible:outline-none py-0">
                  <div className="flex items-center gap-5 desk:gap-7 desk:w-4/5 text-left text-base lap:text-lg lap:leading-5 desk:text-[22px] desk:leading-7">
                    <span className="p-3 lap:p-4 desk:p-5 text-center bg-icon-gradient w-12 lap:w-16 desk:w-20 text-xl lap:text-2xl desk:text-[28px] desk:leading-[42px] rounded-lg desk:rounded-xl">
                      {faq.id.toString().padStart(2, "0")}
                    </span>
                    {faq.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-grey-90 text-sm pt-6 lap:pt-1 desk:pt-0 lap:text-base desk:text-lg desk:leading-7 lap:pl-[84px] desk:pl-[108px] desk:pr-20">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
        </div>
        <div className="lap:flex flex-col flex-1 lap:py-16 desk:py-20 hidden ">
          {faqs
            .slice(
              faqs.length % 2 ? faqs.length / 2 + 1 : faqs.length / 2,
              faqs.length
            )
            .map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.question}
                className="w-full px-6 py-7 lap:px-10 lap:py-8 desk:py-9 desk:px-12 border-y border-y-grey-15 border-l-0"
              >
                <AccordionTrigger className="focus-visible:outline-none py-0">
                  <div className="flex items-center gap-5 desk:gap-7 desk:w-4/5 text-left text-base lap:text-lg lap:leading-5 desk:text-[22px] desk:leading-7">
                    <span className="p-3 lap:p-4 desk:p-5 text-center bg-icon-gradient w-12 lap:w-16 desk:w-20 text-xl lap:text-2xl desk:text-[28px] desk:leading-[42px] rounded-lg desk:rounded-xl">
                      {faq.id.toString().padStart(2, "0")}
                    </span>
                    {faq.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-grey-90 text-sm pt-6 lap:pt-1 desk:pt-0 lap:text-base desk:text-lg desk:leading-7 lap:pl-[84px] desk:pl-[108px] desk:pr-20">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
        </div>
      </Accordion>
    </section>
  );
};

export default FaqContainer;
