"use client";
import Image from "next/image";
import Link from "next/link";
import HamburgerIcon from "../../../public/hamburger_menu.svg";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import LogoIcon from "../../../public/logo.svg";

const navLinks = [
  { href: "/", text: "Home" },
  { href: "/services", text: "Services" },
  // { href: "/work", text: "Work" },
  { href: "/process", text: "Process" },
  { href: "/about", text: "About" }
  // { href: "/careers", text: "Careers" }
];

const Navbar = () => {
  const pathname = usePathname();

  const handleOpen = () => {
    var navbar = document.getElementById("navbar-mobile");
    console.log(navbar);
    navbar?.classList.toggle("flex");
    navbar?.classList.toggle("hidden");
  };

  return (
    <header
      className={`self-stretch h-24 flex justify-center top-0 z-50 sticky border-b border-grey-15  backdrop-blur-3xl`}
    >
      <div className="flex items-center justify-between w-full lap:text-sm desk:text-lg tab:max-w-[736px] lap:max-w-[1280px] desk:max-w-[1596px] px-6 lap:px-0 py-6">
        <Link href={"/"} passHref className="flex items-center ">
          <Image src={LogoIcon} alt="hamburger_menu" height={60} width={90} />
        </Link>
        <nav
          id="navbar-mobile"
          className="lap:flex flex-auto lap:flex-grow-0 flex-col lap:flex-row  justify-center bg-grey-10 text-absolute-white hidden z-[100]  lap:bg-transparent w-full lap:w-fit backdrop-blur-4xl fixed left-0 top-24 lap:gap-5  lap:p-0 lap:static focus-visible:outline-none focus:outline-none"
        >
          {navLinks.map((link) => (
            <Link
              key={link.text}
              href={link.href}
              onClick={handleOpen}
              className={cn(
                "hover:bg-grey-15 lap:rounded-lg px-6 py-2 lap:px-5 lap:py-3 desk:px-7 desk:py-4 transition-all duration-300 backdrop-blur-3xl border-x border-x-grey-15 lap:hover:scale-125 w-full  max-w-[736px] mx-auto lap:w-fit border-b border-b-grey-15 lap:border-none",
                { "bg-grey-15": pathname === link.href }
              )}
            >
              {link.text}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="bg-green-50 py-4 px-6 font-medium  text-grey-15 rounded-lg hidden lap:block text-nowrap"
        >
          <span>Contact Us</span>
        </Link>
        <button
          type="button"
          onClick={handleOpen}
          aria-expanded="false"
          data-collapse-toggle="navbar-mobile"
          aria-controls="navbar-mobile"
          className="relative h-12 w-12 p-1.5 flex justify-center lap:hidden rounded-md bg-grey-15 focus-visible:outline-none "
        >
          <Image
            src={HamburgerIcon}
            alt="hamburger_menu"
            height={34}
            width={34}
          />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
