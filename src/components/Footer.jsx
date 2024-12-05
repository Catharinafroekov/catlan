import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <section className=" h-300 flex justify-evenly p-10 fixed bottom-0 w-full bg-white bg-opacity-30">
      <div>
        <FaInstagramSquare className="text-lilla h-50 w-50" />
        <FaFacebookSquare className="text-lilla h-50 w-50" />
        <FaTwitterSquare className="text-lilla h-50 w-50" />
      </div>
      <div className="text-center font-bold">
        <p className="pb-5 pt-5 text-lilla text-[20px]">Contact</p>
        <p className="pb-5 text-lilla text-[20px]">About Us</p>
        <p className="pb-5 text-lilla text-[20px]">Sponsor</p>
      </div>
      <div>
        <img className="w-150 h-150" src="/img/logo.svg" alt="logo ikon"></img>
      </div>
    </section>
  );
};

export default Footer;
