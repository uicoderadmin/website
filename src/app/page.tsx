import type { NextPage } from "next";
import Hero from "../components/homepage/hero";
import Services from "../components/homepage/services";
import WhyChooseUs from "../components/homepage/why-choose-us";
import Testimonials from "../components/homepage/testimonials";
import FaqContainer from "../components/common/faq-container";
import ContactContainer from "../components/common/contact-container";

const HomePageDesktop: NextPage = () => {
  return (
    <div className="desk:w-[1596px] lap:w-[1280px] tab:w-[736px] mx-auto">
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <FaqContainer />
      <ContactContainer showForm />
    </div>
  );
};

export default HomePageDesktop;
