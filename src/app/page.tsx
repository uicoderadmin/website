import type { NextPage } from "next";
import Hero from "../components/hero";
import LogoGrid from "../components/logo-grid";
import Services from "../components/services";
import WhyChooseUs from "../components/why-choose-us";
import Testimonials from "../components/testimonials";
import FaqContainer from "../components/faq-container";
import ContactContainer from "../components/contact-container";
import FooterSection from "../components/footer-section";

const HomePageDesktop: NextPage = () => {
  return (
    <div className="desk:w-[1596px] lap:w-[1280px] tab:w-[736px] mx-auto">
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <FaqContainer />
      <ContactContainer />
      <FooterSection />
    </div>
  );
};

export default HomePageDesktop;
