import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="  xs:h-250 lg:h-300 flex justify-evenly p-10 mt-5 bottom-0 w-full bg-white bg-opacity-30">
      <div className="mt-5">
        <FaInstagramSquare className="text-lilla xs:h-25 xs:w-25 lg:h-50 lg:w-50" />
        <FaFacebookSquare className="text-lilla xs:h-25 xs:w-25 lg:h-50 lg:w-50" />
        <FaTwitterSquare className="text-lilla xs:h-25 xs:w-25 lg:h-50 lg:w-50" />
      </div>
      <div className="text-center font-bold">
        <p className="pb-5 pt-5 text-lilla lg:text-[20px]">Contact</p>
        <p className="pb-5 text-lilla lg:text-[20px]">About Us</p>
        <p className="pb-5 text-lilla lg:text-[20px]">Sponsor</p>
      </div>
      <div>
        <img
          className="xs:w-75 xs:h-75 xs:mt-10  md:w-150 md:h-150"
          src="/img/logo.svg"
          alt="logo ikon"
        ></img>
      </div>
    </section>
  );
};

export default Footer;
