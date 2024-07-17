"use client";

import Image from "next/image";
import Link from "next/link";
import EmailIcon from "../../../public/mail.svg";
import PhoneIcon from "../../../public/phone.svg";
import LocationIcon from "../../../public/location.svg";
import FacebookIcon from "../../../public/facebook.svg";
import TwitterIcon from "../../../public/twitter.svg";
import LinkedinIcon from "../../../public/linkedin.svg";

import LogoIcon from "../../../public/logo.svg";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

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

const navLinks = [
  { href: "/", text: "Home" },
  { href: "/services", text: "Services" },
  // { href: "/work", text: "Work" },
  { href: "/process", text: "Process" },
  { href: "/about", text: "About" },
  // { href: "/careers", text: "Careers" },
  { href: "/contact", text: "Contact" }
];

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className="text-absolute-white px-4 py-8 lap:py-0 lap:px-0 flex flex-col gap-8 lap:gap-0 border-t border-t-grey-15 lap:mt-0 lap:border-none mt-5 text-base desk:text-lg desk:w-[1596px] lap:w-[1280px] tab:w-[736px] mx-auto">
      <div className="flex flex-col lap:flex-row justify-end items-center w-full gap-8 desk:gap-28 lap:py-10 desk:py-12 lap:border-b lap:border-b-grey-15">
        <Link
          passHref
          href={"/"}
          className="flex flex-auto items-center justify-center lap:justify-start border-b border-b-grey-15 lap:border-none w-full lap:w-full pb-8 lap:pb-0"
        >
          <Image src={LogoIcon} alt="hamburger_menu" height={60} width={90} />
        </Link>
        <nav className="flex flex-wrap w-full items-center justify-center gap-5 desk:gap-7 text-grey-90">
          {navLinks.map((link) => (
            <Link
              key={link.text}
              href={link.href}
              className={cn(
                "hover:scale-125 duration-200 hover:text-green-50 ",
                { "text-green-50": pathname === link.href }
              )}
            >
              {link.text}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col lap:flex-row items-center border border-grey-15 gap-4 w-full max-w-fit rounded-xl p-4 lap:pl-6">
          <span className="">Stay Connected</span>
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
      <div className="flex flex-col lap:flex-row justify-between items-center lap:py-10 desk:py-12 w-full gap-5 ">
        <div className="flex flex-col lap:flex-row items-center lap:gap-7 w-full  text-grey-90">
          {contactInfo.map((contact) => (
            <Link
              href={"/"}
              key={contact.alt}
              passHref
              className="flex items-center gap-2.5 py-5 lap:p-0 lap:pb-4 w-full lap:w-fit justify-center border-b border-b-grey-15"
            >
              <Image
                src={contact.icon}
                alt={contact.alt}
                width={24}
                height={24}
              />
              <span>{contact.text}</span>
            </Link>
          ))}
        </div>
        <div className="text-grey-60 w-full  text-right">
          <span>© 2024 Uicoder. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
