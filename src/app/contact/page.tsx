import ContactContainer from "@/components/common/contact-container";
import ContactForm from "@/components/common/ContactForm";
import FaqContainer from "@/components/common/faq-container";
import HighlightSection from "@/components/common/HighlightSection";
import EmailIcon from "../../../public/mail.svg";
import PhoneIcon from "../../../public/phone.svg";
import LocationIcon from "../../../public/location.svg";
import Image from "next/image";
import Link from "next/link";
import FacebookIcon from "../../../public/facebook.svg";
import TwitterIcon from "../../../public/twitter.svg";
import LinkedinIcon from "../../../public/linkedin.svg";
import BottomBanner from "@/components/common/BottomBanner";

const socialLinks = [
  { href: "https://facebook.com", icon: FacebookIcon, alt: "Facebook" },
  { href: "https://twitter.com", icon: TwitterIcon, alt: "Twitter" },
  { href: "https://linkedin.com", icon: LinkedinIcon, alt: "LinkedIn" }
];

const contactInfo = [
  { icon: EmailIcon, alt: "Email", text: "contact@theuicoders.com" },
  { icon: PhoneIcon, alt: "Phone", text: "+91 88829 28682" },
  { icon: LocationIcon, alt: "Location", text: "Somewhere in the World" }
];

const ContactPage: React.FC = () => {
  return (
    <div className="desk:w-[1596px] lap:w-[1280px] tab:w-[736px] mx-auto ">
      <div className="px-4 lap:px-0">
        <HighlightSection
          title="Contact Us"
          description="Get in touch with us today and let us help you with any questions or inquiries you may have."
          bgImage="/service-bg.webp"
        />
        <div className="border border-grey-15 flex flex-col lap:flex-row px-6 py-8 lap:py-10 desk:py-12 desk:gap-8  gap-5 justify-center">
          {contactInfo.map((contact) => (
            <div
              key={contact.alt}
              className="flex items-center gap-2.5 p-5  lap:py-4 desk:px-6 text-base desk:text-xl w-full lap:w-fit justify-center rounded-md bg-grey-15"
            >
              <Image
                src={contact.icon}
                alt={contact.alt}
                width={24}
                height={24}
              />
              <span>{contact.text}</span>
            </div>
          ))}
        </div>
        <div className="border-x border-x-grey-15 ">
          <ContactForm />
        </div>
        <div className="flex flex-col lap:flex-row justify-center items-center border border-grey-15 text-base text-grey-90">
          <div className="flex lap:justify-end justify-center items-center gap-4 py-5 lap:px-20 w-full lap:flex-grow lap:w-1/2 text-nowrap">
            <span className="desk:text-[22px]">Operating Days</span>
            <span className="desk:text-xl bg-grey-15 py-2.5 px-5 rounded-md">
              Monday to Friday
            </span>
          </div>
          <div className=" border-t border-t-grey-15  lap:border-l py-5 lap:py-9 border-l-grey-15 w-full lap:w-1/2  lap:px-20">
            <div className="flex flex-col lap:flex-row items-center lap:w-fit lap:border border-grey-15 gap-4 lap:p-2.5 lap:pl-5 desk:p-4 desk:pl-6  w-full mx-auto lap:mx-0  rounded-xl">
              <span className="desk:text-lg">Stay Connected</span>
              <div className="flex items-center gap-4 rounded-xl lap:pl-6">
                {socialLinks.map((social) => (
                  <Link
                    key={social.alt}
                    href={social.href}
                    className="relative p-4 desk:p-5 bg-icon-gradient rounded-lg  hover:scale-125 duration-200"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={social.icon}
                      alt={social.alt}
                      width={24}
                      height={24}
                      className="!h-5 !w-5 lap:!w-6 lap:!h-6"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <FaqContainer />
      <BottomBanner className="border-t border-t-grey-15" />
    </div>
  );
};

export default ContactPage;
