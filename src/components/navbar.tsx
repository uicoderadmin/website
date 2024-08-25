import Image from "next/image";
import Link from "next/link";
// import LogoIcon from "../../public/logo_icon.svg";

const navLinks = [
  { href: "/", text: "Home" },
  { href: "/services", text: "Services" },
  { href: "/work", text: "Work" },
  { href: "/process", text: "Process" },
  { href: "/about", text: "About" },
  { href: "/careers", text: "Careers" },
];

const Navbar = () => {
  return (
    <header
      className={`self-stretch h-24 flex justify-center top-0 z-50 sticky border-b border-grey-15  backdrop-blur-3xl`}
    >
      <div className="flex items-center justify-between w-full max-w-[1596px] py-6">
        <div className="flex items-center space-x-4">
          {/* <Image src={LogoIcon} alt="Logo" width={50} height={50} /> */}
          <span className="text-lg">Logo</span>
        </div>
        <nav className="flex flex-auto justify-center text-lg text-absolute-white">
          {navLinks.map((link) => (
            <Link
              key={link.text}
              href={link.href}
              className="hover:bg-grey-15 rounded-lg px-7 py-4 transition-all duration-300 hover:scale-125"
            >
              {link.text}
            </Link>
          ))}
        </nav>
        <Link
          href="/bookappointment"
          className="bg-green-50 py-4 px-6 font-medium text-lg text-grey-15 rounded-lg"
        >
          <span>Book an Appointment</span>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
