import type { NextPage } from "next";
import ContactCube from "../../../public/contact_cube.svg";
import Image from "next/image";
import ContactForm from "./ContactForm";
import Link from "next/link";

export type ContactContainerType = {
  className?: string;
  showForm?: boolean;
};

const ContactContainer: NextPage<ContactContainerType> = ({
  className = "",
  showForm
}) => {
  return (
    <section className="flex flex-col items-center  w-full text-absolute-white px-4 tab:px-0">
      <div className="flex flex-col justify-center items-center w-full gap-7 py-12 lap:py-24 desk:py-[120px] relative bg-[url('/Contact_BG.webp')]  bg-[length:100%_100%] bg-no-repeat border border-grey-15">
        <div className="relative h-12 w-12 desk:h-20 desk:w-20 p-10 bg-green-50 rounded-2xl z-10">
          <Image
            src={ContactCube}
            fill
            alt="contact-cube"
            className="!h-1/2 !w-1/2 !top-1/2 !left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <div className="flex flex-col justify-center items-center w-full gap-1.5 px-4">
          <h2 className="text-[28px] leading-8 lap:text-4xl desk:text-5xl desk:leading-[58px] font-bold z-10 text-center px-6">
            Thank you for your Interest in Uicoder.
          </h2>
          <p className="desk:text-lg desk:leading-6 lap:text-base text-sm leading-6 text-grey-90 z-10  text-center">
            We would love to hear from you and discuss how we can help bring
            your digital ideas to life. Here are the different ways you can get
            in touch with us.
          </p>
        </div>
        <Link
          passHref
          href={"/contact"}
          className="bg-green-50 z-10 text-grey-15 border border-grey-15 py-4 px-7 rounded-xl text-lg leading-7 font-medium"
        >
          Start Project
        </Link>
      </div>
      {showForm && (
        <div className="border border-grey-15 w-full">
          <ContactForm />
        </div>
      )}
    </section>
  );
};

export default ContactContainer;
