import Footer from "../welcome/Footer";
import ContactOne from "./ContactOne";

export default function Contact() {
  return (
    <div className="w-full h-full">
      <div className="fixed z-[-1] top-0 w-full bg-primary flex items-center justify-center">
        <img
          className=" w-full h-screen object-cover drop-shadow-md opacity-80"
          src="service.jpg"
          alt=""
        />
        <p className="absolute top-36 text-white text-4xl font-kanit font-bold">
          Contact Us
        </p>
      </div>
      <ContactOne />
      <Footer />
    </div>
  );
}
