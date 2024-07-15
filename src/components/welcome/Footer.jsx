import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <section className="w-full h-[400px] lg:h-80 backdrop-blur-md">
      <div className="w-11/12 h-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="w-full h-full flex items-center justify-center">
          <img
            className="z-40 w-72 md:w-80 lg:w-full"
            src="liben-nobg.png"
            alt=""
          />
        </div>
        <div className="w-full h-full flex items-center justify-center gap-4">
          <FaInstagramSquare size={35} className="text-white" />
          <FaLinkedin size={35} className="text-white" />
          <FaFacebookSquare size={35} className="text-white" />
        </div>
        <div className="w-full h-full flex flex-col items-center lg:items-end justify-center gap-4 font-kanit ">
          <p className="text-white text-center lg:text-end">
            Alem Bank, On the road from Yeshi Total to Polytechnic College.
          </p>
          <p className="text-white text-end">Addis Ababa, Ethiopia</p>
          <p className="text-white">adam@libenpharmaplc.com</p>
          <div className="text-white flex gap-1">
            <p>&copy;</p>
            <p>Frew Befekadu. All rights reserved.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
