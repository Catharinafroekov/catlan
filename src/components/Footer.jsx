import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <section className=" h-500 flex justify-evenly p-10 fixed bottom-0 left-0 w-full">
      <div>
        <FaInstagramSquare className="text-lilla h-50 w-50" />
        <FaFacebookSquare className="text-lilla h-50 w-50" />
        <FaTwitterSquare className="text-lilla h-50 w-50" />
      </div>
      <div className="text-center font-bold">
        <p className="pb-5 text-lilla">Contact</p>
        <p className="pb-5 text-lilla">Bla</p>
        <p className="pb-5 text-lilla">Bla</p>
      </div>
      <div>Logo skal være her</div>
    </section>
  );
};

export default Footer;
